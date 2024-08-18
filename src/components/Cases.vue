<script setup lang="ts">
import { ref } from 'vue';
import { getCategories, getProjects } from '../api/api';
import { useProjectsStore } from '../stores/projectsStore';
import ProjectCard from './ProjectCard.vue';

const projects = useProjectsStore();

const projectsStatus = ref('loading' as 'loading' | 'loaded' | 'server-error' | 'network-error');
const categoriesStatus = ref('loading' as 'loading' | 'loaded' | 'server-error' | 'network-error');

getProjects({
    okResponse(data) {
        projects.setProjects(data.items);
        projectsStatus.value = 'loaded';
    },
    errResponse() {
        projectsStatus.value = 'server-error';
    },
    fetchError() {
        projectsStatus.value = 'network-error';
    },
});
getCategories({
    okResponse(data) {
        projects.setCategories(data.items);
        categoriesStatus.value = 'loaded';
    },
    errResponse() {
        categoriesStatus.value = 'server-error';
    },
    fetchError() {
        categoriesStatus.value = 'network-error';
    },
});
</script>

<template>
    <div class="cases">
        <h2 class="cases__title">Кейсы</h2>
        <div
            class="cases__categories"
            v-if="projectsStatus === 'loaded' && categoriesStatus === 'loaded'"
        >
            <button
                class="cases__category"
                v-for="category of projects.categories"
                :key="category.id"
                :data-active="projects.filter === category.id"
                @click="
                    projects.selectCategory(projects.filter === category.id ? null : category.id)
                "
            >
                {{ category.name }}
            </button>
        </div>
        <div
            class="cases__cards"
            v-if="projectsStatus === 'loaded' && categoriesStatus === 'loaded'"
        >
            <ProjectCard
                v-for="project of projects.filteredProjects"
                :key="project.id"
                :name="project.title"
                :image-url="project.image"
                :description="project.description"
            />
            <template v-if="projects.filteredProjects.length === 0">
                Упс, кажется, проектов нет
            </template>
        </div>

        <div
            class="cases__error"
            v-else-if="
                projectsStatus === 'server-error' ||
                projectsStatus === 'network-error' ||
                categoriesStatus === 'server-error' ||
                categoriesStatus === 'network-error'
            "
        >
            {{
                projectsStatus === 'network-error' || categoriesStatus === 'network-error'
                    ? 'Невозможно загрузить данные: ошибка сети.'
                    : 'Невозможно загрузить данные: ошибка сервера.'
            }}
        </div>
        <div class="cases__loading" v-else>Загрузка...</div>
    </div>
</template>
