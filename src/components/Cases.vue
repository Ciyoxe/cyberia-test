<script setup lang="ts">
import { getCategories, getProjects } from '../api/api';
import { useProjectsStore } from '../stores/projectsStore';
import ProjectCard from './ProjectCard.vue';

const projects = useProjectsStore();

getProjects({
    okResponse(data) {
        projects.setProjects(data.items);
    },
});
getCategories({
    okResponse(data) {
        projects.setCategories(data.items);
    },
});
</script>

<template>
    <h2>Кейсы</h2>
    <div class="cases__categories">
        <button
            class="cases__category"
            v-for="category of projects.categories"
            :key="category.id"
            :data-active="projects.filter === category.id"
            @click="projects.selectCategory(projects.filter === category.id ? null : category.id)"
        >
            {{ category.name }}
        </button>
    </div>
    <div class="cases__cards">
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
</template>
