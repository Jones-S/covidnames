<template>
  <div id="app">
    <Deck :words="words" />
    <Input />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Input from './components/Input.vue'
import Deck from './components/Deck.vue'

export default {
  name: 'app',
  components: {
    Input,
    Deck
  },
  computed: {
    ...mapGetters('ui', ['get25Words']),
    words() {
      return this.get25Words
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
