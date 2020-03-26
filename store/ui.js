import words from '../data/words'

const state = {
  words: words,
  checkoutStatus: null
}

// actions
const actions = {}

// mutations
const mutations = {
  get25Words(state) {
    const shuffled = state.words.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 25)
  }
}

const getters = {
  sayYolo: () => {
    return 'yolo'
  },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}