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
      this.changeSeed(this.input)
      this.setRoute(this.input)
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
        this.input = query
        this.activeSeed = query
        this.changeSeed(query)
      } else {
        // set a seed anyway
        this.changeSeed(this.activeSeed)
      }
    },
    setRoute(seed) {
      // we need to check if the query already exists:  https://github.com/quasarframework/quasar/issues/5672
      if (!this.$route.query || !this.$route.query.seed || this.$route.query.seed !== seed) {
        this.$router.replace({ query: { seed: seed } })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
