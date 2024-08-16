<script setup lang="ts">
import { reactive } from 'vue';
import FieldCont from './FieldCont.vue';

const feedback = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false,
});
</script>

<template>
    <form class="feedback-form">
        <h2 class="feedback-form__title">Расскажите о вашем проекте:</h2>

        <div class="feedback-form__inputs">
            <FieldCont title="Ваше имя*">
                <input
                    class="feedback-form__input"
                    type="text"
                    placeholder="Ваше имя*"
                    v-model="feedback.name"
                />
            </FieldCont>
            <FieldCont title="Email*">
                <input
                    class="feedback-form__input"
                    type="email"
                    placeholder="Email*"
                    v-model="feedback.email"
                />
            </FieldCont>
            <FieldCont title="Телефон*">
                <input
                    class="feedback-form__input"
                    type="tel"
                    placeholder="Телефон*"
                    v-model="feedback.phone"
                />
            </FieldCont>
        </div>
        <FieldCont title="Сообщение*">
            <textarea
                class="feedback-form__textarea"
                placeholder="Сообщение*"
                v-model="feedback.message"
            ></textarea>
        </FieldCont>

        <label class="feedback-form__label">
            <input type="checkbox" class="feedback-form__checkbox" v-model="feedback.agreement" />
            Согласие на обработку персональных данных
        </label>

        <button class="feedback-form__btn--desktop" type="button">Обсудить проект</button>
        <button class="feedback-form__btn--mobile" type="button">Отправить</button>

        <span class="feedback-form__agreement">
            Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
        </span>
    </form>
</template>
