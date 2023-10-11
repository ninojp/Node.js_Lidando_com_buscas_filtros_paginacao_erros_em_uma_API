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
> Lembrete: é importante sempre declarar os quatro parâmetros, porque o Express identificará que esse middleware é de tratamento de erros. 
**Middlewares**  
Middleware é um termo técnico utilizado para essas funções especiais que passamos para esse método do app.use. Os middlewares são funções que, basicamente, interceptam alguma ação; mais especificamente, interceptam alguma requisição feita para a nossa API. 
É uma função especial do Express que será executada em toda requisição feita para a API, ou então em determinadas requisições.

### Tipos de erros
Existe até uma classificação que define os erros de uma aplicação em dois tipos: erros operacionais e erros de programação.
 - Os erros operacionais são os que viemos tratando até o momento, como um dado incorreto vindo do front-end, ou mesmo um problema interno do Banco de Dados.
 - Já os erros de programação, que são os famosos bugs, envolvem um erro de escrita do próprio código, como um erro de sintaxe ou o erro de tentar acessar um propriedade de null ou undefined. Os erros de programação são até lançados como classes de erros específicas do JavaScript, que você pode ler melhor no artigo [Lidando com erros no Node.js](https://www.alura.com.br/artigos/lidando-com-erros-node-js).


## Aula 02 - Erros de validação - video 2
Nesta aula, aprendemos a criar um middleware de manipulador de erros para lidar com erros de validação em uma API Node.js. Foi mostrado como personalizar as mensagens de erro e aplicá-las nos modelos de autor e livro. Também foi ressaltada a importância de criar um middleware de tratamento de erros para automatizar esse processo. Além disso, foi mencionada a necessidade de refatorar o código do manipulador de erros para torná-lo mais eficiente.


## Aula 02 - Refatorando o manipulador de erros - video 3
Nesta aula, foi feita a refatoração do código do manipulador de erros para utilizar recursos de orientação a objetos do JavaScript. Foi criada uma classe chamada ErroBase que serve como erro base para padronizar as mensagens de erro enviadas ao front-end. Também foram criadas as classes RequisicaoIncorreta e ErroValidacao, que herdam da classe ErroBase, para tratar erros específicos de requisição incorreta e erros de validação, respectivamente. O código do manipulador de erros foi refatorado para utilizar essas novas classes, tornando-o mais organizado e legível. Os erros de requisição incorreta e de validação foram testados no Postman e funcionaram corretamente.


## Aula 02 - Tratando página 404 - video 4
Nesta aula, aprendemos sobre o tratamento de erros no Express, com foco no erro 404 de página não encontrada. Vimos como o Express trata as rotas e como o erro 404 é retornado quando não há correspondência com nenhuma rota registrada. Aprendemos a criar um middleware para tratar o erro 404 e encaminhá-lo para o middleware de tratamento de erros. Também vimos como atualizar os controladores para lidar com o erro 404, utilizando a classe NaoEncontrado. Por fim, foi proposto um desafio para implementar o tratamento de erro 404 em outros métodos do controlador de autores.


## Aula 02 - Conclusão - Nessa aula, você aprendeu a:
Criar e utilizar um middleware de manipulador de erros:  
Esse middleware é caracterizado por receber quatro parâmetros, convencionalmente chamados de: erro, req, res e next. Foi nele que centralizamos o tratamento da maioria dos erros que poderiam acontecer na aplicação, possibilitando a reutilização de código. E, de acordo com o erro recebido, ele pode encerrar o fluxo de requisição ao enviar uma resposta de erro padronizada para o cliente, utilizando o objeto res.
Identificar e tratar erros de validação:

É possível identificar um erro de validação do Mongoose ao verificar se o erro é uma instância de mongoose.Error.ValidationError. Também aprendemos como personalizar as mensagens de validação nos Schemas do Mongoose e como obtê-las no objeto de erro.
Refatorar o manipulador de erros utilizando classes:

Nos aproveitamos dos conceitos da orientação a objetos para criar classes para cada erro, reduzindo o código e tornando-o mais legível.
Criar um middleware para tratar páginas 404:

Esse middleware deve ser registrado após todas as outras rotas da aplicação. Assim, se nenhuma das rotas registradas tiver sido correspondida, o código desse middleware será executado. Em seguida, nele podemos criar um erro (no nosso caso, uma nova instância da classe NaoEncontrado) e enviá-lo para o manipulador de erros.
