async function readRequestBody(request) {
    const contentType = request.headers.get("content-type");
    if (!contentType) {
        return 'a GET';
    } else if (contentType.includes("application/json")) {
        return await request.json();
    } else if (contentType.includes("application/text")) {
        return request.text();
    } else if (contentType.includes("text/html")) {
        return request.text();
    } else if (contentType.includes("form")) {
        const formData = await request.formData();
        const body = {};
        for (const entry of formData.entries()) {
            body[entry[0]] = entry[1];
        }
        return JSON.stringify(body);
    } else {
        return "a file";
    }
}

export async function onRequest(context) {
    try {
        if (context.request.method !== 'POST') return Response.json({ error: -1 });
        // Read Body:
        const requestBody = await readRequestBody(context.request);

        return Response.json({
            you_sent_the_server: requestBody
        });
    } catch (e) {
        return Response.json({ error: 500, reason: e.message });
    }
}