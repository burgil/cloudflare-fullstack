# cloudflare-fullstack
Did you think CloudFlare Pages can only run static html files? Think again! Through the power of Cloudflare Functions we are able to deploy a full-stack application with a backend and a frontend directly connected. (Using CloudFlare Workers + Pages through Functions)

# How to use?

Open a terminal on the root folder of this project and run:

```
npm install
```

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

The `pages` folder is basically your static files, and  the `index.html` is the root file for the web server:

http://127.0.0.1:8787/helloworld

# How did I install wrangler on this project?

```
npm install wrangler --save-dev
```

# How to deploy to production?

Still working on this part of the tutorial check again later.
