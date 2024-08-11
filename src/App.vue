<script setup lang="ts">
import Header from './components/Header.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
</script>

<template>
    <Header />
    <Breadcrumbs :path="['Главная', 'Кейсы']" />
</template>
