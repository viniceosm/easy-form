const esyform = {
	get(reqBody, strCampos) {
		obj = {}

		arrCampos = strCampos.replace(/\n/g, ' ').split(' ')

		arrCampos.forEach(campo => {
			campo = campo.trim()
			if (campo !== '') {
				obj[campo] = reqBody['txt' + this.padrao(campo)]
			}
		});

		return obj
	},

	inicialMaiuscula(str) {
		return str.charAt(0).toUpperCase() + str.slice(1)
	},

	padrao(str) {
		return str.split('_').reduce((ant, atu) => {
			return ant + this.inicialMaiuscula(atu)
		}, '')

	}
}

const cUsuarios = {
	adiciona(obj) {
		console.log('Usuario adicionado: ', obj)
	}
}