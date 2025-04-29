'use strict'

async function postJogo(novaAssinatura){

    const url = 'http://localhost:8080/v1/controle-jogos/assinatura'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaAssinatura)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function getAssinaturas(){
    
    const url = 'http://localhost:8080/v1/controle-jogos/assinatura'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function getAssinaturaPorId(id){

    const url = `http://localhost:8080/v1/controle-jogos/assinatura/${id}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function putAssinatura(id, updateAssinatura){

    const url = `http://localhost:8080/v1/controle-jogos/assinatura/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateAssinatura)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function deleteAssinatura(id){

    const url = `http://localhost:8080/v1/controle-jogos/assinatura/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novaAssinatura = {

    "nome": "game pass"

}

const updateAssinatura = {

    "nome": "ea play"
    
}