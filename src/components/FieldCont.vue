<script setup lang="ts">
defineProps<{
    title: string;
    error?: boolean;
}>();
</script>

<template>
    <!-- 
        Для "разрезания" рамки поля ввода заголовком пришлось использовать grid.
        По дизайну поле ввода должно быть прозрачным, т.к. на фоне градиент
        закрыть border элементом поверх не получится
    -->
    <div class="field-cont">
        <div class="field-cont__left" :data-errored="error"></div>
        <div class="field-cont__right" :data-errored="error"></div>
        <div class="field-cont__bottom" :data-errored="error"></div>

        <div class="field-cont__title">
            {{ title }}
        </div>

        <div class="field-cont__content">
            <slot />
        </div>
    </div>
</template>
