<template>
    <div class="card">
        <img v-bind:src="`${blok.image.filename}`" alt="">
        <h2>{{ blok.title }}</h2>
        <p>{{ blok.description }}</p>
        <a>Read more</a>
    </div>

</template>

<script>
    export default {
        props:['blok']
    }
</script>

<style>
    .card {
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 15px #0000005a;
  background-color: #fff;
  min-width:300px;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
    .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    h2 {
        font-size: 30px;
        margin: 10px 0 0 0;
    }

    a{
        text-align: right;
        text-decoration: underline;
    }

    a:hover {
        cursor: pointer;
        color: green;
    }
</style>