import { Handler, sendReq } from './request';

export type Category = {
    id: number;
    name: string;
};

export async function getCategories(handler: Handler<{ items: Category[] }, void>) {
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

export async function getProjects(handler: Handler<{ items: Project[] }, void>) {
    await sendReq('get', 'https://api.test.cyberia.studio/api/v1/projects', handler);
}

export type Feedback = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export type FeedbackErrors = {
    message: string;
    errors: {
        phone?: string[];
        email?: string[];
    };
};

export async function sendFeedback(feedback: Feedback, handler: Handler<void, FeedbackErrors>) {
    const params = {} as { [key: string]: string };
    // оставляем только те поля, которые заполнены и нужны
    for (const key of ['name', 'phone', 'email', 'message'] as const) {
        if (feedback[key] !== '') {
            params[key] = feedback[key];
        }
    }
    await sendReq(
        'post',
        'https://api.test.cyberia.studio/api/v1/feedbacks?' +
            new URLSearchParams(params).toString(),
        handler,
    );
}
