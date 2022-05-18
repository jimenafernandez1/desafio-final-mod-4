function footer(el) {
	const links = {
		logo: "//images.ctfassets.net/2598fwp2jb18/593wLl8ES4riUete9cKwwb/303d73a42fef4a4070ce3df415a532e5/jimena.png",
	};
	const footerEl = document.createElement("div");
	footerEl.innerHTML = `
  <div class="footer">
  <div class="logo">
    <img class="logo__img footer__logo" src="${links.logo}">
  </div>
    <div class="footer-content"></div>
  </div>

  <template id="footer-template">
    <div class="footer__social-links">
      <div>
         <a class="footer__link" href=" "></a>
        <img class="footer__link-img" src="">
      </div>
    </div>
  </template>
  `;

	el.appendChild(footerEl);
}

//imagenes Footer desde CMS Contentful
function getFooterContent() {
	return fetch(
		"https://cdn.contentful.com/spaces/2598fwp2jb18/environments/master/entries?access_token=pHfbnErEuvhj3p7B0lS2ASnBiORY_2pnQgDE689VA6Y&content_type=newFooter"
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const content = data.items.map((i) => {
				return {
					name: i.fields.name,
					url: i.fields.url,
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

function addFooterContent(params = {}) {
	const footerTemplate = document.querySelector("#footer-template");
	const footerContainer = document.querySelector(".footer-content");

	const nameEl = footerTemplate.content.querySelector(".footer__link");
	nameEl.textContent = params.name;

	const urlEl = footerTemplate.content.querySelector(".footer__link");
	urlEl.href = params.url;

	const imgEl = footerTemplate.content.querySelector(".footer__link-img");
	imgEl.src = params.img;

	const clone = document.importNode(footerTemplate.content, true);
	footerContainer.appendChild(clone);
}

function main() {
	getFooterContent().then((data) => {
		for (const d of data) addFooterContent(d);
	});
}
main();