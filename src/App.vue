<template>
  <div id="app" :class="['App', { 'is-dark' : spymasterView }]">
    <Header />
    <GameHeader/>
    <Deck v-if="cards" :cards="cards" />
    <SideContainer />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Deck from './components/Deck.vue'
import Header from './components/Header.vue'
import GameHeader from './components/GameHeader.vue'
import SideContainer from './components/SideContainer.vue'

export default {
  name: 'app',
  components: {
    Deck,
    SideContainer,
    GameHeader,
    Header
  },
  computed: {
    ...mapGetters('ui', ['cards']),
    ...mapState('ui', ['spymasterView'])
  }
}
</script>

<style lang="scss">
@import '@/assets/css/global';
@import '@/assets/css/_generic.normalize';
@import '@/assets/css/_generic.box-sizing';
@import '@/assets/css/_elements.page';

$c: 'App';

.#{$c} {

  height: 100%;
  min-height: 100%;
  transition: background-color $s-animation-duration-default;

  &.is-dark {
    background-color: $s-color-black;
  }
}
</style>
