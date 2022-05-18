//carga de componentes
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

//contenido sección Bienvenida desde CMS Contentful
function getWelcomeContent() {
	return fetch(
		"https://cdn.contentful.com/spaces/2598fwp2jb18/environments/master/entries?access_token=pHfbnErEuvhj3p7B0lS2ASnBiORY_2pnQgDE689VA6Y&content_type=welcome"
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const content = {
				img: data.includes["Asset"][0].fields.file.url,
				title: data.items[0].fields.title,
				subtitle: data.items[0].fields.subtitle,
			};
			return content;
		});
}

function addWelcomeContent(params = {}) {
	const welcomeTemplate = document.querySelector("#welcome-template");
	const welcomeContainer = document.querySelector(".welcome-container");

	const welcome = document.querySelector(".welcome");
	welcome.style["background-image"] = "url('" + params.img + "')";

	const titleEl = welcomeTemplate.content.querySelector(
		".welcome__content-title"
	);
	titleEl.textContent = params.title;

	const subtitleEl = welcomeTemplate.content.querySelector(
		".welcome__content-subtitle"
	);
	subtitleEl.textContent = params.subtitle;

	const clone = document.importNode(welcomeTemplate.content, true);
	welcomeContainer.appendChild(clone);
}

//contenido sección Presentación desde CMS Contentful
function getPresentationContent() {
	return fetch(
		"https://cdn.contentful.com/spaces/2598fwp2jb18/environments/master/entries?access_token=pHfbnErEuvhj3p7B0lS2ASnBiORY_2pnQgDE689VA6Y&content_type=presentation"
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const content = {
				img: data.includes["Asset"][0].fields.file.url,
				title: data.items[0].fields.title,
				text: data.items[0].fields.text,
			};
			return content;
		});
}

function addPresentationContent(params = {}) {
	const presentationTemplate = document.querySelector("#presentation-template");
	const presentationContainer = document.querySelector(
		".presentation-container"
	);

	const imgEl =
		presentationTemplate.content.querySelector(".presentation__img");
	imgEl.src = params.img;

	const titleEl = presentationTemplate.content.querySelector(
		".presentation__title"
	);
	titleEl.textContent = params.title;

	const textEl = presentationTemplate.content.querySelector(
		".presentation__text"
	);
	textEl.textContent = params.text;

	const clone = document.importNode(presentationTemplate.content, true);
	presentationContainer.appendChild(clone);
}

//contenido sección Mis Servicios desde CMS Contentful
function getServicesContent() {
	return fetch(
		"https://cdn.contentful.com/spaces/2598fwp2jb18/environments/master/entries?access_token=pHfbnErEuvhj3p7B0lS2ASnBiORY_2pnQgDE689VA6Y&content_type=servicios"
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			imgRoot = data.includes["Asset"][0].fields.file.url;
			const content = data.items.map((i) => {
				return {
					img: imgRoot,
					subtitle: i.fields.subtitle,
					text: i.fields.text.content[0].content[0].value,
				};
			});
			return content;
		});
}

function addServicesContent(params = {}) {
	const servicesTemplate = document.querySelector("#my-services-template");
	const servicesContainer = document.querySelector(".my-services-container");

	const imgEl = servicesTemplate.content.querySelector(".my-services__img");
	imgEl.src = params.img;

	const subtitleEl = servicesTemplate.content.querySelector(
		".my-services__subtitle"
	);
	subtitleEl.textContent = params.subtitle;

	const textEl = servicesTemplate.content.querySelector(".my-services__text");
	textEl.textContent = params.text;

	const clone = document.importNode(servicesTemplate.content, true);
	servicesContainer.appendChild(clone);
}

function main() {
	componentes();
	getWelcomeContent().then((content) => {
		addWelcomeContent(content);
	});

	getPresentationContent().then((content) => {
		addPresentationContent(content);
	});

	getServicesContent().then((services) => {
		for (const s of services) addServicesContent(s);
	});
}

main();
