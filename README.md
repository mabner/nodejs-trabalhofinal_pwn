# Trabalho Final

### Curso: Desenvolvimento web Full Stack

### Disciplina: Programação web com Node.js

### Professor: [Samuel Martins](https://samuelmartins.me/)

## :page_with_curl: Enunciado

#### TO-DO Lists

Vocês foram contratados pela empresa SM Solutions para desenvolver um produto, onde será possível adicionar várias listas e várias tarefas para cada lista. Para essa solução, a empresa listou os seguintes requisitos:

-  [x] Por questões de segurança, o sistema deve possuir algum tipo de autenticação (login e logout utilizando passport.js, auth0, firebase auth, manualmente na base de dados ou qualquer outro tipo de autenticação);
-  [ ] A tela inicial deverá conter todas as listas criadas pelo usuário, onde será possível inserir, editar o nome e remover as listas;
-  [ ] Ao clicar em uma das listas, o usuário será levado a uma outra página com as tarefas específicas daquela lista. Nessa tela, o usuário deverá ser capaz de executar as seguintes ações:
   -  [ ] Adicionar, editar e remover uma tarefa;
   -  [ ] Marcar e desmarcar uma tarefa como concluída.

#### Importante

-  [x] Todos os trabalhos deverão ser entregues em alguma plataforma git (github, gitlab, bitbucket…);
-  [x] Os trabalhos deverão ser acessíveis por meio de algum domínio (sugestão: utilizar zeit/now, netlify, heroku, surge.sh, AWS, Azure…);
-  [x] Poderá ser utilizado qualquer banco de dados nas soluções acima, seja local ou “as a service”;
-  [x] Os trabalhos deverão ser feitos em grupo de até 3 pessoas .

#### Extra

-  [x] Os trabalhos entregues em container docker irão receber +5pts extras . Neste caso, todos os componentes necessários para rodar a aplicação deverão estar “containerizados” (servidor nodejs, banco de dados e outros possíveis componentes).

## :page_with_curl: Projeto

#### :pushpin: Autores

Jéssica Mello

Luciano Lima

Marcos Leite

#### :pushpin: Como usar

##### Repositório GitHub

```bash
git clone https://github.com/mabner/nodejs-trabalhofinal_pwn.git
cd nodejs-trabalhofinal_pwn
npm install
npm start ou npm run nodemon
```

##### Docker Container

```bash
docker pull mrs7/puc:latest
docker run -it -p 3000-3002:3000-3002 mrs7/puc
```

Para testar entre na URL: http://localhost:3000/

#### :pushpin: Links

Web Deploy - https://nodejs-trabalhofinal-pwn.herokuapp.com/

Docker - https://hub.docker.com/r/mrs7/puc
