<script>
export default {
  name: 'Heading',
  props: {
    level: {
      type: Number,
      required: true,
      default: 1
    },
  },
  render(createElement) {
    const modifierClassLevel = `Heading--h${this.level}`

    // Create the actual HTML element: h1, h2, etc.
    return createElement(
      `h${this.level}`,
      {
        class: {
          Heading: true,
          [modifierClassLevel]: true        
        }
      },
      [
        // Create span with content
        createElement('span',
          {
            class: {
              Heading__content: true
            },
          },
          this.$slots.default,
        )
      ]
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'Heading';
  
  .#{$c} {
    margin-bottom: 0.4em;

    &--h1 {
      @include font-style-heading-base;
    }

    &--h2 {
      @include font-style-heading-base;
    }

    &--h3 {
      @include font-style-heading-3;
    }
  }
</style>
