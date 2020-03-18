const express = require("express");
const next = require("next");

const nextI18NextMiddleware = require("next-i18next/middleware").default;
const nextI18next = require("./src/i18n");

const type = process.env.NODE_ENV;
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
	await app.prepare();
	const server = express();

	await nextI18next.initPromise;
	server.use(nextI18NextMiddleware(nextI18next));

	server.use(express.static("public"));

	server.get("*", (req, res) => handle(req, res));

	await server.listen(port);
	console.log(`> Ready on http://localhost:${port} [${type}]`); // eslint-disable-line no-console
})();
