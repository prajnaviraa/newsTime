<template>
    <div class="container">
        <h1 class="pageTitle">Edit Article</h1>
        <form @submit.prevent="editArticle(article)">
            <div class="col-12 col-lg-10 offset-md-2 my-5">
                <label for="title" class="col-sm-8 col-form-label">Title</label>
                <input type="text" class="form-control" id="title" required v-model="article.title">
                <label for="image" class="col-sm-8 col-form-label">Image</label>
                <input type="text" class="form-control" id="image" required v-model="article.image">
                <label for="image_desc" class="col-sm-8 col-form-label">Image Description</label>
                <input type="text" class="form-control" id="image_desc" required v-model="article.image_desc">
                <label for="post_content" class="col-sm-8 col-form-label">Post Content</label>
                <textarea name="post_content" id="post_content" cols="30" rows="10" class="form-control" required
                    v-model="article.post_content"></textarea>
                <ckeditor id="post_content" :editor="editor" v-model="article.post_content" contenteditable="true">
                </ckeditor>
                <br>
                <button type="submit" class="btn btn-primary form-btn w-100"
                    @click.prevent="$router.push(`/${slugger(article.title)}`)">Save</button>
                <br><br>
                <button type="button" class="btn btn btn-secondary form-btn w-100"
                    @click.prevent="$router.push(`/${slugger(article.title)}`)">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useNewsStore } from '../stores/counter'

export default {
    computed: {
        ...mapState(useNewsStore, ["article"])
    },
    methods: {
        ...mapActions(useNewsStore, ['editArticle']),
        slugger(title) {
            let slug = title.replace(/^\s+|\s+$/g, '');
            slug = slug.toLowerCase();

            slug = slug.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
            return slug;
        },
    }
}
</script>

<style scoped>
.pageTitle {
    text-align: center;
    margin: 50px;
}
</style>