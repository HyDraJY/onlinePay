import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    id: null,
    email: '',
    status: '',
    address: '',
    phone: null
  },
  mutations: {
    CHANGE_STATUS(state, payload) {
      state.status = payload
    },
    SET_INFOs(state, { name, id, email }) {
      if (name && id && email) {
        state.name = name
        state.id = id
        state.email = email
      } else {
        state.name = ''
        state.id = null
        state.email = ''
      }
    },
    SET_PRIVACY(state, { address, phone }) {
      if (address && phone) {
        state.address = address
        state.phone = phone
      } else {
        state.address = ''
        state.phone = null

      }
    }
  },
  actions: {
    GET_PRIVACY() {
      return new Promise((resolve) => {
        let result = axios.get(`http://localhost:3000/users/3496083713741719`)
        resolve(result)
      })
    }
  },
  modules: {
  }
})
