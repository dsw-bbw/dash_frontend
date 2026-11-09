async function request(method, path, body) {
    const res = await fetch(path, {
        method,
        headers: body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
        body: body !== undefined ? JSON.stringify(body) : undefined
    });

    if (!res.ok) {
        throw new Error(`${method} ${path} fehlgeschlagen: HTTP ${res.status}`);
    }

    return res.status === 204 ? null : res.json();
}

export const get = (path) => request("GET", path);
export const post = (path, body) => request("POST", path, body);