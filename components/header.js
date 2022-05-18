function header(el) {
	const links = {
		cruz: "//images.ctfassets.net/2598fwp2jb18/1Xpu2oq4U13IaA00vzsowJ/d20e8f774520a1f9a33f0895fc5fe5db/cruz.png",
		burger:
			"//images.ctfassets.net/2598fwp2jb18/1cnJFR7Y07TmHzqE3wMRe7/dea2d3209e1e09475d26cf364893c9b3/burger.png",
		logo: "//images.ctfassets.net/2598fwp2jb18/593wLl8ES4riUete9cKwwb/303d73a42fef4a4070ce3df415a532e5/jimena.png",
	};

	const headerEl = document.createElement("div");
	headerEl.innerHTML = `
  <div class="header">
    <div class="logo">
      <a class="link-home" href="./index.html"> HJIMENA</a>
      <img class="logo__img" id="logo__img" src="${links.logo}">
    </div>
    <nav class="header__nav">
      
      <div class="abre-ventana">
        <img class="header__nav-menu" src="${links.burger}">
      </div>
      
      <div class="ventana">
        <div class="cierra-ventana">
          <img class="ventana__button" src="${links.cruz}">
        </div>
        <div class="ventana__contenido">
          <a class="ventana__link" href="./portfolio.html">Portfolio</a>
          <a class="ventana__link" href="./servicios.html">Servicios</a>
          <a class="ventana__link" href="./contacto.html">Contacto</a>
        </div>
      </div>

      <div class="header__nav-links">
        <a class="header__nav-link" href="./portfolio.html">Portfolio</a>
        <a class="header__nav-link" href="./servicios.html">Servicios</a>
        <a class="header__nav-link" href="./contacto.html">Contacto</a>
      </div>
    </nav>
  </div>
  <h1 class="texto-auxiliar">Portfolio</h1>
  `;
	el.appendChild(headerEl);
}

function ventana() {
	const abrirEl = document.querySelector(".abre-ventana");
	const ventanaEl = document.querySelector(".ventana");
  const cerrarEl = document.querySelector(".cierra-ventana");
	const footer = document.querySelector(".footer-container");

	abrirEl.addEventListener("click", () => {
		ventanaEl.style.display = "inherit";
		footer.style.display = "none";
	});

	cerrarEl.addEventListener("click", () => {
		footer.style.display = "initial";
		ventanaEl.style.display = "";
	});
}
