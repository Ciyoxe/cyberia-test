export type Handler<TOkResult> = {
    ok?: (data: TOkResult) => void;
    err?: (status: number) => void;
    [status: number]: () => void;
};

export async function sendReq<TResult>(method: string, url: string, handler: Handler<TResult>) {
    const response = await fetch(url, {
        method,
    });

    if (response.ok) {
        handler.ok?.(await response.json());
    } else {
        handler[response.status]?.();
        handler.err?.(response.status);
    }
}
