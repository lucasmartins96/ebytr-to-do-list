# Ebytr To-Do-List Back-end

To Do List para as pessoas colaboradoras da Ebytr

## Funcionalidades

- POST `/tasks`: Endpoint para o cadastro de tarefas contendo: o nome da tarefa, data de criação e status
- DELETE `/tasks/:id`: Endpoint para a remoção de tarefas por id
- PUT `/tasks/:id`: Endpoint para a atualização de tarefas por id
- GET `/tasks`: Endpoint que retorna todas as tarefas em formato JSON

## Pré instalação

Certifique que os seguintes programas estejam instalados antes de rodar o projeto, caso contrário instale os programas abaixo:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download)

## Rode localmente

Clone o projeto

```bash
  git clone https://github.com/lucasmartins96/ebytr-to-do-list.git
```

Vá para o diretório do projeto

```bash
  cd server
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

## Rodando os testes

Para rodar os testes, execute o seguinte comando

```bash
  npm test
```

## Referência da API

⚠️ O projeto estará rodando no porta 3001 ⚠️

#### Listar todas as tarefas

```http
  GET /tasks
```

#### Cadastrar tarefa

```http
  POST /tasks
```

Insira os seguintes dados no corpo da requisição:

```json
{
  "name": "revisar PDI",
  "status": "pronto"
}
```

| Parameter | Type     | Description                                                                |
| :-------- | :------- | :------------------------------------------------------------------------- |
| `name`    | `string` | **Obrigatório**. Nome da tarefa                                            |
| `status`  | `string` | **Obrigatório**. Status da tarefa ("pronto", "em andamento" ou "pendente") |

#### Atualizar tarefa

```http
  PUT /tasks/:id
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Obrigatório**. Id da tarefa a ser atualizada |

Insira os seguintes dados no corpo da requisição:

```json
{
  "name": "revisar PDI",
  "status": "pendente"
}
```

| Parameter | Type     | Description                                                                |
| :-------- | :------- | :------------------------------------------------------------------------- |
| `name`    | `string` | **Obrigatório**. Nome da tarefa                                            |
| `status`  | `string` | **Obrigatório**. Status da tarefa ("pronto", "em andamento" ou "pendente") |

#### Remover tarefa

```http
  DELETE /tasks/:id
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `id`      | `string` | **Obrigatório**. Id da tarefa a ser removida |

## Feedback

Se você tiver algum comentário, entre em contato comigo pelo e-mail lucasmartins@gmail.com
