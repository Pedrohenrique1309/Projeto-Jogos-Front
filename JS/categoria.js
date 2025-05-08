'use strict'

async function postCategoria(novaCategoria){

    const url = 'http://localhost:8080/v1/controle-jogos/categoria'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaCategoria)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function getCategorias(){
    
    const url = 'http://localhost:8080/v1/controle-jogos/categoria'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function getCategoriaPorId(id){

    const url = `http://localhost:8080/v1/controle-jogos/categoria/${id}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function putCategoria(id, updateCategoria){

    const url = `http://localhost:8080/v1/controle-jogos/categoria/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateCategoria)
    }
    const response = await fetch(url, options)

    console.log(response)
    return response.ok

}

async function deleteCategoria(id){

    const url = `http://localhost:8080/v1/controle-jogos/categoria/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novaCategoria = {
    "nome": "esportes"
}

const updateCategoria = {
    "nome": "aventura"
}