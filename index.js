const http = require("http");
const fs = require("fs");
const path = require("path");

// Helper function to serve static files
const serveStatic = (res, filePath, contentType, statusCode = 200) => {
	fs.readFile(path.resolve(__dirname, filePath), (err, data) => {
		if (err) {
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end("Internal Server Error");
		} else {
			res.writeHead(statusCode, { "Content-Type": contentType });
			res.end(data);
		}
	});
};

// Create HTTP server
const server = http.createServer((req, res) => {
	switch (req.url) {
		// Load HTML Pages
		case "/":
			serveStatic(res, "./assets/views/index.html", "text/html");
			break;
		case "/about":
			serveStatic(res, "./assets/views/about.html", "text/html");
			break;
		case "/contact-me":
			serveStatic(res, "./assets/views/contact-me.html", "text/html");
			break;

		// Load CSS
		case "/assets/css/style.css":
			serveStatic(res, "./assets/css/style.css", "text/css");
			break;

		// Load JS
		case "/assets/js/nav-toggle.js":
			serveStatic(res, "./assets/js/nav-toggle.js", "application/javascript");
			break;

		case "/assets/js/form-handler.js":
			serveStatic(res, "./assets/js/form-handler.js", "application/javascript");
			break;

		// Load logo image
		case "/assets/images/logo.svg":
			serveStatic(res, "./assets/images/logo.svg", "image/svg+xml");
			break;

		// Load 404 image
		case "/assets/images/404.png":
			serveStatic(res, "./assets/images/404.png", "image/png");
			break;

		// Load avatar image
		case "/assets/images/avatar.png":
			serveStatic(res, "./assets/images/avatar.png", "image/png");
			break;

		// Load project images
		case "/assets/images/img-1.jpg":
			serveStatic(res, "./assets/images/img-1.jpg", "image/jpeg");
			break;

		case "/assets/images/img-2.jpg":
			serveStatic(res, "./assets/images/img-2.jpg", "image/jpeg");
			break;

		case "/assets/images/img-3.jpg":
			serveStatic(res, "./assets/images/img-3.jpg", "image/jpeg");
			break;

		case "/assets/images/img-4.jpg":
			serveStatic(res, "./assets/images/img-4.jpg", "image/jpeg");
			break;

		// Load Satoshi font
		case "/assets/fonts/Satoshi-Variable.woff2":
			serveStatic(res, "./assets/fonts/Satoshi-Variable.woff2", "font/woff2");
			break;

		// Load Font Awesome CSS
		case "/fontawesome/css/all.min.css":
			serveStatic(res, "./node_modules/@fortawesome/fontawesome-free/css/all.min.css", "text/css");
			break;

		// Load Font Awesome Webfonts
		case "/fontawesome/webfonts/fa-brands-400.woff2":
			serveStatic(res, "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2", "font/woff2");
			break;
		case "/fontawesome/webfonts/fa-brands-400.ttf":
			serveStatic(res, "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf", "font/ttf");
			break;
		case "/fontawesome/webfonts/fa-solid-900.woff2":
			serveStatic(res, "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2", "font/woff2");
			break;
		case "/fontawesome/webfonts/fa-solid-900.woff":
			serveStatic(res, "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff", "font/woff");
			break;
		case "/fontawesome/webfonts/fa-solid-900.ttf":
			serveStatic(res, "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf", "font/ttf");
			break;

		// 404 fallback
		default:
			serveStatic(res, "./assets/views/404.html", "text/html", 404);
			break;
	}
});

// Start server
server.listen(8080, () => {
	console.log("Server running at http://localhost:8080");
});
