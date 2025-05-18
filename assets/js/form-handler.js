document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("#contact-form");
	const success = document.querySelector("#form-success");
	const submitButton = form.querySelector("button[type='submit']");

	if (form && success && submitButton) {
		form.addEventListener("submit", (e) => {
			e.preventDefault(); // Prevent real submission

			// Disable the button and show feedback
			submitButton.disabled = true;
			submitButton.textContent = "Sending...";

			// Simulate success after short delay
			setTimeout(() => {
				form.reset();
				success.classList.remove("hidden");
				submitButton.textContent = "Send Message";
				submitButton.disabled = false;

				setTimeout(() => {
					success.classList.add("hidden");
				}, 5000);
			}, 800); // Simulate "sending" delay
		});
	}
});
