'use strict'

async function postJogo(novoJogo){

    const url = 'http://localhost:8080/v1/controle-jogos/jogo'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoJogo)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function getJogos(){
    
    const url = 'http://localhost:8080/v1/controle-jogos/jogo'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function getJogoPorId(id){

    const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function putJogo(id, updateJogo){

    const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateJogo)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function deleteJogo(id){

    const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novoJogo = {
    "nome": "Mario Bros",
    "data_lancamento": "1986-06-03",
    "versao": "1.0",
    "tamanho": "500KB",
    "descricao": "Jogo bem legal para diversão",
    "foto_capa": "https://foto.jpg",
    "link": "https://dowloadJogo.zip"
}

const updateJogo = {
    "nome": "Mario Bros - Teste",
    "data_lancamento": "1986-06-03",
    "versao": "1.0",
    "tamanho": "500KB",
    "descricao": "Jogo bem legal para diversão",
    "foto_capa": "https://foto.jpg",
    "link": "https://dowloadJogo.zip"
}


