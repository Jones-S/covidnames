<template>
  <p v-if="content" class="Paragraph" v-html="content" />
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    }
  },
}
</script>

<!-- Do not add "scoped" attribute because content is not affected by scope-->
<style lang="scss">
  @import '@/assets/css/global';
  $c: 'Paragraph';
  
  .#{$c} {
    @include font-style-base;

    // ol,
    // ul {}

    li {
      margin-left: 1em;
      margin-bottom: 0.4em;
    }
  }
</style>
