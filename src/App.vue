<script setup lang="ts">
import Cases from './components/Cases.vue';
import Header from './components/Header.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
import FeedbackForm from './components/FeedbackForm.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Header />
    <main class="app__cont">
        <Breadcrumbs :path="['Главная', 'Кейсы']" />
        <Cases />
        <FeedbackForm />
    </main>
    <Footer />
    <div class="app__background" />
</template>
