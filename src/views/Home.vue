<template>
  <div class="home">
    <BookPage :text="parsed" />
  </div>
</template>

<script>
import BookPage from '../components/BookPage';
import DataParser from '../parser.js';
import bookText from 'raw-loader!../assets/text.md';
import showdown from 'showdown';


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
    const converter = new showdown.Converter();
    const html = converter.makeHtml(bookText);
    const parser = new DataParser(html);
    this.parsed = parser.getParsedHTML();
  },
};
</script>
