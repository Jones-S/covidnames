import words from '../../data/words'
import seedrandom from 'seedrandom' // eslint-disable-line no-unused-vars

const TEAM_BLUE = 0;
const TEAM_RED = 0;

const state = {
  current25Words: [],
  seed: 'random',
  starterTeam: false
}

const shuffle = (array) => {
  const tempArray = array.slice(0); // make a quick copy of the array
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
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
  changeSeed({ commit, dispatch }, payload) {
    commit('SAVE_SEED', payload)
    dispatch('setRandomizedData')
  },
  setRandomizedData({ commit, state }) {
    console.log('state.seed: ', state.seed)
    // do all random stuff here to have some control in which steps they occur
    // first create a new seedrandom
    // which makes Math.random() predictable from here on
    seedrandom(state.seed, {
      global: true
    });
    // then shuffle the words
    const shuffled = shuffle(words)
    const shuffled25 = shuffled.slice(0, 25)
    console.log('shuffled25: ', shuffled25)
    commit('SAVE_SHUFFLED_WORDS', shuffled25)
    
    const starterTeam = Math.random() > 0.5 ? TEAM_BLUE : TEAM_RED
    console.log('starterTeam: ', starterTeam)
    commit('SAVE_STARTER_TEAM', starterTeam)
  }
}

// mutations
const mutations = {
  SAVE_SEED(state, seed) {
    state.seed = seed
  },
  SAVE_SHUFFLED_WORDS(state, words) {
    state.current25Words = words
  },
  SAVE_STARTER_TEAM(state, team) {
    state.starterTeam = team
  }
}

const getters = {
  getWords: (state) => state.current25Words
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}