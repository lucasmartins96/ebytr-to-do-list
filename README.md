# Ebytr To-Do-List

To Do List para as pessoas colaboradoras da Ebytr


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)



## Funcionalidades

- Visualizar a lista de tarefas
- Ordenar a lista de tarefas por ordem alfabética, data de criação ou por status
- Inserir uma nova tarefa na lista
- Remover uma tarefa da lista
- Atualizar uma tarefa da lista
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto


## Executando os projetos

- [API do desafio no heroku](https://lmartins-ebytr-todolistapi.herokuapp.com/tasks)

- [Página do desafio no vercel]()

- Instruções para rodar localmente o [Backend](./server/README.md)

Instruções para rodar localmente o [Frontend](./frontend/README.md)


## Running Tests

Instruções para rodar os testes do [Backend](./server/README.md)

Instruções para rodar os testes do [Frontend](./frontend/README.md)


## Referência da API

⚠️ Antes de acessar a API ou fazer as requisições com frontend, ["acorde"](https://lmartins-ebytr-todolistapi.herokuapp.com/tasks) a API do heroku ⚠️

#### Listar todas as tarefas

```http
  GET https://lmartins-ebytr-todolistapi.herokuapp.com/tasks
```

#### Cadastrar tarefa

```http
  POST https://lmartins-ebytr-todolistapi.herokuapp.com/tasks
```

Insira os seguintes dados no corpo da requisição:

```json
{
  "name": "revisar PDI",
  "status": "pronto"
}
```

| Parameter   | Type     | Description                     |
| :---------- | :------- | :------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome da tarefa |
| `status`    | `string` | **Obrigatório**. Status da tarefa ("pronto", "em andamento" ou "pendente") |

#### Atualizar tarefa

```http
  PUT https://lmartins-ebytr-todolistapi.herokuapp.com/tasks/:id
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

| Parameter   | Type     | Description                     |
| :---------- | :------- | :------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome da tarefa |
| `status`    | `string` | **Obrigatório**. Status da tarefa ("pronto", "em andamento" ou "pendente") |

#### Remover tarefa

```http
  DELETE https://lmartins-ebytr-todolistapi.herokuapp.com/tasks/:id
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `id`      | `string` | **Obrigatório**. Id da tarefa a ser removida |

## Tech Stack

**Client:** React

**Server:** Node, Express, Express-rescue, MongoDB, Mongoose, Joi


## Feedback

Se você tiver algum comentário, entre em contato comigo pelo e-mail lucasmartins@gmail.com

## Autor

---

<a href="https://github.com/lucasmartins96">
 <img style="border-radius: 50%;" src="https://i.ibb.co/9qyGrPz/133705661-2282303861913690-7277653750101206726-o.jpg" width="100px;" alt=""/>
 <br />
 <sub><b>Lucas Martins</b></sub></a> <a href="https://github.com/lucasmartins96" title="perfil github">🚀</a>

Feito por Lucas Martins 👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Lucas%20Martins-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lumartins-silva/)](https://www.linkedin.com/in/lumartins-silva/)
[![Gmail Badge](https://img.shields.io/badge/-lucasmartins.dsilva@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lucasmartins.dsilva@gmail.com)](mailto:lucasmartins.dsilva@gmail.com)

