<script setup lang="ts">
import { reactive } from 'vue';
import FieldCont from './FieldCont.vue';
import Checkbox from './Checkbox.vue';
import SnackBar from './SnackBar.vue';
import { sendFeedback } from '../api/api';

const feedback = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false,
});
const notification = reactive({
    shown: false,
    text: '',
    status: 'error' as 'error' | 'success',
});
const validationErrors = reactive({
    name: false,
    email: false,
    phone: false,
    message: false,
    agreement: false,
});

const showError = (message: string) => {
    notification.text = message;
    notification.shown = true;
    notification.status = 'error';
};
const showSuccess = (message: string) => {
    notification.text = message;
    notification.shown = true;
    notification.status = 'success';
};

const validateForm = () => {
    feedback.name = feedback.name.trim();
    feedback.email = feedback.email.trim();
    feedback.phone = feedback.phone.replace('+', '').trim();
    feedback.message = feedback.message.trim();

    // проверка на пустые поля
    validationErrors.name = feedback.name === '';
    validationErrors.message = feedback.message === '';
    // должен быть указан хотя бы один из контактов
    validationErrors.phone = feedback.phone === '' && feedback.email === '';
    validationErrors.email = validationErrors.phone;

    validationErrors.agreement = !feedback.agreement;

    if (validationErrors.name || validationErrors.message || validationErrors.phone) {
        showError('Заполните все обязательные поля');
        return false;
    }
    if (validationErrors.agreement) {
        showError('Подтвердите согласие на обработку персональных данных');
        return false;
    }

    // проверка на формат ввода
    validationErrors.email = feedback.email !== '' && !/^\S+@\S+\.\S+$/.test(feedback.email);
    if (validationErrors.email) {
        showError('Некорректный email');
        return false;
    }

    validationErrors.phone = feedback.phone !== '' && !/^\d+$/.test(feedback.phone);
    if (validationErrors.phone) {
        showError('Некорректный номер телефона');
        return false;
    }

    return true;
};
const submitForm = () => {
    if (!validateForm()) {
        return;
    }
    sendFeedback(feedback, {
        okResponse() {
            feedback.name = '';
            feedback.email = '';
            feedback.phone = '';
            feedback.message = '';
            showSuccess('Ваша заявка принята, спасибо!');
        },
        errResponse(data, status) {
            if (status === 422) {
                let errorText = '';
                if (data.errors.email) {
                    validationErrors.email = true;
                    errorText += data.errors.email.join('\n');
                }
                if (data.errors.phone) {
                    validationErrors.phone = true;
                    errorText += data.errors.phone.join('\n');
                }
                showError(errorText || data.message);
            } else {
                showError('Произошла ошибка сервера. Попробуйте позже.');
            }
        },
        fetchError() {
            showError('Произошла ошибка сети. Попробуйте позже.');
        },
    });
};
const acceptAndSubmitForm = () => {
    feedback.agreement = true;
    submitForm();
};
</script>

<template>
    <form class="feedback-form">
        <div class="feedback-form__top">
            <img class="feedback-form__icon" src="/icons/feedbackIcon.svg" />
            <h2 class="feedback-form__title">
                Расскажите <br />
                о вашем проекте:
            </h2>
        </div>

        <div class="feedback-form__inputs">
            <FieldCont title="Ваше имя*" :error="validationErrors.name">
                <input
                    class="feedback-form__input"
                    type="text"
                    placeholder="Ваше имя*"
                    v-model="feedback.name"
                />
            </FieldCont>
            <FieldCont title="Email*" :error="validationErrors.email">
                <input
                    class="feedback-form__input"
                    type="email"
                    placeholder="Email*"
                    v-model="feedback.email"
                />
            </FieldCont>
            <FieldCont title="Телефон*" :error="validationErrors.phone">
                <input
                    class="feedback-form__input"
                    type="tel"
                    placeholder="Телефон*"
                    v-model="feedback.phone"
                />
            </FieldCont>
        </div>
        <FieldCont title="Сообщение*" :error="validationErrors.message">
            <textarea
                class="feedback-form__textarea"
                placeholder="Сообщение*"
                v-model="feedback.message"
            ></textarea>
        </FieldCont>

        <Checkbox
            class="feedback-form__checkbox"
            title="Согласие на обработку персональных данных"
            v-model="feedback.agreement"
            :error="validationErrors.agreement"
        />

        <button @click="submitForm()" class="feedback-form__btn--desktop" type="button">
            Обсудить проект
        </button>
        <button @click="acceptAndSubmitForm()" class="feedback-form__btn--mobile" type="button">
            Отправить
        </button>

        <span class="feedback-form__agreement">
            Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
        </span>

        <SnackBar
            v-model="notification.shown"
            :status="notification.status"
            :text="notification.text"
        />
    </form>
</template>
