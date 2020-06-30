<template>
  <div class="page-wrapper">
    <component v-bind:is="processedHtml"></component>
  </div>
</template>

<script>
import Popover from './Popover';
export default {
  name: 'BookPage',
  components: {
    Popover,
  },
  props: {
    text: {
      default: '',
    },
  },
  computed: {
    processedHtml() {
      return {
        template: '<div>' + this.text + '</div>',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 800px;
  padding: 1rem;
  margin: 0 auto;
  text-align: left;
  min-height: 100vh;
}
</style>
<style lang="scss">
@import '../assets/styles/theme.scss';
.translatable {
  // font-weight: 700;
  font-style: italic;
  border-bottom: 1px solid $fgcolor;
  cursor: pointer;
}
.blanked {
  color: $bgcolor;
  border-bottom: 1px solid $fgcolor;
  &:hover {
    color: $fgcolor;
  }
}
.v-popover-container {
  display: inline-block;
}
.page-wrapper {
  p {
    margin-top: 0;
    line-height: 1.4;
  }
  ul {
    margin-top: 0;
    list-style: none;
    margin-left: 0;
  }
  li {
    &:before {
      position: absolute;
      margin-left: -10px;
      content: '-';
    }
    margin: 4px 0;
  }
  li p {
    margin: 0;
  }
  @media screen and (max-width: 575px) {
    ul {
      padding-left: 0.5rem;
    } 
  }
}
</style>
