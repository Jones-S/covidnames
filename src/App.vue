<template>
  <div id="app" :class="['App', { 'is-dark' : spymasterView }]">
    <Header />
    <GameHeader/>
    <Deck v-if="cards" :cards="cards" />
    <SideContainer :is-open="infoOpen">
      <Heading :level="1">CovidNames – das CodeNames in Quarantäne-Zeiten</Heading>
      <div v-for="(section, index) in infoSections" :key="index">
        <Heading v-if="section.title" :level="section.level || 2">{{ section.title }}</Heading>
        <Paragraph :content="section.text">
        </Paragraph>
      </div>
    </SideContainer>
    <SideContainer :is-open="gameDialogOpen">
      <Heading :level="1">Neues Spiel starten</Heading>
      <div v-for="(section, index) in newGameSections" :key="index">
        <Heading v-if="section.title" :level="section.level || 2">{{ section.title }}</Heading>
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
import rules from '../data/rules.js'

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
          text: 'Gebe hier ein beliebiges Wort oder eine Zahlenabfolge ein. Damit generierst du ein zufälliges Spiel. Das Wort wird in der URL angezeigt wodurch dasselbe Spiel mit anderen Spielern geteilt werden kann.'
        },
      ],
      infoSections: [
        {
          title: false,
          text: 'CovidNames ist eine digitale Version des Spiels «CodeNames» und entstand während der Corona-Virus-Quarantäne. Grundsätzlich sind die Regeln dieselben (siehe unten), jedoch habe ich einige Dinge verbessert, die mich schon immer an CodeNames gestört haben. Beispielsweise, dass die Kärtchen nicht dasselbe Seitenverhältnis haben wie die Markierungen auf der Lösungskarte der Spielleiter. Ebenfalls ist die digitale Ansicht für den Spielleiter höchstwahrscheinlich einfacher zu überblicken, da die Begriffe, die zu seinem Team gehören direkt eingefärbt sind.'
        },
        {
          title: false,
          text: 'Am besten setzt man einen Zoom/Skype/Whatsapp/Facetime-Call auf, damit die verschiedenen Spieler sich leicht austauschen können. Als Gruppe einigt man sich auf ein Spiel, und teilt sich dieses per Link. Die Spielleiter schauen darauf, dass Niemand auf ihr Gerät die Lösung erspähen kann. Grundsätzlich funktioniert diese digitale Version aber natürlich nur durch Fairness!'
        },
        {
          title: 'Wie läuft das jetzt digital ab?',
          text: `
            <ol>
              <li>Alle Spieler öffnen die Seite in einem modernen Browser.</li>
              <li>Jemand beginnt ein neues Spiel und gibt dazu ein willkürliches Wort ein. Dieses Wort (Seed) beeinflusst den Zufallsfaktor so, dass beim gleichen Seed immer dasselbe zufällige Spiel erscheint.</li>
              <li>Die Spielemacher öffnen beide ihre Ansicht und das Spiel startet wie gewohnt.</li>
              <li>Für das Aufdecken von Kärtchen klickt man auf das Häkchen.</li>
            </ol>
          `
        },
        {
          title: false,
          text: `
            <hr>
          `
        },
        {
          title: 'Spielregeln',
          text: `
            Hier folgen die offiziellen Spielregeln von CodeNames...
          `
        },
        ...rules,
        {
          title: false,
          text: `
            <hr>
          `
        },
        {
          title: 'Info',
          text: `
            Dieses Web-App dient dem alleinigen Zweck das Spiel «CodeNames» auch während Corona-Zeiten zu spielen. Für Inputs, Kommentare oder Sonstiges, darf man mich gerne kontaktieren:<br><br>
            <a href"mailto:covidnames@jonasscheiwiller.ch">covidnames@jonasscheiwiller.ch</a><br><br>
            Achtung: Dieses Web-App hat nicht den Anspruch auf allen Geräten oder in allen Browser zu funktionieren. Probiert es aus, nehmt einen modernen Browser und bleibt gesund!<br><br>
            Viel Spass!
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
  },
  metaInfo:() => {
    const ogImageUrl = require('@/assets/covidnames_og.jpg');
    return {
      title: 'CovidNames – CodeNames in Quarantäne-Zeiten',
      htmlAttrs: {
        // reptilian: 'gator'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Spiele CodeNames trotz Social Distancing.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:image', content: ogImageUrl },
        { name: 'og:image:width', content: 1080 },
        { name: 'og:image:height', content: 724 },
        { name: 'og:image:alt', content: 'CovidNames – CodeNames Spiel' }
      ]
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/css/_generic.normalize';
@import '@/assets/css/_generic.fonts';
@import '@/assets/css/_generic.box-sizing';
@import '@/assets/css/global';
@import '@/assets/css/_elements.page';

$c: 'App';

.#{$c} {
  height: 100%;
  min-height: 100vh;
  transition: background-color $s-animation-duration-default;


  .IconButton-container {
    position: fixed;
    bottom: $s-size-spacer-small + ($s-size-spacer-small / 2);
    right: $s-size-spacer-small + ($s-size-spacer-small / 2);
    z-index: z('iconbuttons');

    @include mq($from: large) {      
      bottom: $s-size-spacer-medium;
      right: $s-size-spacer-medium;
    }

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
