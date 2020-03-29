<template>
  <div class="Deck">
    <Card v-for="(card, index) in cards" :key="index" :card="card" />
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Deck',
  components: {
    Card
  },
  props: {
    cards: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';

  .Deck {
    display: grid;
    justify-content: center;
    padding: 0 $s-size-gutter-small;
    grid-template-columns: repeat(5, 1fr [col-start]);
    grid-template-rows: repeat(5, 1fr [col-start]);
    grid-gap: $s-card-spacer-mobile $s-card-spacer-mobile;
    max-width: $s-size-content-max-width-large + 2 * $s-size-spacer-small;
    max-height: $s-size-content-max-width-large + 2 * $s-size-spacer-small;
    margin: 0 auto;

    @media only screen and (orientation: landscape) {
      & {
        grid-template-columns: repeat(5, 1fr [col-start]);
        grid-template-rows: repeat(5, 1fr [col-start]);
      }
    } 

    // @include mq($from: 1150) {
    //   grid-template-columns: repeat(5, ($s-card-size + ($s-card-spacer)) [col-start]);
    //   grid-template-rows: repeat(5, ($s-card-size + ($s-card-spacer)) [col-start]);
    //   grid-gap: $s-card-spacer $s-card-spacer;
    // }
  }
</style>
