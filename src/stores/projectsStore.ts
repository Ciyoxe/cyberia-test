import { defineStore } from 'pinia';
import { Project, Category } from '../api/api';

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        categories: [] as Category[],
        projects: [] as Project[],
        /** category id */
        filter: null as number | null,
    }),
    getters: {
        filteredProjects(state) {
            if (state.filter === null) {
                return state.projects;
            }
            return state.projects.filter(project =>
                project.categories.some(category => category.id === state.filter),
            );
        },
    },
    actions: {
        setProjects(projects: Project[]) {
            this.projects = projects;
        },
        setCategories(categories: Category[]) {
            this.categories = categories;
            this.filter = null;
        },
        selectCategory(categoryId: number | null) {
            this.filter = categoryId;
        },
    },
});
