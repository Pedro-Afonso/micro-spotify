<a href="./LICENSE">![GitHub](https://img.shields.io/github/license/pedro-afonso/micro-spotify?style=plastic)</a>
![GitHub repo size](https://img.shields.io/github/repo-size/pedro-afonso/micro-spotify?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/pedro-afonso/micro-spotify?color=yellow&style=plastic)

<h1 align="center">Projeto Micro Spotify</h1>

<br />

# :pushpin: Índice de conteúdos

- [Screenshots do Projeto](#camera_flash-screenshots-do-projeto)
- [Sobre o Projeto](#monocle_face-sobre-o-projeto)
- [Tecnologias](#globe_with_meridians-tecnologias-usadas)
- [Features](#triangular_flag_on_post-features)
- [Instalação](#question-como-instalar-e-executar-o-projeto)
- [Autor](#closed_book-autor)

</br>

---

# :camera_flash: Screenshots do Projeto

![Large-1440](https://user-images.githubusercontent.com/50973575/197407618-a35bf452-5d24-4988-8a16-30436f313829.png)

<img src='https://user-images.githubusercontent.com/50973575/197407619-036fb486-09f9-4f1a-a14e-a3ca12186b8c.png' width='160px' > <img src='https://user-images.githubusercontent.com/50973575/197407621-a73f3623-2eda-4a5c-8b45-76cb8921e4bb.png' width='160px' > <img src='https://user-images.githubusercontent.com/50973575/197407622-55a067f6-15e2-40af-be9e-df7d74f78dc5.png' width='160px' > <img src='https://user-images.githubusercontent.com/50973575/197407624-0d9a68ee-c27b-43f6-87ba-adc82ad77707.png' width='160px' > <img src='https://user-images.githubusercontent.com/50973575/197407625-714e6b20-e095-4da0-917f-a10a07d97924.png' width='160px' >

---

# :monocle_face: Sobre o Projeto

Este projeto tem o objetivo de facilitar a reprodução de músicas mais populares do momento, proporcionando uma experiência melhor para o cliente.

<br />

---

# :globe_with_meridians: Tecnologias Usadas

✅ [React](https://reactjs.org/) - Biblioteca JS.

✅ [Typescript](https://www.typescriptlang.org) - Para fazer a tipagem

✅ [Material UI](https://mui.com) - Biblioteca de estilos.

✅ [Redux Toolkit](https://redux-toolkit.js.org) - Conjunto de ferramentas para simplificar o desenvolvimento Redux

✅ [Vitest](https://vitest.dev) - Para fazer os testes unitários

✅ [Rapid API](https://rapidapi.com/tipsters/api/shazam-core) - Para buscar os dados do Shazam Core API

✅ Lints — ESlint/Prettier/EditorConfig

<br />

---

# :triangular_flag_on_post: Features

- [x] Lista das músicas e dos artistas mais tocadas no momento.
- [x] Lista das músicas mais tocadas na região (Brasil).
- [x] Visualizar a letra da música.
- [x] Media Player para ouvir as músicas.
- [x] Layout responsivo. <!--  testado em Google Chrome, Microsoft Edge e Firefox (mobile - android e desktop - windows). -->
- [x] Barra de busca para achar a música através do título.
- [x] Filtrar as músicas por gênero.
- [x] Músicas relacionadas ao artista.
- [x] Músicas relacionadas a uma música específica.

<br />

---

# :question: Como instalar e executar o projeto

<br />

## Acessando direto pelo site:

- Você pode clicar nesse [link](https://micro-spotify-three.vercel.app) e acessar a aplicação que está hospedada na plataforma Vercel.

<br />

## Executar na máquina local:

(certifique-se de ter instalado na sua máquina o [Node](https://nodejs.org/en/))

1. Abra o terminal na pasta desejada para clonar o repositório e execute o comando:

```bash
git clone https://github.com/pedro-afonso/micro-spotify.git
```

2. Depois de concluído, execute os seguintes comandos para iniciar o server e será aberto no seu navegador uma aba com o projeto já funcionando:

```bash
cd micro-spotify/
```

Para instalar as dependências:

```bash
npm install
```

Você precisa criar um arquivo .env e adicionar as variáveis

```bash
VITE_X_RAPID_API_KEY=
VITE_X_RAPID_API_HOST=shazam-core.p.rapidapi.com
```

A variável VITE_X_RAPID_API_KEY, você encontra em [Shazam Core Api](https://rapidapi.com/tipsters/api/shazam-core) após fazer o cadastro gratuitamente.

Inciando o server:

```bash
npm run dev
```

3. Por fim, abra a pasta clonada em seu editor de códigos favorito e faça as suas alterações! xD

<br />

---

# :closed_book: Autor

Feito por [Pedro Afonso](https://github.com/pedro-afonso).

### :link: LinkedIn: https://www.linkedin.com/in/pedro-a-fonso/
