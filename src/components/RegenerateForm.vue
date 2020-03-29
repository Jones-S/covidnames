<template>
  <div>
    <form @submit.prevent="regenerate()">
      <input v-model="input" placeholder="Seed">
      <Button @click="regenerate()">{{ buttonText }}</Button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from './Button.vue'

export default {
  name: 'Input',
  components: {
    Button
  },
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
  @import '@/assets/css/global';

  input {
    @include font-style-base;
    -webkit-appearance: none; // messes box shadow up
    width: 100%;
    padding: 0.6em 1em;
    border: 0;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 0 0 2rem rgba($s-color-black, 0.35);
    margin-top: 2em;
    margin-bottom: 1em;
  }
</style>
