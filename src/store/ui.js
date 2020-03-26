import words from '../../data/words'
import seedrandom from 'seedrandom' // eslint-disable-line no-unused-vars

const state = {
  words: words,
  seed: 'initialseed',
  randomSeed: seedrandom('initialseed')
}

const shuffle = (array, randomSeed) => {
  const tempArray = array.slice(0); // make a quick copy of the array
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(randomSeed() * counter);
    counter--;

    // And swap the last element with it
    let temp = tempArray[counter];
    tempArray[counter] = tempArray[index];
    tempArray[index] = temp;
  }

  return tempArray;
}

// actions
const actions = {
  changeSeed({ commit }, payload) {
    commit('SAVE_SEED', payload)
  }
}

// mutations
const mutations = {
  SAVE_SEED(seed) {
    state.randomSeed = seedrandom(seed)
  }
}

const getters = {
  get25Words(state) {
    const shuffled = shuffle(state.words, state.randomSeed)
    return shuffled.slice(0, 25)
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}