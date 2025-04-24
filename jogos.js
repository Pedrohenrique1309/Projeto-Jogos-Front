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

    const url = `http://localhost:8080/v1/controle-jogos/jogo/delete/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response)
    return response

}

const novoJogo = {
    "nome": "Forza Horizon 5",
    "data_lancamento": "2021-11-01",
    "versao": "1.0",
    "tamanho": "116 GB",
    "descricao": "Forza Horizon 5 é um jogo eletrônico de corrida",
    "foto_capa": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xbox.com%2Fpt-BR%2Fgames%2Fforza-horizon-5&psig=AOvVaw2qvtwSGdez76DByo1Ic4yf&ust=1745591217524000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjBvpbw8IwDFQAAAAAdAAAAABAE",
    "link": "https://dowloadJogo.zip"
}

const updateJogo = {
    "nome": "Forza Horizon 5",
    "data_lancamento": "2021-11-01",
    "versao": "1.1",
    "tamanho": "118 GB",
    "descricao": "Forza Horizon 5 é um jogo eletrônico de corrida",
    "foto_capa": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xbox.com%2Fpt-BR%2Fgames%2Fforza-horizon-5&psig=AOvVaw2qvtwSGdez76DByo1Ic4yf&ust=1745591217524000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjBvpbw8IwDFQAAAAAdAAAAABAE",
    "link": "https://dowloadJogo.zip"
}

