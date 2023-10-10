# Alura Curso Node.js Lidando com Buscas, Filtros, Paginacao, Erros em uma API

## Aula 01 - Criando variáveis de ambiente - video 1
Nesta aula, foi iniciada a implementação de melhorias na API da livraria a partir do ponto em que o projeto parou no curso anterior. Foram instaladas as dependências necessárias, verificada a conexão com o banco de dados MongoDB Atlas, testada a funcionalidade da API no Postman e implementada a utilização do pacote Dotenv para armazenar a string de conexão de forma segura em uma variável de ambiente.


## Aula 01 - Configurando o ESLint - video 2
Na aula "Deixando nossa API resiliente", configuramos o ESLint para manter um padrão de formatação nos arquivos do projeto e identificar bugs. Também instalamos a extensão do ESLint no VS Code e configuramos o salvamento automático dos arquivos. Por fim, corrigimos os erros identificados pelo ESLint no arquivo server.js. 


## Aula 01 - Refatorando com async/await - video 3
Nesta aula, foi mostrado como utilizar o Async/await no JavaScript para tornar o código mais legível e menos verboso. Foi explicado como aplicar o Async/await nos métodos de consulta e modificação do banco de dados do mongoose, como o find e o save. Também foi mostrado como tratar os erros utilizando o try/catch. O desafio deixado foi refatorar os outros métodos do arquivo autoresController.


## Aula 01 - Tratando erros de busca por id - video 4
Na aula, foi mostrado como refatorar o projeto utilizando Async/await nos métodos dos arquivos autoresController.js e livrosController.js. Foi destacada a importância de fazer um tratamento de erros correto na API, para que as mensagens de erro cheguem de forma consistente no front-end. Foram apresentados exemplos de tratamento de erros, como o caso de um autor não ser encontrado e o caso de um ID inválido ser passado na URL. Foi mostrado como tratar esses erros de forma mais específica, utilizando os recursos do Mongoose. Foi ressaltada a necessidade de tratar os erros de forma coerente para melhorar a experiência do usuário. Foi mencionado que o código dos métodos pode ficar extenso, mas será abordado um recurso para reutilizar o código e automatizar o tratamento de erros.



## Aula 01 - Conclusão - Nessa aula, você aprendeu a:
Proteger informações sensíveis com o dotenv:

Você aprendeu a usar o dotenv para configurar variáveis de ambiente no projeto. Criamos um arquivo .env para guardar a string de conexão do MongoDB Atlas, que é uma informação sensível, pois não queremos que qualquer pessoa tenha acesso ao banco de dados da aplicação.
Configurar o ESLint para formatar o código e identificar bugs:

O ESLint nos ajuda a manter a padronização de formatação de arquivos, o que favorece equipes que trabalham em um mesmo projeto. Além disso, a extensão ESLint alerta sobre erros de código que normalmente não seriam alertados, auxiliando nosso desenvolvimento.
Refatorar o código com async/await:

Removemos o uso de funções callback nos métodos do Mongoose que interagem com o banco de dados e trocamos pelo uso de async/await, em conjunto com o try...catch. Além do código se tornar mais legível, existem casos em que esse padrão irá nos auxiliar, como por exemplo realizar mais de uma operação no banco de dados no mesmo método de controlador.
Identificar e tratar erros específicos de uma rota:

Na rota de buscar um autor pelo seu ID, identificamos os casos em que: o dado foi fornecido de forma incorreta (código de status 400); o dado foi fornecido de forma correta, mas não havia nenhuma correspondência no banco de dados (código de status 404); e o caso de erro interno de servidor, que é retornado quando o erro não foi identificado como nenhum dos outros casos (código de status 500).




## Aula 02 - Middlewares do Express - video 1
Nesta aula, foi abordado o tratamento de erros na API. Foi mostrado como tratar erros específicos em uma rota específica e como lidar com erros internos do servidor. Foi introduzido o conceito de middlewares no Express, que são funções especiais que interceptam requisições feitas para a API. Foi criado um middleware de tratamento de erros que será executado em todas as requisições e será responsável por tratar os erros de forma centralizada. Foi feita a refatoração dos métodos das rotas para utilizar o middleware de tratamento de erros. Também foi mostrado como separar o middleware em um arquivo separado para deixar o código mais organizado.