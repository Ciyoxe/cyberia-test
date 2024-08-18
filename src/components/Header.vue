<script setup lang="ts">
import { ref } from 'vue';
import SideBar from './SideBar.vue';

const menuClosed = ref(true);
</script>

<template>
    <header>
        <div class="header__content">
            <img class="header__logo" src="/icons/cyberiaLogo.svg" />
            <nav class="header__nav">
                <a class="header__nav__link" href="">Агенство</a>
                <a class="header__nav__link" href="">Услуги</a>
                <a class="header__nav__link" href="">Кейсы</a>
                <a class="header__nav__link" href="">Блог</a>
                <a class="header__nav__link" href="">Контакты</a>
            </nav>
            <button class="header__menu-btn" @click="menuClosed = false" />
        </div>
    </header>
    <SideBar :closed="menuClosed" @close="menuClosed = true" />
</template>
