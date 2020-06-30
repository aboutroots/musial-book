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
}
</style>
<style lang="scss">
.translatable {
  font-weight: 700;
  cursor: pointer;
}
.v-popover-container {
  display: inline-block;
}
</style>
