# esy-form-simoor

Esta lib tem o objetivo de facilitar a intera��o com mongodb, por exemplo, temos uma cole��o `usuario`

```javascript
{
	nome_usuario,
	senha
}
```

O formulario recebido ser�:

```javascript
txtNomeUsuario: 'vinicius',
txtSenha: 'christopher'
```

Na grava��o n�o precisar� fazer

```javascript
let fields = {
  nome_usuario: req.body.txtNomeUsuario,
  senha: req.body.txtSenha
}

model.create(fields, function (err, usuario) {
  if (err) throw err
  console.log(usuario)
});
```

Com a lib s� precisar� passar os atributos da cole��o que voc� ir� utilizar

```javascript
model.create(esyform.get(req.body, `nome_usuario senha`), function (err, usuario) {
  if (err) throw err
  console.log(usuario)
});
```

## Padr�o

Para criar os campos HTML dever� ser usado um padr�o

| atributo bd | campo HTML
|-------------|------------
| nome_usuario | txtNomeUsuario
| senha | txtSenha
| cliente_usuario | txtClienteUsuario