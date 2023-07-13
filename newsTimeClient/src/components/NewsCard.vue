<template>
    <div class="card" style="width: 25rem;">
        <img :src="article.image" class="card-img-top" alt="..." style="height: 180px; object-fit: cover;"
            @click.prevent="$router.push(`/${slugger(article.title)}`); fetchOneArticle(article.link)">
        <div class="card-body">
            <h4 class="card-title">{{ article.title }}</h4><br>
            <p class="card-text">{{ article.headline }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useNewsStore } from '../stores/counter'

export default {
    name: "NewsCard",
    props: ['article'],
    methods: {
        ...mapActions(useNewsStore, ["fetchArticle"]),
        slugger(title) {
            let slug = title.replace(/^\s+|\s+$/g, '');
            slug = slug.toLowerCase();

            slug = slug.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
            return slug;
        },
        fetchOneArticle(link) {
            let slug = link.slice(31);
            this.fetchArticle(slug);
        }
    },
}
</script>

<style></style>