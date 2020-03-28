<template>
  <div class="SideContainer">
    <div class="SideContainer__inner">
      <Input />
      <Heading :level="1">CovidNames – das CodeNames in Quarantäne-Zeiten</Heading>
    </div>
  </div>
</template>

<script>
import Heading from './Heading.vue'
import Input from './Input.vue'

export default {
  name: 'SideContainer',
  components: {
    Input,
    Heading
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/assets/css/global';
  $c: 'SideContainer';
  
  .#{$c} {
    z-index: z('sidecontainer');
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow-y: scroll;
    padding: $s-size-gutter-small;
    background: $s-color-white;

    @include mq($from: medium) {
      width: 50%;
      max-width: 72rem;
    }
  }
</style>
