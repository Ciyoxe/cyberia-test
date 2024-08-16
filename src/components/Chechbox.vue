<script setup lang="ts">
const checked = defineModel<boolean>();
defineProps<{
    title?: string;
    error?: boolean;
}>();
</script>

<template>
    <label class="checkbox__label" :data-errored="error">
        <input type="checkbox" class="checkbox__input" v-model="checked" :data-errored="error" />
        {{ title }}
    </label>
</template>
