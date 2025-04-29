'use strict'


async function postFaixaEtaria(novaFaixaEtaria){

    const url = 'http://localhost:8080/v1/controle-jogos/faixa-etaria'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaFaixaEtaria)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function getFaixasEtarias(){
    
    const url = 'http://localhost:8080/v1/controle-jogos/faixa-etaria'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function getFaixaEtariaPorId(id){

    const url = `http://localhost:8080/v1/controle-jogos/faixa-etaria/${id}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function putFaixaEtaria(id,updateFaixaEtaria){

    const url = `http://localhost:8080/v1/controle-jogos/faixa-etaria/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateFaixaEtaria)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function deleteFaixaEtaria(id){

    const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novaFaixaEtaria = {

    "idade_indicativa": "10"

}

const updateFaixaEtaria = {

    "idade_indicativa": "20"

}