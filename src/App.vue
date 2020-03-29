<template>
  <div id="app" :class="['App', { 'is-dark' : spymasterView }]">
    <Header />
    <GameHeader/>
    <Deck v-if="cards" :cards="cards" />
    <SideContainer :is-open="gameDialogOpen">
      <Heading :level="1">CovidNames – das CodeNames in Quarantäne-Zeiten</Heading>
      <div v-for="(section, index) in infoSections" :key="index">
        <Heading v-if="section.title" :level="2">{{ section.title }}</Heading>
        <Paragraph :content="section.text">
        </Paragraph>
      </div>
    </SideContainer>
    <SideContainer :is-open="infoOpen">
      <Heading :level="1">Neues Spiel starten</Heading>
      <div v-for="(section, index) in newGameSections" :key="index">
        <Heading v-if="section.title" :level="2">{{ section.title }}</Heading>
        <Paragraph :content="section.text">
        </Paragraph>
        <RegenerateForm />
      </div>
    </SideContainer>
    <div class="IconButton-container">
      <IconButton 
        :class="[{ 'is-hidden' : infoOpen }]" 
        @click.native="openNewGameDialog" 
        :text="!gameDialogOpen ? 'Neues Spiel' : 'Schliessen'" 
        :icon="gameDialogOpen ? 'close' : 'replay'" 
      />
      <IconButton 
        :class="[{ 'is-hidden' : gameDialogOpen }]" 
        @click.native="openInfo" 
        :text="!infoOpen ? 'Wie funktioniert\'s' : 'Schliessen'" 
        :icon="infoOpen ? 'close' : 'question-mark'" 
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Deck from './components/Deck.vue'
import Header from './components/Header.vue'
import GameHeader from './components/GameHeader.vue'
import SideContainer from './components/SideContainer.vue'
import Heading from './components/Heading.vue'
import Paragraph from './components/Paragraph.vue'
import IconButton from './components/IconButton.vue'
import RegenerateForm from './components/RegenerateForm.vue'

export default {
  name: 'app',
  components: {
    Deck,
    SideContainer,
    GameHeader,
    Header,
    RegenerateForm,
    IconButton,
    Paragraph,
    Heading
  },
  data: () => {
    return {
      newGameSections: [
        {
          title: false,
          text: 'Gebe hier ein beliebiges Wort oder eine Zahlenabfolge ein. Generiere damit ein zufälliges Spiel. Das Wort wird in der URL angezeigt und der Link kann nun mit anderen Spielern geteilt werden.'
        },
      ],
      infoSections: [
        {
          title: false,
          text: 'CovidNames ist eine digitale Version des Spiels «CodeNames» und entstand während der Corona-Virus-Quarantäne. Grundsätzlich sind die Regeln dieselben, jedoch werden einige Dinge verbessert, die mich schon immer an CodeNames gestört haben. Beispielsweise, dass die Kärtchen nicht dasselbe Seitenverhältnis haben, wie die Markierungen auf der Lösungskarte der Spielleiter.'
        },
        {
          title: 'Spielregeln',
          text: 'Spielregeln'
        },
        {
          title: 'Wie läuft das jetzt digital ab?',
          text: `
            <ol>
              <li>Alle Spieler öffnen die Seite in einem modernen Browser.</li>
              <li>Jemand beginnt ein neues Spiel und gibt einen Seed ein. Dieser Seed beeinflusst den Zufallsfaktor so, dass beim gleichen Seed immer dasselbe zufällige Spiel erscheint.</li>
              <li>Die Spielemacher öffnen beide ihre Ansicht und das Spiel startet wie gewohnt.</li>
              <li>Für das Aufdecken von Kärtchen klickt man auf das Häkchen.</li>
            </ol>
          `
        },
      ]
    }
  },
  computed: {
    ...mapGetters('ui', ['cards']),
    ...mapState('ui', ['spymasterView', 'gameDialogOpen', 'infoOpen'])
  },
  methods: {
    ...mapActions('ui', ['toggleInfo', 'toggleGameDialog']),
    openNewGameDialog() {
      this.toggleGameDialog()
    },
    openInfo() {
      this.toggleInfo()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/global';
@import '@/assets/css/_generic.normalize';
@import '@/assets/css/_generic.box-sizing';
@import '@/assets/css/_elements.page';

$c: 'App';

.#{$c} {
  height: 100%;
  min-height: 100vh;
  transition: background-color $s-animation-duration-default;


  .IconButton-container {
    position: fixed;
    bottom: $s-size-spacer-medium;
    right: $s-size-spacer-medium;
    z-index: z('iconbuttons');

    .IconButton {
      margin-top: 1em;

      &.is-hidden {
        opacity: 0;
      }
    }
  }

  &.is-dark {
    background-color: $s-color-black;
  }
}
</style>
