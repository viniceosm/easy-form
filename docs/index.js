let bodySim;

window.addEventListener('load', function () {
	document.getElementById('form1').addEventListener('submit', function (e) {
		e.preventDefault();

		// Este objeto � oq vai ser passado por formulario
		bodySim = {
			txtNomeUsuario: document.querySelector('[name=txtNomeUsuario]').value,
			txtSenha: document.querySelector('[name=txtSenha]').value
		}

		// Aqui � o codigo do back end
		route.post('dont-care', (req) => {
			cUsuarios.adiciona(esyform.get(req.body, `nome_usuario senha`))
		})
	});
});