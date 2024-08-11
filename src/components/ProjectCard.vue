<script setup lang="ts">
defineProps<{
    name: string;
    imageUrl: string;
    description: string;
}>();
</script>

<template>
    <article
        class="project-card"
        :style="{ backgroundImage: `url(${imageUrl})` }"
    >
        <div class="project-card__sign">
            <div class="project-card__sign__name">{{ name }}</div>
            <img
                class="project-card__sign__ptr"
                src="/icons/projectCardPointerBlue.svg"
            />
        </div>
        <section class="project-card__desc-cont">
            <img
                class="project-card__ptr"
                src="/icons/projectCardPointerWhite.svg"
            />
            <h3 class="project-card__title">{{ name }}</h3>
            <p class="project-card__desc">{{ description }}</p>
        </section>
    </article>
</template>
