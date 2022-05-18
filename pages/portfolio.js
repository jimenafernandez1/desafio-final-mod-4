function componentes() {
	const headerContainerEl = document.querySelector(".header-container");
	const footerContainerEl = document.querySelector(".footer-container");
	header(headerContainerEl);
	footer(footerContainerEl);

	ventana();
}

//Portfolio Content desde CMS Contentful
function getPortfolioContent() {
	return fetch(
		"https://cdn.contentful.com/spaces/2598fwp2jb18/environments/master/entries?access_token=pHfbnErEuvhj3p7B0lS2ASnBiORY_2pnQgDE689VA6Y&content_type=portfolio"
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const content = data.items.map((i) => {
				return {
					title: i.fields.title,
					text: i.fields.text,
					link: i.fields.link,
					img: data.includes["Asset"][0].fields.file.url,
				};
			});
			return content;
		});
}

function addPortfolioContent(params = {}) {
	const portfolioTemplate = document.querySelector("#portfolio-template");
	const portfolioContainer = document.querySelector(".portfolio-item");

	const imgEl = portfolioTemplate.content.querySelector(".portfolio-item__img");
	imgEl.src = params.img;

	const titleEl = portfolioTemplate.content.querySelector(
		".portfolio-item__title"
	);
	titleEl.textContent = params.title;

	const textEl = portfolioTemplate.content.querySelector(
		".portfolio-item__text"
	);
	textEl.textContent = params.text;

	const linkEl = portfolioTemplate.content.querySelector(
		".portfolio-item__link"
	);
	linkEl.href = params.link;
	linkEl.textContent = params.link;

	const clone = document.importNode(portfolioTemplate.content, true);
	portfolioContainer.appendChild(clone);
}

function main() {
	componentes();
	getPortfolioContent().then((works) => {
		for (const w of works) addPortfolioContent(w);
	});
}

main();
