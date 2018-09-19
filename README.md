# esy-form-simoor

Esta lib tem o objetivo de facilitar a interação com mongodb, por exemplo, temos uma coleção `usuario`

```javascript
{
	nome_usuario,
	senha
}
```

O formulario recebido será:

```javascript
txtNomeUsuario: 'vinicius',
txtSenha: 'christopher'
```

Na gravação não precisará fazer

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

Com a lib só precisará passar os atributos da coleção que você irá utilizar

```javascript
model.create(esyform.get(req.body, `nome_usuario senha`), function (err, usuario) {
  if (err) throw err
  console.log(usuario)
});
```

## Padrão

Para criar os campos HTML deverá ser usado um padrão

| atributo bd | campo HTML
|-------------|------------
| nome_usuario | txtNomeUsuario
| senha | txtSenha
| cliente_usuario | txtClienteUsuario