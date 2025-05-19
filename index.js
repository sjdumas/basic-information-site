/*
	This is the version of the project using Express.
*/

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/fontawesome", express.static(path.join(__dirname,  "node_modules/@fortawesome/fontawesome-free")));

// Pages/routes
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "assets/views/index.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname, "assets/views/about.html"));
});

app.get("/contact-me", (req, res) => {
	res.sendFile(path.join(__dirname, "assets/views/contact-me.html"));
});

// 404 page
app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, "assets/views/404.html"));
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
