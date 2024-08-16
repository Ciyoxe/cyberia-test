export type Handler<TOkResult, TErrResult> = {
    fetchError?: (error: unknown) => void;
    okResponse?: (data: TOkResult) => void;
    errResponse?: (data: TErrResult, status: number) => void;
};

export async function sendReq<TResult, TError>(
    method: string,
    url: string,
    handler: Handler<TResult, TError>,
) {
    try {
        const response = await fetch(url, {
            method,
        });

        if (response.ok) {
            handler.okResponse?.(await response.json());
        } else {
            handler.errResponse?.(await response.json(), response.status);
        }
    } catch (error) {
        handler.fetchError?.(error);
    }
}
