<script setup lang="ts">
defineEmits<{
    (event: 'close'): void;
}>();
defineProps<{
    closed: boolean;
}>();
</script>

<template>
    <aside class="sidebar" :data-closed="closed">
        <div class="sidebar__btn-cont">
            <button class="sidebar__close-btn" @click="$emit('close')"></button>
        </div>
        <nav class="sidebar__nav">
            <a class="sidebar__nav__link">Агенство</a>
            <a class="sidebar__nav__link">Услуги</a>
            <a class="sidebar__nav__link">Кейсы</a>
            <a class="sidebar__nav__link">Блог</a>
            <a class="sidebar__nav__link">Контакты</a>
        </nav>

        <div class="sidebar__delimiter"></div>

        <h3 class="sidebar__title">Контакты:</h3>
        <p class="sidebar__contact">+7 999 123 45 67</p>
        <p class="sidebar__contact">hello@cyberia.studio</p>
        <p class="sidebar__contact">ул. Ярных, д. 35, оф. 10</p>

        <div class="sidebar__delimiter"></div>
    </aside>
</template>
