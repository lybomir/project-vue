import firebase from 'firebase/app'

class Ad {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    items: [

    ]
  },
  mutations: {
    createAd (state, payload) {
      state.items.push(payload)
    },
    allUser (state, user) {
      state.items = user
    },
    loadAds (state, payload) {
      state.items = payload
    }
  },
  actions: {
    async createAd ({ commit, getters }, payload) {
      commit('clearError')
      commit('setLoading', true)
      const image = payload.image
      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo)
        const ad = await firebase.database().ref('ads').push(newAd)
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        const fileData = await firebase.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
        const imageSrc = fileData.metadata.downloadURLs
        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key,
          imageSrc
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({ commit }) {
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []

      try {
        const fbVal = await firebase.database().ref('ads').once('value')
        const ads = fbVal.val()
        console.log(ads)
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
          )
        })

        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
    // async getUser ({ commit }) {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
    //   const user = await res.json()
    //   commit('allUser', user)
    //   console.log(user)
    // }
  },
  getters: {
    items (state) {
      return state.items
    },
    promoAds (state) {
      return state.items.filter(item => {
        return item.promo === true
      })
    },
    myAds (state) {
      return state.items
    },
    adById (state) {
      return adId => {
        console.log(adId)
        return state.items.find(ad => ad.id === adId)
      }
    }
  }
}
