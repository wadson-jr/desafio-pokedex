# Quest: Pokedex (VITE + REACT)

Uma Pokedex simples e responsiva que consome a PokéAPI.

A Home Page lista 12 Pokémons por vez com botão “Carregar mais”. Cada card é clicável e leva para a página de detalhes com informações como tipos, habilidades e lista de movimentos.
O app tem tema claro/escuro com Context API, ícones dinâmicos, background com imagem e barra de pesquisa que funciona enquanto você digita.

## Funcionalidades

- Listagem paginada: exibe 12 Pokémons e carrega mais 12 ao clicar em “Carregar mais”.

- Cards clicáveis: ao clicar, abre a página de detalhes do Pokémon.

- Habilidades com descrição.

- Moves em layout de grid.

- Tema claro/escuro:

- Troca via Context API (sem recarregar a página).

- Botão com ícone adaptativo (sol/lua) e texto; em telas pequenas mostra só o ícone.

- Background com imagem diferente para cada tema.

- Input de Pesquisa, digite nome para filtrar/mostrar o Pokémon.

- Código Responsivo para Mobile.

## Tecnologias & Por que escolhi

- Vite + React: build/dev server rápido, DX excelente.

- React-router-dom: rotas simples sem boilerplate.

- Styled-components: escopo de estilos por componente, theming nativo e fácil troca de tema.

- Context API: controle de tema global sem libs extras.

- React-icons: ícones leves e fáceis (sol/lua/lupa).

- PokéAPI: API pública, estável e bem documentada.

Essas escolhas priorizam simplicidade, manutenibilidade e rapidez de desenvolvimento.

## Decisões de Projeto

- Paginação “Carregar mais” (offset/limit)
  Mantive a listagem leve e previsível para o usuário, sem rolagem infinita. Evita excesso de requisições e mantém tempo de resposta consistente.

- Busca enquanto digita
  A experiência é imediata. Para termos parciais, filtramos os itens já carregados; quando há match exato por nome, mostramos o resultado direto da API. Assim equilibramos uso de rede e usabilidade.

- Theme via Context + styled-components
  O ThemeProvider entrega tokens (cores, imagens) e os componentes reagem automaticamente. O botão alterna ícone e cor conforme o tema e, no mobile, exibe só o ícone — melhor UX.

- Background com imagens temáticas
  Usei duas imagens como background, que alternam entre si de acordo com o tema atual da pagina. Evita “zoom” indesejado ao rolar/conteúdo crescer.

- Moves em Grid
  Melhora a leitura de uma lista longa. Também é adaptado para uma responsividade simples.

- Reset CSS
  Um pequeno reset global removeu margens/paddings padrão, garantindo que o background ocupe 100% da tela sem bordas inesperadas.

## Como rodar o projeto localmente

### Pré-requisitos

Node.js 18+

npm (ou pnpm/yarn, se preferir)

### Passo a passo

1.  Clonar o repositório
    
    git clone https://github.com/wadson-jr/desafio-pokedex.git

    cd desafio-pokedex
2.  Instalar dependências
    
    npm install

3.  Rodar em modo desenvolvimento
    
    npm run dev

Abra o endereço que o Vite mostrar no terminal (geralmente http://localhost:5173).

## Comentarios Finais

Demorei bastante para concluir esse projeto, tive que refazer ele do zero uma vez, pois parou de funcionar como deveria e eu não sabia ao certo como arrumar.
Usei bastante a ajuda de inteligencia artificial (Chat GPT), principalmente para conseguir uma estrutura "base" para os códigos da Home Page e do Pokémon Detail.

Decidi fazer a Home Page com 12 Pokémons, ao invés de 10, por pura estética, primeiro pensei em fazer apenas 9 (tendo apenas as linhas evolutivas dos 3 iniciais de começo), porém, na minha opinião, ficaria visualmente desagradavél.

Infelizmente, o Input de pesquisa não funciona como eu queria que funcionasse, eu queria ter feito ela mostrar os Pokémons mesmo sem completar o nome dos mesmos, mas isso deixaria o código muito maior e mais complexo de forma desnecessaria.
