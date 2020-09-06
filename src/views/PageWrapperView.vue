<template>
  <div class="home">
    <article v-if="pageData">
      <BookPage :text="pageData" />
    </article>
    <div v-else>
      Selected page not found.
    </div>
    <paginate
      v-model="currentPage"
      :page-count="pagesLen"
      :page-range="3"
      :margin-pages="2"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script>
import BookPage from '../components/BookPage';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    BookPage,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['pages']),
    pagesLen() {
      return this.pages.length;
    },
    pageData() {
      if (!this.pages) return null;

      const selectedPage = this.pages.find(
        (page) => page.id === this.currentPage
      );
      return selectedPage && selectedPage.data;
    },
    currentPage: {
      get: function () {
        const pageFromUrl = this.$route.query.page;
        return pageFromUrl ? parseInt(pageFromUrl) : 1;
      },
      set: function (newValue) {
        this.setPageNavigation(newValue);
      },
    },
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
    },
    setPageNavigation(newPage) {
      if (newPage !== this.currentPage) {
        this.$router.push({ name: 'readNow', query: { page: newPage } });
      }
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
  & > li {
    display: inline;
    & > a,
    .pagination > li > span {
      position: relative;
      float: left;
      padding: 6px 12px;
      margin-left: -1px;
      line-height: 1.42857143;
      color: #337ab7;
      text-decoration: none;
      background-color: #fff;
      border: 1px solid #ddd;
    }
  }
  .active {
    a,
    span,
    a:hover,
    span:hover,
    a:focus,
    span:focus {
      z-index: 2;
      color: #fff;
      cursor: default;
      background-color: #337ab7;
      border-color: #337ab7;
    }
  }
}
</style>
