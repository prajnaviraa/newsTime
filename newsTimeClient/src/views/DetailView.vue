<template>
    <div class="container-fluid">
        <br>
        <div class="row">
            <div class="col-10">
                <h2>{{ article.title }}</h2>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-primary" @click.prevent="$router.push('/edit')">Edit</button>
            </div>
        </div>
        <div class="row justify-content-start">
            <div class="col-10">
                <br>
                <img :src="article.image" alt="" style="height: 20vw; width: 60vw; object-fit: cover; margin-right: 100px;">
                <p>{{ article.image_desc }}</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-10">
                <h6>{{ article.post_content }}</h6>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useNewsStore } from '../stores/counter'

export default {
    computed: {
        ...mapState(useNewsStore, ["article"])
    },
}
</script>

<style></style>