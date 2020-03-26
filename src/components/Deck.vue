<template>
  <div>
    This is the deck
  </div>
</template>

<script>
export default {
  name: 'Deck',
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
<style scoped>
</style>
