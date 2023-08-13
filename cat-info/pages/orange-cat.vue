<template>
    <h1>Orange cat</h1>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script setup>
    const story = await useAsyncStoryblok('orange-cat', { version: 'draft' })
</script>