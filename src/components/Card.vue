<template>
  <div class="Card">
    <span>{{ word }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    word: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';

  $c-card-size: 185px;

  .Card {
    background-color: black;
    padding: 10px;

    span {
      color: $s-color-primary;
    }
  }

</style>
