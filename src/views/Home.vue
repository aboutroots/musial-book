<template>
  <div class="home">
    <BookPage :text="parsed" />
  </div>
</template>

<script>
import BookPage from '../components/BookPage';
import DataParser from '../parser.js';
import data from 'raw-loader!../assets/text.txt';

export default {
  name: 'Home',
  components: {
    BookPage,
  },
  data() {
    return {
      parsed: '',
    };
  },
  mounted() {
    const parser = new DataParser(data);
    this.parsed = parser.getParsedHTML();
  },
};
</script>
