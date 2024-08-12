<script setup lang="ts">
import Cases from './components/Cases.vue';
import Header from './components/Header.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
</script>

<template>
    <Header />
    <Breadcrumbs :path="['Главная', 'Кейсы']" />
    <Cases />
</template>
