function contactForm(el) {
	const contactFormEl = document.createElement("div");
	contactFormEl.innerHTML = `
  <form class="contact-form">
    <h2 class="contact-form__title">Escribime</h2>
    <div class="form">
      <label class="form__label">NOMBRE</label>
      <input class="form__input" type="text" name="nombre" id="form-name">
      <label class="form__label">EMAIL</label>
      <input class="form__input" type="text" name="email" id="form-email">
      <label class="form__label">Mensaje</label>
      <textarea class="form__textarea" name="mensaje" id="form-message"></textarea>
      <button class="form__button">Enviar</button>
    </div>
  </form>
  `;

	contactFormEl.addEventListener("submit", (e) => {
		e.preventDefault();

		const form = e.target;
		const name = e.target["form-name"].value;
		const email = e.target["form-email"].value;
		const message = e.target["form-message"].value;

		const mensajeAEnviar = {
			to: "jime24fernadez@gmail.com",
			message:
				"Hola soy " +
				name +
				"." +
				" " +
				"Mi mail es " +
				email +
				" " +
				"Mi mensaje es: " +
				message +
				".",
		};

		fetch("https://apx-api.vercel.app/api/utils/dwf", {
			method: "POST",
			body: JSON.stringify(mensajeAEnviar),
			headers: { "content-type": "application/json" },
		}).catch((error) => {
			console.log(error);
		});

		form.reset();
		alert("¡Mensaje enviado con exito!");
	});

	el.appendChild(contactFormEl);
}