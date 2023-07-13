<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" id="logo" @click.prevent="$router.push('/')">News Time</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
</template>

<script>

export default {
    name: "NavBar",
}
</script>

<style scoped>
#logo {
    font-family: monospace;
    font-size: 40px;
    font-weight: bolder;
}
</style>