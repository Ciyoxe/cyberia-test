export type Handler<TOkResult> = {
    fetchError?: (error: unknown) => void;
    okResponse?: (data: TOkResult) => void;
    errResponse?: (status: number) => void;
};

export async function sendReq<TResult>(method: string, url: string, handler: Handler<TResult>) {
    try {
        const response = await fetch(url, {
            method,
        });

        if (response.ok) {
            handler.okResponse?.(await response.json());
        } else {
            handler.errResponse?.(response.status);
        }
    } catch (error) {
        handler.fetchError?.(error);
    }
}
