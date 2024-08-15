<script setup lang="ts">
defineProps<{
    title: string;
    error?: string;
}>();
</script>

<template>
    <!-- 
        Для "разрезания" рамки поля ввода заголовком пришлось использовать grid.
        По дизайну поле ввода должно быть прозрачным,
        закрыть border элементом поверх не получится
    -->
    <div class="field-cont">
        <div class="field-cont__left" :data-errored="error !== undefined"></div>
        <div class="field-cont__right" :data-errored="error !== undefined"></div>
        <div class="field-cont__bottom" :data-errored="error !== undefined"></div>

        <div class="field-cont__title">
            {{ title }}

            <span class="field-cont__error--desktop" v-if="error">
                {{ error }}
            </span>
        </div>

        <div class="field-cont__content">
            <slot />
            <span class="field-cont__error--mobile" v-if="error">
                {{ error }}
            </span>
        </div>
    </div>
</template>
