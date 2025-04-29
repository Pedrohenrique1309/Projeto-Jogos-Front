'use strict'

async function postVesaoJogo(novaVersaoJogo){

    const url = 'http://localhost:8080/v1/controle-jogos/versao-jogo'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaVersaoJogo)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function getVersoesJogos(){
    
    const url = 'http://localhost:8080/v1/controle-jogos/versao-jogo'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function getVersaoJogoPorId(id){

    const url = `http://localhost:8080/v1/controle-jogos/versao-jogo/${id}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function putVersaoJogo(id, updateVersaoJogo){

    const url = `http://localhost:8080/v1/controle-jogos/versao-jogo/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateVersaoJogo)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function deleteVersaoJogo(id){

    const url = `http://localhost:8080/v1/controle-jogos/versao-jogo/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novaVersaoJogo = {
    "nome": "deluxe"
}

const updateVersaoJogo = {
    "nome": "premium"
}