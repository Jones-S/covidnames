<template>
  <button class="Button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'Button';
  
  .#{$c} {
    @include reset-button;
    @include font-style-base;

    background-color: $s-color-black;
    width: auto;
    border-radius: 0.8rem;
    color: $s-color-white;
    padding: 0.6em 1.2em;
  }
</style>
