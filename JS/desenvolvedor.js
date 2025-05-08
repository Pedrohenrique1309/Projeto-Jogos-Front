'use strict'

async function postDesenvolvedor(novoDesenvolvedor){

    const url = 'http://localhost:8080/v1/controle-jogos/desenvolvedor'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoDesenvolvedor)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function getDesenvolvedores(){
    
    const url = 'http://localhost:8080/v1/controle-jogos/desenvolvedores'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function getDesenvolvedorPorId(id){

    const url = `http://localhost:8080/v1/controle-jogos/desenvolvedor/${id}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function putDesenvolvedor(id, updateDesenvolvedor){

    const url = `http://localhost:8080/v1/controle-jogos/desenvolvedor/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateDesenvolvedor)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function deleteDesenvolvedor(id){

    const url = `http://localhost:8080/v1/controle-jogos/desenvolvedor/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novoDesenvolvedor = {
    "nome": "microsoft",
    "fundacao":"2014-02-04",
    "email_suporte":"microsoft@outlook,.com",
    "presidente":"Bradford"
}

const updateDesenvolvedor = {
    "nome": "microsoft",
    "fundacao":"2014-02-04",
    "email_suporte":"microsoft@outlook,.com",
    "presidente":"Bil Gates"
}