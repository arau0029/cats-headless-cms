<template>
    <h1>Cat types</h1>
    <div class="flex">
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<style>
:root {
    font-family: 'Courier New', Courier, monospace;
}

body {
    background-color: rgb(54, 66, 55);
}

h1 {
    color: white;
    font-size: 60px;
    text-align: center;
}

.flex>div {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
}
</style>