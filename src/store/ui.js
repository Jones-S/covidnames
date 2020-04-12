import words from '../../data/words'
import seedrandom from 'seedrandom' // eslint-disable-line no-unused-vars

const TEAM_BLUE = 0;
const TEAM_RED = 1;
const NEUTRAL_CARD = 2;
const DEATH_CARD = 3;

const state = {
  current25Words: [],
  seed: 'random',
  starterTeam: false,
  gamePattern: [],
  score: {
    red: 0,
    blue: 0
  },
  spymasterView: false,
  gameDialogOpen: false,
  infoOpen: false,
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
  toggleSpyMaster({ commit }) {
    commit('TOGGLE_SPYMASTER')
  },
  closeSpyMaster({ commit }) {
    commit('CLOSE_SPYMASTER')
  },
  toggleInfo({ commit }) {
    commit('TOGGLE_INFO')
  },
  toggleGameDialog({ commit }) {
    commit('TOGGLE_GAME_DIALOG')
  },
  closeGameDialog({ commit }) {
    commit('CLOSE_GAME_DIALOG')
  },
  updateScore({ commit }, payload) {
    if (payload === TEAM_BLUE || payload === TEAM_RED ) {
      commit('INCREASE_COUNT', payload)
    }
  },
  changeSeed({ commit, dispatch }, payload) {
    commit('SAVE_SEED', payload)
    dispatch('setRandomizedData')
  },
  setRandomizedData({ commit, state }) {
    // reset some things
    state.score = {
      red: 0,
      blue: 0
    }
    // do all random stuff here to have some control in which steps they occur
    // first create a new seedrandom
    // which makes Math.random() predictable from here on
    seedrandom(state.seed, {
      global: true
    });
    // then shuffle the words
    const shuffled = shuffle(words)
    const shuffled25 = shuffled.slice(0, 25)
    commit('SAVE_SHUFFLED_WORDS', shuffled25)
    
    const starterTeam = Math.random() > 0.5 ? TEAM_BLUE : TEAM_RED
    commit('SAVE_STARTER_TEAM', starterTeam)

    // initiate with 25 neutral cards
    let gamePattern = []
    for (let cardIndex = 0; cardIndex < 25; cardIndex++) {
      if (cardIndex === 0) {
        gamePattern.push(DEATH_CARD)
      }
      // then depending on who starts set 8 and 9 of blue and red
      else if (cardIndex <= 9) {
        gamePattern.push(starterTeam)
      } else if (cardIndex <= 17) {
        gamePattern.push(starterTeam === TEAM_BLUE ? TEAM_RED : TEAM_BLUE)
      } else {
        gamePattern.push(NEUTRAL_CARD)
      }
    }
    // then shuffle
    const randomGamePattern = shuffle(gamePattern)
    commit('SAVE_GAME_PATTERN', randomGamePattern)
  }
}

// mutations
const mutations = {
  CLOSE_SPYMASTER(state) {
    state.spymasterView = !state.spymasterView
  },
  TOGGLE_SPYMASTER(state) {
    state.spymasterView = false
  },
  TOGGLE_INFO(state) {
    state.infoOpen = !state.infoOpen
  },
  TOGGLE_GAME_DIALOG(state) {
    state.gameDialogOpen = !state.gameDialogOpen
  },
  CLOSE_GAME_DIALOG(state) {
    state.gameDialogOpen = false
  },
  SAVE_SEED(state, seed) {
    state.seed = seed
  },
  INCREASE_COUNT(state, team) {
    if (team === TEAM_RED) {
      state.score.red++;
    } else if (team === TEAM_BLUE) {
      state.score.blue++;
    }
  },
  SAVE_SHUFFLED_WORDS(state, words) {
    state.current25Words = words
  },
  SAVE_STARTER_TEAM(state, team) {
    state.starterTeam = team
  },
  SAVE_GAME_PATTERN(state, pattern) {
    state.gamePattern = pattern
  }
}

const getters = {
  cards: (state) => {
    if (state.current25Words.length && state.gamePattern.length && state.current25Words.length === state.gamePattern.length) {
      return state.current25Words.map((word, index) => {
        return {
          text: word,
          type: state.gamePattern[index]
        }
      })
    } else {
      return false
    }
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}