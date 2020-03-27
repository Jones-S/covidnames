<template>
  <div id="app">
    <Header />
    <Deck v-if="cards" :cards="cards" />
    <Input />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Input from './components/Input.vue'
import Deck from './components/Deck.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Input,
    Deck,
    Header
  },
  computed: {
    ...mapGetters('ui', ['cards'])
  }
}
</script>

<style lang="scss">
@import '@/assets/css/global';
@import '@/assets/css/_generic.normalize';
@import '@/assets/css/_elements.page';
</style>
