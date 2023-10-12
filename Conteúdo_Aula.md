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



## Aula 03 - Validando os Dados

## Aula 03 - Validações do Mongoose - video 1
Nesta aula, aprendemos a fazer validações de dados utilizando o Mongoose. Foram mostradas as validações de número mínimo e máximo de páginas, além da validação de valores permitidos para o campo editora. Também vimos como personalizar as mensagens de erro em português.


## Aula 03 - Validação personalizada - video 2
Nesta aula, aprendemos a utilizar validações personalizadas no Mongoose. Vimos que podemos criar nossas próprias validações utilizando a função validate e uma arrow function. Dentro dessa função, implementamos a lógica da validação e retornamos um valor booleano que indica se o valor é válido ou não. Também aprendemos a personalizar a mensagem de erro para as validações personalizadas. Por fim, consultamos a documentação do Mongoose para relembrar a sintaxe e a ordem das propriedades necessárias para criar uma validação personalizada.


## Aula 03 - Validação global - video 3
Nesta aula, aprendemos sobre validações globais no Mongoose. Foi explicado como fazer uma validação global para campos do tipo string, utilizando o método set() do mongoose.Schema.Types.String. Foi mostrado como refatorar as importações nos controladores para utilizar o arquivo index.js, que agora exporta os modelos autores e livros. Foi demonstrado o funcionamento da validação global ao enviar requisições para a API, mostrando os erros de validação retornados. Também foi ensinado como personalizar a mensagem de erro da validação global, utilizando uma função arrow que recebe um objeto com o nome do campo que está sendo validado.


## Aula 03 - Conclusão - Nessa aula, você aprendeu a:
Aplicar validações nativas do Mongoose:  
Você conheceu validadores de números como min e max, que definem, respectivamente, os valores mínimo e máximo que o número do campo deve ter. Você também conheceu o validador de strings enum, que define os valores permitidos para o campo.
Criar validadores personalizados:

Esses validadores permitem que qualquer código JavaScript seja executado para validar ou não o dado recebido, então eles são adequados para realizar verificações mais complexas, como validar um número de CPF ou de telefone.
Aplicar um validador global:

Validadores globais também podem ser criados no Mongoose para realizar verificações de um determinado tipo de dado em todos os Schemas da aplicação. No nosso caso, impedimos que qualquer campo do tipo string de qualquer Schema aceitasse strings vazias, pois não é algo que faz sentido para o nosso banco de dados.




## Aula 04 - Avançando em buscas e filtros

## Aula 04 - Buscando por título do livro - video 1
Nesta aula, avançamos em buscas e filtros em uma API utilizando Node.js. Implementamos um filtro para o título do livro, permitindo que o usuário escreva o nome do livro e obtenha o retorno da API. Renomeamos o método listarLivroPorEditora para listarLivroPorFiltro e adicionamos a busca por título no método find do mongoose. Criamos um objeto de busca dinâmico, adicionando propriedades de acordo com os parâmetros fornecidos. Testamos a funcionalidade no Postman, buscando por editora, título e ambos. Concluímos que é possível buscar somente pela editora ou pelo título, mas faremos uma implementação para buscar por palavras-chave no próximo vídeo.


## Aula 04 - Aplicando regex na busca - video 2
Nesta aula, aprendemos a aplicar um novo filtro utilizando o método listarLivroPorFiltro que permite a busca de livros por meio da editora ou título. Foi apresentado o conceito de expressões regulares (regex) e como utilizá-las para realizar buscas mais dinâmicas. Foram mostrados exemplos de como utilizar regex no código e no Postman, tanto de forma estática quanto dinâmica. Também foi apresentada uma alternativa utilizando operadores do MongoDB para realizar a busca. Foi ressaltada a importância de conhecer a ferramenta utilizada, como o mongoose, e foi proposto um desafio para praticar a implementação de outros operadores.


## Aula 04 - [Desafio: filtrando por número de páginas](https://cursos.alura.com.br/course/node-js-buscas-filtros-paginacao-erros-api/task/124402)
Agora é a sua vez de implementar um novo filtro na rota de busca! A equipe de Front-end agora está solicitando que os livros possam ser filtrados de acordo com seu número de páginas. Os seguintes requisitos foram passados para a rota GET /livros/busca:
 - A rota deve estar preparada para receber os parâmetros de busca minPaginas e maxPaginas, que indicam, respectivamente, o número mínimo de páginas e o número máximo de páginas que os livros retornados devem ter;
 - Se o parâmetro de busca minPaginas for igual a 100, por exemplo, retorne apenas os livros que contêm 100 ou mais páginas;
 - Se o parâmetro de busca maxPaginas for igual a 300, por exemplo, retorne apenas os livros que contêm 300 ou menos páginas;
 - Se os dois parâmetros forem fornecidos ao mesmo tempo, retorne os livros que atendem às duas condições ao mesmo tempo. Por exemplo, se minPaginas for igual a 200 e maxPaginas for igual a 500, retorne todos os livros que possuem entre 200 e 500 páginas.


## Aula 04 - Filtrando por nome do autor - video 3
Nesta aula, aprendemos a implementar um filtro de busca por nome do autor em uma API Node.js. Verificamos se o parâmetro do nome do autor foi informado e, em seguida, pesquisamos o autor na coleção de autores. Utilizamos o método findOne() para obter o autor específico e seu ID. Em seguida, aplicamos o filtro na busca dos livros pelo ID do autor. Também aprendemos a utilizar a palavra-chave await para aguardar a resolução de operações assíncronas. Por fim, utilizamos o método populate() para melhorar a visualização dos dados, exibindo o nome do autor no retorno da busca.


## Aula 04 - Tratando autor não encontrado - video 4
Nesta aula, aprendemos a lidar com a busca por um autor inexistente em uma API. Foi feita uma refatoração no código para verificar se o autor existe antes de executar a busca. Caso o autor não exista, a variável de busca é atribuída como nula. Também foi adicionado um else para retornar uma lista vazia caso o autor não seja encontrado. Essa é uma forma mais semântica de dar o retorno para a API.
> Talvez uma coisa que você tenha pensado seria utilizar o populate do Mongoose para popular os dados do livros com as informações restantes do autor. Infelizmente, essa solução não é possível, pois o método populate não altera a forma como os livros são consultados no banco de dados. Em vez disso, ele apenas popula os campos solicitados depois que a consulta já foi realizada ao banco de dados.


## Aula 04 - Conclusão - Nessa aula, você aprendeu a:
Buscar pelos títulos dos livros de forma dinâmica:  
Para isso, podemos utilizar expressões regulares (ou regex) para tornar a busca por texto dinâmica. Isso pode ser feito passando diretamente uma expressão regular do JavaScript para o objeto de busca ou podemos utilizar os operadores de busca $regex e $options do MongoDB. Ambas as formas permitem que o valor a ser buscado venha de uma variável e que a flag i seja aplicada para que não haja distinção entre letras maiúsculas e minúsculas na busca.
Filtrar os livros por número de páginas:

Utilizamos os operadores de busca $gte (greater than or equal, que significa “maior ou igual que”) e $lte (less than or equal, que significa “menor ou igual que”) para definir, respectivamente, o número mínimo de páginas e o número máximo de páginas que um livro deve ter.
Buscar livros pelo nome do autor:

Como o nome do autor não é uma informação presente na coleção de livros, foi necessário realizar mais uma consulta para a coleção de autores, pois lá é possível obter seu id e realizar corretamente o filtro na busca de livros.
