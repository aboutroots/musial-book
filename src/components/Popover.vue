<template>
  <v-popover class="v-popover-container" trigger="hover" :autoHide="false">
    <span class="translatable" @click="onClick">{{ word }}</span>
    <div class="popover-container" slot="popover">
      <div v-if="hasAudio" class="audio-hint">
        <img src="../assets/img/volume.png" />Click on the word
      </div>
      <div class="pl">{{ dictKey }}</div>
      <div class="eng">{{ eng }}</div>
      <div v-if="hintsPl" class="hints-pl">
        {{ hintsPl }}
      </div>
      <div v-if="hintsEng" class="hints-eng">
        {{ hintsEng }}
      </div>
    </div>
  </v-popover>
</template>

<script>
import Dictionary from '../assets/dict.json';
export default {
  name: 'Popover',
  props: {
    word: {
      default: '',
    },
    dictKey: {
      default: '',
    },
  },
  computed: {
    mainKey() {
      return this.dictKey.toLowerCase();
    },
    eng() {
      return this.getValue('eng');
    },
    hintsEng() {
      return this.getValue('syntax-hints-eng');
    },
    hintsPl() {
      return this.getValue('syntax-hints-pl');
    },
    hasAudio() {
      return !!this.getValue('audio-file-name');
    },
  },
  methods: {
    getValue(key) {
      const value = Dictionary.pl[this.mainKey][key] || '';
      if (value.startsWith('ref:')) {
        const ref = value.split('ref:')[1];
        return Dictionary.pl[ref][key];
      }
      return value;
    },
    makeSound() {
      if (!this.hasAudio) {
        console.log(`no audio file for ${this.dictKey}`);
        return;
      }

      const filename = this.getValue('audio-file-name');
      const audio = new Audio(require(`../assets/audio/${filename}`));
      audio.play();
    },
    onClick() {
      this.makeSound();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/theme.scss';
.popover-container {
  font-family: "century";
  .pl {
    color: darkturquoise;
    font-weight: 600;
    font-size: 1em;
  }
  .eng {
    font-size: 0.95em;
  }
  .hints-pl {
    color: $primary;
    font-weight: 600;
    font-size: 1em;
  }
  .hints-eng {
    font-size: 0.95em;
  }
}
.audio-hint {
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
}
</style>
<style lang="scss">
@import '../assets/styles/theme.scss';
.tooltip {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^='top'] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='bottom'] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='right'] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^='left'] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #2c3e50;

    .popover-inner {
      background: $bgcolor;
      color: $color;
      padding: 8px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $bgcolor;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>
