<template>
    <h1>Calico cat</h1>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>