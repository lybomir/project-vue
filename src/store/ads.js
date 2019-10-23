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
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = 'qweqwe'
      commit('createAd', payload)
    }
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
        return state.items.find(ad => {
          return ad.id === adId
        })
      }
    }
  }
}
