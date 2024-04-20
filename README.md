# cloudflare-fullstack
Did you think CloudFlare Pages can only run static html files? Think again! Through the power of Cloudflare Functions we are able to deploy a full-stack application with a backend and a frontend directly connected. (Using CloudFlare Workers + Pages through Functions)

# How to use?

Open a terminal on the root folder of this project and run:

```
npm install
```

* Note: you might need to run first `npm run login` to login into your wrangler cloudflare account.

Then run the local development server using:
```
npm start
```

# What does the command npm start, starts?

The command npm start simply runs this in the project root folder:

```
npx wrangler pages dev pages
```

where `pages` is the folder pages, acting as the frontend.

And the `functions` folder is automatically read and exposed as urls for example:

http://127.0.0.1:8787/helloworld

This URL is working thanks to the `helloworld.js` file available on the `functions` folder.

This is basically a worker.

The `pages` folder is basically your static files, and the `index.html` is the root file for the web server:

http://127.0.0.1:8787/helloworld


# How did I install wrangler on this project?

```
npm install wrangler --save-dev
```

# How to deploy to production?

Simply add the following deploy script to your `package.json`: (Make sure to change `YOUR-PROJECT-NAME-HERE` to the desired project)

```
    "deploy": "npx wrangler pages deploy ./pages --project-name=YOUR-PROJECT-NAME-HERE",
```

and then run `npm run deploy`.

# Using the Database System

```js
        await context.env.DB.put("ok2", "works2");
        const test2 = await context.env.DB.get("TEST");
        const test3 = await context.env.DB.get("ok2");
        console.log("test2", test2);
        console.log("test3", test3);
```

# Check if email already exists:

```js
        // Check if Email Already Exists:
        const emailExists = await context.env.DB.get(email);
        if (emailExists !== null)
```

# How to print all headers?

```js
function mapToString(map) {
    let str = '{';
    for (let [key, value] of map.entries()) {
        str += `"${key}": "${value}", `;
    }
    // Remove the trailing comma and space
    str = str.slice(0, -2);
    str += '}';
    return str;
}
mapToString(new Map(context.request.headers))
```
# That day I removed passwords:

# Hashing

```js
async function hash(input) {
    const data = new TextEncoder().encode(input);
    const hash = await crypto.subtle.digest({ name: 'SHA-256' }, data);
    const hashArray = Array.from(new Uint8Array(hash));
    const hashedString = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashedString;
}
        // Hashing the password:
        const hashedPassword = await hash(requestBody.password.value);
        if (DEBUG_REGISTER) console.log("hashedPassword", hashedPassword);
```
