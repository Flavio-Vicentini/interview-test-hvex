### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/),[MongoDB](https://www.mongodb.com/pt-br),[Yarn](https://classic.yarnpkg.com/lang/en/). 
Além disto, é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e um gerenciador de banco de dados como o [MongoDB Compass](https://www.mongodb.com/pt-br/products/compass) para visualizar e manipular os dados.

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/Flavio-Vicentini/interview-test-hvex.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd interview-test-hvex

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333
# Uma mensagem "Server Running" deve aparecer no terminal
# Faça as requisições para <http://localhost:3333>
```
### :exclamation: Observações

Para acesso aos recursos da aplicação devem ser utilizadas as rotas conforme tabela a seguir:
###
Route         | Method      |  Body (JSON)                              |      Functionality
------        | -------     |  ----                                     |      --------
/users        |  POST       | name, username, password, last_access     |     Create new user.
/users/:id    |  GET        | No body                                   |     List user by Id.
/users/:id    |  PUT        | name, username, password, last_access     |     Update user by Id.
/users/:id    |  DELETE     | No body                                   |     Delete user by Id.
