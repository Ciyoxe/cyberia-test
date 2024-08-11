<script setup lang="ts">
defineProps<{
    path: string[];
}>();
</script>

<template>
    <nav class="breadcrumbs">
        <template v-for="page in path" :key="page">
            <a class="breadcrumbs__link">{{ page }}</a>
            <span class="breadcrumbs__delimiter">/</span>
        </template>
    </nav>
</template>
