# API-EMPRESAS

## Modelagem de dados


![Modelagem de Dados](../13-api-empresas/docs/modelagem.png)

## Arquitetura
A API será construída utilizando Node.js e Express.js, com o banco de dados MongoDB hospedado no MongoDB Atlas. A configuração do ambiente será gerenciada com o dotenv e a validação de dados será feita com o Yup.

![Arquitetura](../13-api-empresas/docs/arquitetura.png)

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com)
- [Nodemon](https://www.digitalocean.com/community/tutorials/workflow-nodemon-pt)
- [MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/register)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com)
- [Yup](https://github.com/jquense/yup)

## Instalação
1. Clone este repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    ```
2. Instale as dependências:
    ```sh
    npm install
    ```
3. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    MONGODB_URI=<sua_url_mongodb_atlas>
    PORT=<porta_da_aplicação>
    ```
4. Inicie a aplicação:
    ```sh
    npm start
    ```


## Contribuição
Sinta-se à vontade para contribuir com o projeto enviando um pull request. Por favor, certifique-se de que suas alterações sejam bem documentadas e testadas.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
