<script setup lang="ts">
import { ref } from 'vue';
import SideBar from './SideBar.vue';

const menuClosed = ref(true);
</script>

<template>
    <header>
        <img class="header__logo" src="/icons/cyberiaLogo.svg" />
        <div class="header__cont">
            <nav class="header__nav">
                <a class="header__nav__link">Агенство</a>
                <a class="header__nav__link">Услуги</a>
                <a class="header__nav__link">Кейсы</a>
                <a class="header__nav__link">Блог</a>
                <a class="header__nav__link">Контакты</a>
            </nav>
        </div>
        <button class="header__menu-btn" @click="menuClosed = false" />
    </header>
    <SideBar :closed="menuClosed" @close="menuClosed = true" />
</template>
