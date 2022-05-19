## Desafio

Nosso líder técnico Renan Gurgel deseja usar uma aplicação que liste os filmes mais populares do momento, para isso você deverá consumir a **API** do [TheMovieDB][tmdb-api-url], para essa aplicação será necessário na tela inicial mostrar uma listagem dos filmes mais populares, os mais populares sendo exibidos no topo da lista, utilizar o mecanismo de paginação fornecido pela **API**.

Cada item da lista deve levar para uma página de detalhes do filme, aonde deve ser mostrado todos os atributos importantes do filme, como por exemplo: `title`, `description`, `rating`, `etc`.

Deve ser possível realizar pesquisa por filmes em qualquer tela, a request de pesquisa deve ser disparada utilizando o processo de controle de fluxo **Debounce​** com um limite de tempo de **500ms**, esse controle deve ser feito devido ao limite de requests por segundo que a **API** impõe.

Sobre a limitação de requests por segundo da **API** do The Movie DB, esse limite deve ser tratado e deve ser exibido um feedback visual não invasivo para o usuário indicando que não foi possível realizar a operação devido a limitação da **API** e solicite que ele tente novamente em alguns segundos.


## Requisitos

- Use React
- Necessário o uso de rotas


## Requisitos bônus

**Esses requisitos não são obrigatórios, mas serão levados em consideração como pontos extras no momento da avaliação.**

- Boa qualidade de UI/UX
- Usar Redux.
- Baixo tempo de renderização
- Renderização de listas on-demand, e.g: Dado que a lista tem 100 items, não renderizar a lista completa, renderizar apenas os items visíveis na tela e alguns extras para evitar engasgos de scroll.
- Testes unitários e.g: [Jest][jest-url]

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Clone this project

`git clone https://github.com/giordanobraz/agenda-edu-challenge.git`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
