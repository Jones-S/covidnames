<template>
  <div>
    This is the deck
    <Card :word="'jones'" />
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
</style>
