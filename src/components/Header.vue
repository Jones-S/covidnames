<template>
  <div class="Header">
    <Logo />
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Header',
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'Header';
  
  .#{$c} {
    @include font-style-heading-base;

    height: $s-the-header-bar-height;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 0 0 3rem rgba($s-color-black, 0.3);  
  }
</style>
