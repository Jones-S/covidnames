<template>
  <div class="GameHeader">
    <div class="GameHeader__left-side">
      <Light :color="starterTeam === 1 ? 'red' : 'blue'" />
      <span>{{ starterTeam === 1 ? 'Rot' : 'Blau' }} beginnt.</span>
    </div>
    <div class="GameHeader__right-side">
      <Score />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Light from './Light.vue'
import Score from './Score.vue'

export default {
  name: 'GameHeader',
  components: {
    Score,
    Light
  },
  computed: {
    ...mapState('ui', ['starterTeam'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'GameHeader';
  
  .#{$c} {
    padding: $s-size-spacer-small $s-size-gutter-small;
    max-width: $s-size-content-max-width-large;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      @include font-style-base;
      padding-left: 1em;
    }

    &__left-side,
    &__right-side {
      display: flex;
      align-items: center;
    }
  }
  // spymaster view
  .is-dark {
    .#{$c} {
      span {
        color: $s-color-white;
      }  
    }
  }
</style>
