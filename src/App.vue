<script setup lang="ts">
import Header from './components/Header.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
import ProjectCard from './components/ProjectCard.vue';
</script>

<template>
    <Header />
    <Breadcrumbs :path="['Главная', 'Кейсы']" />

    <ProjectCard
        description="Тестовое описание товара, пока такое"
        name="Название кейса"
        image-url="https://api.test.cyberia.studio/storage/2024/05/01/7a0e7f6cae809a77fb4ef39281ac50e47b399a4f.png"
    />
</template>
