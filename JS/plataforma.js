'use strict'


async function postPlataforma(novaPlataforma){

    const url = 'http://localhost:8080/v1/controle-jogos/plataforma'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaPlataforma)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function getPlataforma(){
    
    const url = 'http://localhost:8080/v1/controle-jogos/plataforma'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function getPlataformaPorId(id){

    const url = `http://localhost:8080/v1/controle-jogos/plataforma/${id}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function putPlataforma(id,updatePlataforma){

    const url = `http://localhost:8080/v1/controle-jogos/plataforma/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatePlataforma)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function deletePlataforma(id){

    const url = `http://localhost:8080/v1/controle-jogos/plataforma/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novaPlataforma = {

    "nome": "xbox"

}

const updateFaixaEtaria = {

    "nome": "playstation"

}