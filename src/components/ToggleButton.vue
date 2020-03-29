<template>
  <button class="ToggleButton" @click="toggle">
    <span class="ToggleButton__text">{{ text }}</span>
    <div :class="['ToggleButton__toggle-housing', { 'is-on' : on }]">
      <div :class="['ToggleButton__toggle', { 'is-on' : on }]"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    text: {
      type: [String, Boolean],
      required: false,
      default: false
    }
  },
  data() {
    return {
      on: false
    }
  },
  methods: {
    toggle() {
      this.on = !this.on
      this.$emit('toggle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'ToggleButton';
  $c-togglebutton-height: 2.6rem;
  $c-togglebutton-width: 4.6rem;
  $c-togglebutton-toggle-size: 2.2rem;
  
  .#{$c} {
    @include reset-button;
    display: inline-flex;
    width: auto;
    align-items: center;
    padding: 0;

    &__text {
      @include font-style-base;
      margin-right: 1em;
    }

    &__toggle-housing {
      background-color: $s-color-grey;
      border-radius: 50rem; // to make pill shape: https://stackoverflow.com/a/18795153/1121268
      height: $c-togglebutton-height;
      width: $c-togglebutton-width;
      position: relative;
      display: flex;
      align-items: center;
      transition: background-color $s-animation-duration-default;

      &.is-on {
        background-color: $s-color-on;
      }
    }

    &__toggle {
      position: absolute;
      left: 0.2rem;
      background-color: $s-color-dark-grey;
      width: $c-togglebutton-toggle-size;
      height: $c-togglebutton-toggle-size;
      border-radius: 50%;
      transition: left $s-animation-duration-default, background-color $s-animation-duration-default;
      z-index: 10;

      &.is-on {
        left: calc(100% - #{$c-togglebutton-toggle-size} - 0.2rem);
        background-color: $s-color-black;
      }
    }

  }
  
  // spymaster view
  .is-dark {
    .#{$c} {
      color: $s-color-white;
    }
  }
</style>
