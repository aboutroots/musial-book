<template>
  <v-popover class="v-popover-container" trigger="hover" :autoHide="false">
    <span class="translatable" @click="onClick">{{ word }}</span>
    <div class="popover-container" slot="popover">
      <div>{{ dictKey }}</div>
      <div class="bold">{{ eng }}</div>
      <div v-if="translations['syntax-hints-pl']">
        {{ translations['syntax-hints-pl'] }}
      </div>
      <div v-if="translations['syntax-hints-eng']" class="bold">
        {{ translations['syntax-hints-eng'] }}
      </div>
      <div v-if="hasAudio" class="audio-hint">
        <img src="../assets/img/volume.png" />Click on the word
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
    translations() {
      return Dictionary.pl[this.dictKey];
    },
    eng() {
      return this.translations['eng'];
    },
    hasAudio() {
      return !!this.translations['audio-file-name'];
    },
  },
  methods: {
    makeSound() {
      if (!this.hasAudio) {
        console.log(`no audio file for ${this.dictKey}`);
        return;
      }

      const filename = this.translations['audio-file-name'];
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
.bold {
  font-weight: 700;
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
      background: #ececec;
      color: $color;
      padding: 8px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: #ececec;
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
