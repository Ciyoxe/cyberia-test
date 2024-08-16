import { Handler, sendReq } from './request';

export type Category = {
    id: number;
    name: string;
};

export async function getCategories(handler: Handler<{ items: Category[] }>) {
    await sendReq('get', 'https://api.test.cyberia.studio/api/v1/project-categories', handler);
}

export type Project = {
    // включены только необходимые поля
    id: number;
    title: string;
    image: string;
    description: string;

    categories: Category[];
};

export async function getProjects(handler: Handler<{ items: Project[] }>) {
    await sendReq('get', 'https://api.test.cyberia.studio/api/v1/projects', handler);
}

export type Feedback = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export async function sendFeedback(feedback: Feedback, handler: Handler<void>) {
    const params = new URLSearchParams(feedback).toString();
    await sendReq('post', 'https://api.test.cyberia.studio/api/v1/feedbacks?' + params, handler);
}
