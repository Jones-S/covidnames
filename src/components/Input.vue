<template>
  <div>
    <form @submit.prevent="regenerate()">
      <input v-model="input" placeholder="Seed">
      <button @click="regenerate()">{{ buttonText }}</button>
    </form>
    <p>Your Logo Seed is: {{ activeSeed }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Input',
  data() {
    return {
      input: 'Random',
      activeSeed: 'Random',
      buttonText: 'Neues Spiel starten'
    }
  },
  mounted() {
    this.checkRoute()
  },
  methods: {
    ...mapActions('ui', ['changeSeed']),
    regenerate() {
      this.activeSeed = this.input
      this.changeSeed('yolo')
      this.setRoute(this.activeSeed)
    },
    checkRoute() {
      let query =
        this.$route.query && this.$route.query.seed
          ? this.$route.query.seed
          : false
      // take the first if more than one query is available
      if (query.constructor === Array) {
        query = query[0]
      }
      if (query) {
        this.name = query
        this.activeSeed = query
        this.changeSeed('yolo')
      }
    },
    setRoute(name) {
      this.$router.replace({ query: { seed: name } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
