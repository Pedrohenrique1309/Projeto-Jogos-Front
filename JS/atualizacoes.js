'use strict'


async function getAtualizacoes(){
    
    const url = 'http://localhost:8080/v1/controle-jogos/atualizacao'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function getAtualizacaoPorId(id){

    const url = `http://localhost:8080/v1/controle-jogos/atualizacao/${id}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function putAtualizacao(id, updateAtualizacao){

    const url = `http://localhost:8080/v1/controle-jogos/atualizacao/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateAtualizacao)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function deleteAtualizacao(id){

    const url = `http://localhost:8080/v1/controle-jogos/atualizacao/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novaAtualizacao = {
    "nome": "Mario Bros",
    "versao": "1.0",
    "tamanho": "500KB",
    "link": "https://dowloadJogo.zip"
}

const updateAtualizacao = {
    "nome": "Mario Bros 2.0",
    "versao": "1.0",
    "tamanho": "500KB",
    "link": "https://dowloadJogo.zip"
}
