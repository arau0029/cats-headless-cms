<template>
    <h2>Teaser component</h2>
    <div>
        <img src="" alt="">
        <h2>{{ blok.title }}</h2>
        <p>{{ blok.description }}</p>
    </div>

</template>

<script>
    export default {
        props:['blok']
    }
</script>