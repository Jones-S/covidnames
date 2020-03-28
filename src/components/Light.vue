<template>
  <div :class="['Light', `Light--${color}`]">

  </div>
</template>

<script>
export default {
  name: 'Light',
  props: {
    color: {
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
  $c: 'Light';
  
  .#{$c} {
    width: $s-icon-size;
    height: $s-icon-size;
    border-radius: 50%;
    background-color: $s-color-white;
    /* offset-x | offset-y | blur-radius*/
    box-shadow: 0 0 3rem;
    color: rgba($s-color-white, 0.95);
    display: inline-block;

    &--red {
      color: rgba($s-color-red, 0.95);
      background-color: $s-color-red;
    }
    &--blue {
      /* offset-x | offset-y | blur-radius*/
      color: rgba(lighten($s-color-blue, 20%), 0.95);
      background-color: $s-color-blue;
    }
  }
</style>
