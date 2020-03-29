<template>
  <div :class="['SideContainer', { 'is-open' : isOpen }]">
    <div class="SideContainer__inner">
       <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideContainer',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'SideContainer';
  
  .#{$c} {
    z-index: z('sidecontainer');
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding: $s-size-spacer-medium;
    background: $s-color-white;
    transition: right $s-animation-duration-default;
    box-shadow: 0 0 3rem;
    color: rgba($s-color-black, 0.3); // box shadow color

    &.is-open {
      right: 0;
    }

    @include mq($from: medium) {
      width: 50%;
      max-width: 72rem;
    }
  }
</style>
