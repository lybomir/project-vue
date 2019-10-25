export default {
  state: {
    items: [
      {
        title: 'first ad',
        description: 'description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '123'
      },
      {
        title: 'second ad',
        description: 'description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '1234'
      },
      {
        title: 'third ad',
        description: 'description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.items.push(payload)
    },
    allUser (state, user) {
      state.items = user
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = 'qweqwe'
      commit('createAd', payload)
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
