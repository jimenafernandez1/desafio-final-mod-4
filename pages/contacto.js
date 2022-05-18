function componentes() {
	const headerContainerEl = document.querySelector(".header-container");
	const contactFormContainerEl = document.querySelector(
		".contact-form-container"
	);
	const footerContainerEl = document.querySelector(".footer-container");
	header(headerContainerEl);
	contactForm(contactFormContainerEl);
	footer(footerContainerEl);

	ventana();
}

function main() {
	componentes();
	const title = document.querySelector(".contact-form__title");
	title.textContent = "Contacto";
}

main();
