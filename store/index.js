import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      cart: [],
      cartLength: null,
      totalPrice: 0,
      totalProducts: 0,
      sale: 0,
      sumSale: 0,
      delPrice: 0,
      priceWithDelivery: 0,
      promocodeActivated: false,
      promocodeError: false,
      fruits: [],
      exotics: [],
      vegetables: [],
      berries: [],
      green: [],
      baskets: [],
      fruitHits:[],
      exoticsHits: [],
      berriesHits: [],
      vegetablesHits:[],
      deliveryCities:null,
      deliveryCity: null,
      deliveryRegion: null,
      deliveryStreets: null,
      deliveryStreet: null,
      deliveryIndex: null,
    },
   mutations: {
      setCart (state) {
        if (localStorage.getItem('cart')) {
          state.cart = JSON.parse(localStorage.getItem('cart'));
          state.totalPrice = state.cart.map(item => Number(item.acf.price_count)).reduce(function(sum, current) { return sum + current }, 0)
          state.totalProducts = state.cart.map(item => Number(item.acf.quantity_count)).reduce(function(sum, current) { return sum + current }, 0)
        }
      },
      addToCart(state, product) {
        if(state.cart.length){ 
          let isExists = false
          state.cart.map(function(item) { 
            if( item.id === product.id) { 
              isExists = true
            }
            return item })
          if (!isExists) {
            state.cart.push(product)
            state.totalPrice = state.cart.map(item => Number(item.acf.price_count)).reduce(function(sum, current) { return sum + current }, 0)
            state.totalProducts = state.cart.map(item => Number(item.acf.quantity_count)).reduce(function(sum, current) { return sum + current }, 0)
            state.cart.map(function(item) { 
              if( item.id === product.id) { 
                item.acf.quantity_editor = true
              }
              return item
            })
          }
         }
        else{
          state.cart.push(product);
          state.totalPrice = state.cart.map(item => Number(item.acf.price_count)).reduce(function(sum, current) { return sum + current }, 0)
          state.totalProducts = state.cart.map(item => Number(item.acf.quantity_count)).reduce(function(sum, current) { return sum + current }, 0)
          state.cart.map(function(item) { 
            if( item.id === product.id) { 
              item.acf.quantity_editor = true
            }
            return item
          })
        } 
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      minusOne(state, item){
        if(item.acf.quantity_count  > 1)
        {
          state.cart = state.cart.map((i) => {
            if(i.id === item.id) {
              Number(i.acf.quantity_count -= 1); 
              i.acf.price_count = Number(i.acf.price_count) - Number(i.acf.price)
              state.totalPrice = Number(state.totalPrice) - Number(i.acf.price)
              localStorage.setItem('cart', JSON.stringify(state.cart));
            }
            return i
          })
          state.totalProducts = state.cart.map(item => Number(item.acf.quantity_count)).reduce(function(sum, current) { return sum + current }, 0)
        }
      },
      plusOne(state, item){
        state.cart = state.cart.map((i) => {
          if(i.id === item.id) {
            Number(i.acf.quantity_count++); 
            i.acf.price_count = Number(i.acf.price_count) + Number(i.acf.price)
            state.totalPrice = Number(state.totalPrice) + Number(i.acf.price)
            localStorage.setItem('cart', JSON.stringify(state.cart));
          }
          return i
        })
        state.totalProducts = state.cart.map(item => Number(item.acf.quantity_count)).reduce(function(sum, current) { return sum + current }, 0)
      },
      changeDelPrice(state, price) {
        state.delPrice = price
      },
      deleteProduct( state, payload){
        state.cart.splice(payload.id, 1);
        state.totalPrice = Number(state.totalPrice) - Number(payload.product.acf.price_count)
        state.totalProducts = state.cart.map(item => Number(item.acf.quantity_count)).reduce(function(sum, current) { return sum + current }, 0)
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      setFruits (state, products) {
        state.fruits = products
      },
      setExotics (state, products) {
        state.exotics = products
      },
      setVegetables (state, products) {
        state.vegetables = products
      },
      setBerries (state, products) {
        state.berries = products
      },
      setGreen (state, products) {
        state.green = products
      },
      setBaskets (state, products) {
        state.baskets = products
      },
      setFruitsHits (state, hits) {
        state.fruitsHits = hits
      },
      setExoticsHits (state, hits) {
        state.exoticsHits = hits
      },
      setVagetablesHits (state, hits) {
        state.vegetablesHits = hits
      },
      setBerriesHits (state, hits) {
        state.berriesHits = hits
      },
      setDeliveryCities (state, deliveryCities, deliveryRegion) {
        state.deliveryCities = deliveryCities
        state.deliveryRegion = deliveryRegion
      },
      setDeliveryCity(state, datas) {
        state.deliveryCity = datas.value
        state.deliveryCities = null
        state.deliveryRegion = datas.data.region
      },
      setDeliveryStreets (state, deliveryStreets) {
        state.deliveryStreets = deliveryStreets
      },
      setDeliveryStreet (state, data) {
        state.deliveryStreet = data.data.street
        state.deliveryStreets = null
      },
      setDeliveryIndex (state, index) {
        state.deliveryIndex = index
      }
    
    },
    actions: {
        async getFruits ({ commit }) {
          const products = await axios.get('https://fruit-atlas.ru/admin/wp-json/wp/v2/fruits?_embed&per_page=100')
          commit('setFruits', products.data)
        },
        async getExotics ({ commit }) {
          const products = await axios.get('https://fruit-atlas.ru/admin/wp-json/wp/v2/exotics?_embed&per_page=100')
          commit('setExotics', products.data)
        },
        async getVegetables ({ commit }) {
          const products = await axios.get('https://fruit-atlas.ru/admin/wp-json/wp/v2/vegetables?_embed&per_page=100')
          commit('setVegetables', products.data)
        },
        async getBerries ({ commit }) {
          const products = await axios.get('https://fruit-atlas.ru/admin/wp-json/wp/v2/berries?_embed&per_page=100')
          commit('setBerries', products.data)
        },
        async getGreen ({ commit }) {
          const products = await axios.get('https://fruit-atlas.ru/admin/wp-json/wp/v2/green?_embed&per_page=100')
          commit('setGreen', products.data)
        },
        async getBaskets ({ commit }) {
          const products = await axios.get('https://fruit-atlas.ru/admin/wp-json/wp/v2/baskets?_embed&per_page=100')
          commit('setBaskets', products.data)
        },
        async getFruitsHits ({ commit }) {
          const hits = await axios.get(`https://fruit-atlas.ru/admin/wp-json/wp/v2/fruits?_embed&per_page=100`)
          commit('setFruitsHits', hits.data.filter((item) => { return item.acf.hit === true }))
        },
        async getExoticsHits ({ commit }) {
          const hits = await axios.get(`https://fruit-atlas.ru/admin/wp-json/wp/v2/exotics?_embed&per_page=100`)
          commit('setExoticsHits', hits.data.filter((item) => { return item.acf.hit === true }))
        },
        async getVegetablesHits ({ commit }) {
          const hits = await axios.get(`https://fruit-atlas.ru/admin/wp-json/wp/v2/vegetables?_embed&per_page=100`)
          commit('setVagetablesHits', hits.data.filter((item) => { return item.acf.hit === true }))
        },
        async getBerriesHits ({ commit }) {
          const hits = await axios.get(`https://fruit-atlas.ru/admin/wp-json/wp/v2/berries?_embed&per_page=100`)
          commit('setBerriesHits', hits.data.filter((item) => { return item.acf.hit === true }))
        },
        async getDeliveryCities ({ commit }, params) {
           await this.$axios.post("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
            {
              query: params.city
            },
            {
              headers: {
                contentType: "application/json",
                Authorization: "Token d7ddbc18cd786871c68484922bd302052d4dfd5b"
              },
            }
          )
          .then((response) => { 
            commit('setDeliveryCities', response.data.suggestions, response.data.suggestions)
          });
        },  
        async getDeliveryStreets ({ commit }, params) {
          await this.$axios.post("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
           {
             query: params.street,
             locations: [{ region: this.state.deliveryRegion }]
           },
           {
             headers: {
               contentType: "application/json",
               Authorization: "Token d7ddbc18cd786871c68484922bd302052d4dfd5b"
             },
           }
         )
         .then((response) => { 
           commit('setDeliveryStreets', response.data.suggestions)
           commit('setDeliveryIndex', response.data.suggestions[0].data.postal_code)
         });
       }  
    }
  })
}

export default createStore