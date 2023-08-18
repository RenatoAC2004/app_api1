const roteador = require("express").Router();

const produtos = [
    {
        "nome":"Droide",
        "fabricante": "Sasunga",
        "valor": 9999.99

    }
]

roteador.use("/",(requisicao, resposta)=>{
    resposta.send(
        JSON.stringify(produtos)
    )
})

module.exports = roteador;