<template>
  <button :class="['IconButton']" :title="text">
    <div :class="['IconButton__icon', `IconButton__icon--${icon}`]"></div>
    <div v-if="text" class="IconButton__text">{{ text }}</div>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    text: {
      type: [String, Boolean],
      required: false,
      default: false
    },
    icon: {
      type: [String, Boolean],
      required: false,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'IconButton';
  $c-iconbutton-size: $s-icon-size;
  
  .#{$c} {
    @include reset-button;
    background-color: transparent;
    min-height: $c-iconbutton-size;
    position: relative;
    overflow: hidden;
    border-radius: 50rem; // to make pill shape: https://stackoverflow.com/a/18795153/1121268

    &__icon {
      width: $c-iconbutton-size;
      height: $c-iconbutton-size;
      border-radius: 50%;
      background-size: $c-iconbutton-size;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 10;
      transition: transform $s-animation-duration-default;


      &--eye {
        // Force webpack to handle this request as a module request with ~
        // https://stackoverflow.com/a/54030632/1121268
        background-image: url('~@/assets/icons/eye.svg');
      }
      &--check {
        background-image: url('~@/assets/icons/check.svg');
      }
      &--check-white {
        background-image: url('~@/assets/icons/check-white.svg');
      }
    }

    &__text {
      background-color: $s-color-grey;
      border-radius: 50rem; // to make pill shape: https://stackoverflow.com/a/18795153/1121268
      position: absolute;
      top: 0;
      right: -100%;
      min-height: $c-iconbutton-size;
      padding-right: $c-iconbutton-size + $c-iconbutton-size / 3;
      // for centering text vertically
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 1.2em;
      transition: right $s-animation-duration-default;
      
    }

    &:hover {
      .#{$c}__icon {
        transform: rotate(10deg);
      }

      .#{$c}__text {
        right: 0;
      }
    }
  }
</style>
