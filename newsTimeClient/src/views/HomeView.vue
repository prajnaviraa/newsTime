<template>
  <div class="container-fluid">
    <hr>
    <h3>Time for News!</h3>
    <hr><br>

    <div class="d-flex flex-wrap justify-content-center gap-3 mt-5">
      <NewsCard v-for="article in articles" :key="article.title" :article="article" />
    </div>
  </div>
</template>

<script >
import { mapActions, mapState } from 'pinia'
import { useNewsStore } from '../stores/counter'
import NewsCard from '../components/NewsCard.vue'

export default {
  components: {
    NewsCard,
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchArticles']),
  },
  computed: {
    ...mapState(useNewsStore, ['articles'])
  },
  created() {
    this.fetchArticles()
  }
}
</script>