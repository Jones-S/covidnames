<template>
  <div id="app" :class="['App', { 'is-dark' : spymasterView }]">
    <Header />
    <SpyMasterHeader/>
    <Deck v-if="cards" :cards="cards" />
    <Input />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Input from './components/Input.vue'
import Deck from './components/Deck.vue'
import Header from './components/Header.vue'
import SpyMasterHeader from './components/SpyMasterHeader.vue'

export default {
  name: 'app',
  components: {
    Input,
    Deck,
    SpyMasterHeader,
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
