import { defineStore } from 'pinia'
import Axios from 'axios'

export const useNewsStore = defineStore('news', {
  state: () => ({
    articles: [],
    baseURL: 'http://localhost:3000/api/',
    article: {}
  }),

  actions: {
    async fetchArticles() {
      console.log(this.baseURL)
      try {
        const { data } = await Axios({
          method: 'GET',
          url: this.baseURL + 'category/indonesia'
        })
        console.log(data.posts)
        this.articles = data.posts
      } catch (error) {
        console.log(error)
      }
    },

    async fetchArticle(slug) {
      console.log(slug, 'slug')
      try {
        const { data } = await Axios({
          method: 'GET',
          url: this.baseURL + slug
        })
        console.log(data)
        this.article = data.detail_post
      } catch (error) {
        console.log(error.response.data)
      }
    },

    editArticle(details) {
      console.log(this.article, 'before')
      console.log(details, 'details')
      this.article = { ...details }
      console.log(this.article, 'after')
    }
  }
})
