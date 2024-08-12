import { defineStore } from 'pinia';
import { Project, Category } from '../api/api';

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        categories: [] as Category[],
        projects: [] as Project[],
        /** category id's */
        filter: [] as number[],
    }),
    getters: {
        filteredProjects(state) {
            if (state.filter.length === 0) {
                return state.projects;
            }
            return state.projects.filter(project =>
                state.filter.some(categoryId => project.categories.some(c => c.id === categoryId)),
            );
        },
    },
    actions: {
        setProjects(projects: Project[]) {
            this.projects = projects;
        },
        setCategories(categories: Category[]) {
            this.categories = categories;
            this.filter = [];
        },
        toggleCategory(categoryId: number) {
            const index = this.filter.findIndex(id => id === categoryId);

            if (index < 0) {
                this.filter.push(categoryId);
            } else {
                this.filter.splice(index, 1);
            }
        },
    },
});
