export async function onRequest(context) {
    // Insert to DB:
    await context.env.DB.put('test key', JSON.stringify({
        hi: 42
    }));
    // Get from DB:
    const testKey = await context.env.DB.get('test key');
    return Response.json({
        example: testKey
    })
}

// access me by going to http://localhost:8787/db_example