function componentes() {
	const headerContainerEl = document.querySelector(".header-container");
	const footerContainerEl = document.querySelector(".footer-container");
	header(headerContainerEl);
	footer(footerContainerEl);

	ventana();
}

//Services Content desde CMS Contentful
function getServicesContent() {
	return fetch(
		"https://cdn.contentful.com/spaces/2598fwp2jb18/environments/master/entries?access_token=pHfbnErEuvhj3p7B0lS2ASnBiORY_2pnQgDE689VA6Y&content_type=otroServicios"
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const content = data.items.map((i) => {
				return {
					title: i.fields.title,
					text: i.fields.text,
					img: "",
				};
			});
			const img = data.includes["Asset"].map((i) => {
				return {
					url: i.fields.file.url,
				};
			});
			for (let i = 0; i < content.length; i++) {
				for (let i = 0; i < content.length; i++) {
					content[i].img = img[i].url;
				}
			}
			return content;
		});
}

function addServicesContent(params = {}) {
	const servicesTemplate = document.querySelector("#services-template");
	const servicesContainer = document.querySelector(".services-item");

	const imgEl = servicesTemplate.content.querySelector(".services-item__img");
	imgEl.src = params.img;

	const titleEl = servicesTemplate.content.querySelector(
		".services-item__title"
	);
	titleEl.textContent = params.title;

	const textEl = servicesTemplate.content.querySelector(".services-item__text");
	textEl.textContent = params.text;

	const clone = document.importNode(servicesTemplate.content, true);
	servicesContainer.appendChild(clone);
}

function main() {
	componentes();
	getServicesContent().then((services) => {
		for (const s of services) addServicesContent(s);
	});
	const textoAuxiliar = document.querySelector(".texto-auxiliar");
	textoAuxiliar.textContent = "Servicios";
}

main();
