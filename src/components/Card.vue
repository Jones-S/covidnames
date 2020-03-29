<template>
  <v-breakpoint>
    <!-- https://github.com/adi518/vue-breakpoint-component#template -->
    <div v-if="card" :class="['Card', typeModifier(card.type), { 'is-spymaster' : spymasterView, 'is-hidden' : isHidden }]" slot-scope="scope" @click="revealMobile(scope.innerWidth)">
      <div :class="['card-cover', { 'is-revealed' : revealed, 'is-checking': isChecking }]"></div>
      <span>{{ card.text }}</span>
        <IconButton v-if="!revealed" class="IconButton" @click.native="reveal" :text="'Aufdecken'" :icon="spymasterView && card.type === 3 ? 'check-white' : 'check'" />
        <IconButton v-else class="IconButton" @click.native="check" :text="isChecking ? 'Zudecken' : 'Prüfen'" :icon="'eye'" />
    </div>
  </v-breakpoint>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { VBreakpoint } from 'vue-breakpoint-component'

import IconButton from './IconButton.vue'

const TEAM_BLUE = 0;
const TEAM_RED = 1;
const NEUTRAL_CARD = 2;
const DEATH_CARD = 3;

export default {
  name: 'Card',
  components: {
    IconButton,
    VBreakpoint
  },
  data() {
    return {
      revealed: false,
      isChecking: false,
      sadTromboneSound: false,
      failSound: false,
      successSound: false,
      isHidden: false
    }
  },
  props: {
    card: {
      type: [Object, Boolean],
      required: true,
      default: false
    }
  },
  computed: {
    ...mapState('ui', ['spymasterView'])
  },
  watch: {
    $route() {
      this.resetCard()
    }
  },
  mounted() {
    this.sadTromboneSound = new Audio(require('@/assets/sad_trombone.mp3'))
    this.failSound = new Audio(require('@/assets/fail.mp3'))
    this.successSound = new Audio(require('@/assets/success.mp3'))
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
    mounted() {
      this.revealed = this.initalState
    },
    reveal() {
      this.revealed = true
      if (this.card.type === DEATH_CARD) {
        this.sadTromboneSound.play()
      } else if (this.card.type === NEUTRAL_CARD) {
        this.failSound.play()
      } else if (this.card.type === TEAM_BLUE || this.card.type === TEAM_RED) {
        this.successSound.play()
      }
      this.updateScore(this.card.type) // send index to update score
    },
    revealMobile(width) {
      if (width < 768) { // if we are below medium breakpoint, lets trigger the reveal method without the buttons
        if (this.revealed) {
          this.isChecking = !this.isChecking
        } else {
          this.reveal()
        }
      }
    },
    check() {
      this.isChecking = !this.isChecking
    },
    resetCard() {
      this.hideCard()
      this.revealed = false
      this.isChecking = false
      // wait to make sure the animation has ended
      setTimeout(() => {
        this.showCard()
      }, 400);
    },
    hideCard() {
      this.isHidden = true
    },
    showCard() {
      this.isHidden = false
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
    box-shadow: 0 0 1.5rem;
    color: rgba($s-color-black, 0.3); // box shadow color
    border-radius: 0.8rem; 
    position: relative;
    overflow: hidden;    
    padding: $s-size-spacer-small / 4;
    transition: background-color $s-animation-duration-default, box-shadow $s-animation-duration-default;
    cursor: pointer;

    @include mq($from: small) {
      box-shadow: 0 0 2rem;
      padding: $s-size-spacer-small / 2;
    }

    @include mq($from: medium) {
      box-shadow: 0 0 3rem;
      cursor: auto;
    }

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
      color: rgba($s-color-neutral, 0.65);

      &.#{$c}--red {
        background-color: $s-color-red;
        color: rgba($s-color-red, 0.65);
        
        span {
          color: $s-color-white;
        }
      }
      &.#{$c}--blue {
        background-color: $s-color-blue;
        color: rgba($s-color-blue, 0.65);

        span {
          color: $s-color-white;
        }
      }
      &.#{$c}--death {
        background-color: $s-color-death;
        color: rgba($s-color-white, 0.35);

        span {
          color: $s-color-white;
        }
      }
    }
    &.is-hidden {
      opacity: 0;
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
    z-index: 1;

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

    @include mq($to: medium) {
      display: none;
    }
  }

</style>
