<template>
  <div v-if="card" :class="['Card', typeModifier(card.type)]">
    <div :class="['card-cover', { 'is-revealed' : revealed, 'is-checking': isChecking }]"></div>
    <span>{{ card.text }}</span>
    <IconButton v-if="!revealed" class="IconButton" @click.native="reveal" :text="'Aufdecken'" :icon="'check'" />
    <IconButton v-else class="IconButton" @click.native="check" :text="isChecking ? 'Zudecken' : 'Prüfen'" :icon="'eye'" />
  </div>
</template>

<script>
import IconButton from './IconButton.vue'

const TEAM_BLUE = 0;
const TEAM_RED = 1;
const DEATH_CARD = 3;

export default {
  name: 'Card',
  components: {
    IconButton
  },
  data() {
    return {
      revealed: false,
      isChecking: false
    }
  },
  props: {
    card: {
      type: Object,
      required: true,
      default: () => false
    }
  },
  methods: {
    typeModifier(type) {
      let modifier
      switch (type) {
        case TEAM_BLUE:
          modifier = 'Card--blue'
          break
        case TEAM_RED:
          modifier = 'Card--red'
          break
        case DEATH_CARD:
          modifier = 'Card--death'
          break
        default:
          modifier = 'Card--neutral'
          break
      }
      return modifier
    },
    reveal() {
      this.revealed = true
    },
    check() {
      this.isChecking = !this.isChecking
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'Card';
  $c-card-size: 18.5rem;

  .#{$c} {
    background-color: $s-color-white;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 0 0 3rem rgba($s-color-black, 0.3);
    border-radius: 0.8rem; 
    margin: $s-size-spacer-small;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    
    padding: 1rem;
    height: 18.5rem;
    width: 18.5rem;

    span {
      color: $s-color-black;
      display: block;
      font-size: $s-fz-big;
    }

    &--red {
      .card-cover {
        background-color: $s-color-red;
      }
    }
    &--blue {
      .card-cover {
        background-color: $s-color-blue;
      }
    }
    &--death {
      .card-cover {
        background-color: $s-color-death;
      }
    }
  }

  .card-cover {
    background-color: $s-color-neutral;
    position: absolute;
    top: calc(-100% - 2.5rem); // 100% + hiding shadow
    left: 0;
    width: 100%;
    height: 100%;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 0 0 2rem rgba($s-color-black, 0.35);
    transition: top $s-animation-duration-default;

    &.is-revealed {
      top: 0;
    }

    &.is-checking {
      top: -80%;
    }
  }

  .IconButton {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    z-index: 10;
  }

</style>
