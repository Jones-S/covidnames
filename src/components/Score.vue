<template>
  <div :class="['Score']">
    <div class="Score__item">
      <Light :color="'blue'" />
      <span>{{ score.blue }}/{{ starterTeam === 0 ? '9' : '8' }}</span>
    </div>
    <div class="Score__item">
      <Light :color="'red'" />
      <span>{{ score.red }}/{{ starterTeam === 1 ? '9' : '8' }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Light from './Light.vue'

export default {
  name: 'Score',
  components: {
    Light
  },
  computed: {
    ...mapState('ui', ['starterTeam', 'score'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'Score';
  
  .#{$c} {
    &,
    &__item {
      display: flex;
      align-items: center;
    }

    &__item {
      @include font-style-base;
      margin-left: 2em;
    }

    span {
      @include font-style-base;
      padding-left: 1em;
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
