document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector(".hamburger");
	const navLinks = document.querySelector(".nav-links");
	const icon = hamburger.querySelector("i");

	if (hamburger && navLinks) {
		hamburger.addEventListener("click", () => {
			navLinks.classList.toggle("active");

			hamburger.setAttribute(
				"aria-expanded",
				navLinks.classList.contains("active") ? "true" : "false"
			);

			if (icon.classList.contains("fa-bars")) {
				icon.classList.remove("fa-bars");
				icon.classList.add("fa-times");
			} else {
				icon.classList.remove("fa-times");
				icon.classList.add("fa-bars");
			}
		});

		// Auto-close menu on nav link click
		document.querySelectorAll(".nav-links a").forEach(link => {
			link.addEventListener("click", () => {
				navLinks.classList.remove("active");
				hamburger.setAttribute("aria-expanded", "false");
				icon.classList.remove("fa-times");
				icon.classList.add("fa-bars");
			});
		});
	}
});
