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

  $c-deck-calculated-card-height: calc((100vh - 20rem) / 5 - 1rem);

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
    margin-bottom: 14rem;
  }
</style>
