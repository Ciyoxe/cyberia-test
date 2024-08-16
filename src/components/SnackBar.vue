<script setup lang="ts">
import { watchEffect } from 'vue';

defineProps<{
    status: 'error' | 'success' | 'info';
    text: string;
}>();
const enabled = defineModel<boolean>();

let hidingTimeout: number;
watchEffect(() => {
    // если уведомление вызывается несколько раз подряд,
    // оно не должно скрываться раньше последнего вызова
    clearTimeout(hidingTimeout);

    if (enabled.value) {
        hidingTimeout = setTimeout(() => {
            enabled.value = false;
        }, 3000);
    }
});
</script>

<template>
    <div class="snackbar" :data-status="status" :data-enabled="enabled" @click="enabled = false">
        <span class="snackbar__text">{{ text }}</span>
    </div>
</template>
