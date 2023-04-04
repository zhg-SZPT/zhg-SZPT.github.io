<template>
  <div class="main">
    <div class="acticle" v-html="content"></div>
  </div>
</template>

<script>
import { getArticleById } from '../api/homePage/article';
export default {
  data() {
    return {
      content: '',
      id: '',
    };
  },
  methods: {
    getArticle() {
      getArticleById({ articleId: this.id }).then((res) => {
        this.content = res.data.content;
      });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getArticle();
  },
};
</script>

<style></style>
