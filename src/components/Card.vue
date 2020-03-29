<template>
  <div v-if="card" :class="['Card', typeModifier(card.type), { 'is-spymaster' : spymasterView }]">
    <div :class="['card-cover', { 'is-revealed' : revealed, 'is-checking': isChecking }]"></div>
    <span>{{ card.text }}</span>
    <IconButton v-if="!revealed" class="IconButton" @click.native="reveal" :text="'Aufdecken'" :icon="spymasterView && card.type === 3 ? 'check-white' : 'check'" />
    <IconButton v-else class="IconButton" @click.native="check" :text="isChecking ? 'Zudecken' : 'Prüfen'" :icon="'eye'" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      isChecking: false,
      sadTromboneSound: false
    }
  },
  props: {
    card: {
      type: Object,
      required: true,
      default: () => false
    }
  },
  computed: {
    ...mapState('ui', ['spymasterView'])
  },
  mounted() {
    this.sadTromboneSound = new Audio(require('@/assets/sad_trombone.mp3'))
  },
  methods: {
    ...mapActions('ui', ['updateScore']),
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
      if (this.card.type === DEATH_CARD) {
        this.sadTromboneSound.play()
      }
      this.updateScore(this.card.type) // send index to update score
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

  .#{$c} {
    background-color: $s-color-white;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 0 0 3rem rgba($s-color-black, 0.3);
    border-radius: 0.8rem; 
    position: relative;
    overflow: hidden;    
    padding: $s-size-spacer-small / 2;
    // height: calc(20vw - #{$s-card-spacer-mobile});
    // width: calc(20vw - #{$s-card-spacer-mobile});
    // width: 100%;
    transition: background-color $s-animation-duration-default, box-shadow $s-animation-duration-default;

    // @include mq($from: 1150) {
      //   height: $s-card-size;
    //   width: $s-card-size;
    // }
    &::before {
      content: "";
      padding-bottom: 100%;
      display: inline-block;
      vertical-align: top;
    }

    span {
      @include font-style-cards;
      color: $s-color-black;
      display: block;
      width: calc(100% - #{$s-size-spacer-small});
      position: absolute;
      top: 50%;
      left: $s-size-spacer-small / 2;
      transform: translateY(-50%);
      transition: color $s-animation-duration-default;
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

    &.is-spymaster {
      background-color: $s-color-neutral;
      /* offset-x | offset-y | blur-radius | color */
      box-shadow: 0 0 3rem rgba($s-color-neutral, 0.65);

      &.#{$c}--red {
        background-color: $s-color-red;
        box-shadow: 0 0 3rem rgba($s-color-red, 0.65);
        
        span {
          color: $s-color-white;
        }
      }
      &.#{$c}--blue {
        background-color: $s-color-blue;
        box-shadow: 0 0 3rem rgba($s-color-blue, 0.65);

        span {
          color: $s-color-white;
        }
      }
      &.#{$c}--death {
        background-color: $s-color-death;
        box-shadow: 0 0 3rem rgba($s-color-white, 0.35);

        span {
          color: $s-color-white;
        }
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
