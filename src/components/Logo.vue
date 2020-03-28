<template>
  <span class="Logo">
    CovidNames
  </span>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'Logo';
  
  .#{$c} {
    @include font-style-heading-base;
  }

  // spymaster view
  .is-dark {
    .#{$c} {
      color: $s-color-white;
    }
  }
</style>
