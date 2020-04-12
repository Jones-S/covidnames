<template>
  <div class="Header">
    <Logo />
    <ToggleButton ref="toggle" :text="'Spielleiter-Ansicht'" @toggle="switchView" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Logo from './Logo.vue'
import ToggleButton from './ToggleButton.vue'

export default {
  name: 'Header',
  components: {
    ToggleButton,
    Logo
  },
  watch: {
    spymasterView: function(newValue) {
      if (!newValue) {
        this.$refs.toggle.deactivate()
      }
    }
  },
  computed: {
    ...mapState('ui', ['spymasterView'])
  },
  methods: {
    ...mapActions('ui', ['toggleSpyMaster']),
    switchView() {
      this.toggleSpyMaster()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'Header';
  
  .#{$c} {
    height: $s-the-header-bar-height;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 0 0 3rem rgba($s-color-black, 0.3);
    display: flex;
    align-items: center;
    padding: 0 $s-size-gutter-small;
    margin-bottom: $s-size-gutter-medium;
    justify-content: space-between;
    transition: background-color $s-animation-duration-default;
  }

  @include mq($from: large) {
    padding: 0 $s-size-gutter-medium;
  }

  // spymaster view
  .is-dark {
    .#{$c} {
      background-color: $s-color-black;
      /* offset-x | offset-y | blur-radius | color */
      box-shadow: 0 0 3rem rgba($s-color-white, 0.3);    }
  }
</style>
