<script setup lang="ts">
import FieldCont from './FieldCont.vue';
</script>

<template>
    <form class="feedback-form">
        <h2 class="feedback-form__title">Расскажите о вашем проекте:</h2>

        <div class="feedback-form__inputs">
            <FieldCont title="Ваше имя*">
                <input class="feedback-form__input" type="text" placeholder="Ваше имя*" />
            </FieldCont>
            <FieldCont title="Email*">
                <input class="feedback-form__input" type="email" placeholder="Email*" />
            </FieldCont>
            <FieldCont title="Телефон*">
                <input class="feedback-form__input" type="tel" placeholder="Телефон*" />
            </FieldCont>
        </div>
        <FieldCont title="Сообщение*">
            <textarea class="feedback-form__textarea" placeholder="Сообщение*"></textarea>
        </FieldCont>

        <label class="feedback-form__label">
            <input type="checkbox" class="feedback-form__checkbox" />
            Согласие на обработку персональных данных
        </label>

        <button class="feedback-form__btn--desktop">Обсудить проект</button>
        <button class="feedback-form__btn--mobile">Отправить</button>
    </form>
</template>
