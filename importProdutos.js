'use strict'

import { listaProdutos } from "./produtos.js"

function criarCard(produto) {

    const card = document.createElement('div')
    card.className = 'card'

    const produtoImagem = document.createElement('img')
    produtoImagem.src = `./img/${produto.imagem}`
    produtoImagem.alt = `Foto do ${produto.nome}`

    const nomeProduto = document.createElement('span')
    nomeProduto.textContent = produto.nome

    const precoProduto = document.createElement('h3')
    precoProduto.textContent = `R$${produto.preco}`


    const classificacaoProduto = document.createElement('div')
    classificacaoProduto.className = 'classificacaoProduto'
    
    const estrelas = document.createElement('span')
    estrelas.className = 'estrelas'
    estrelas.textContent = '⭐'.repeat(produto.classificacao)

    const notaProduto = document.createElement('span')
    notaProduto.className = 'nota-produto'
    notaProduto.textContent = `(${produto.classificacao})`

    classificacaoProduto.append(notaProduto, estrelas)

    const descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao

    card.append(produtoImagem, nomeProduto, precoProduto, classificacaoProduto, descricaoProduto)

    return card
}

const cards = listaProdutos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)