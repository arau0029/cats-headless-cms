<template>
    <h1>Black Cat</h1>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('black-cat', { version: 'draft' })
</script>