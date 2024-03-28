export function onRequest(context) {
    return new Response(JSON.stringify([0, 1, 2, 100, 200]))
}