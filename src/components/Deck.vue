<template>
  <div class="Deck">
    <Card v-for="(word, index) in words" :key="index" :word="word" />
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
    words: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  

  .Deck {
    display: grid;
    grid-template-columns: repeat(5, 20% [col-start]);
    grid-template-rows: repeat(5, 20% [col-start]);
  }
</style>
