import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de Conexão", erro);
});
conexao.once("open", () => {
  console.log("Conexão com a DB realizada com Sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;
//--------------------------------------------------------------------------------------
// app.use((req, res, next) => { 
//   console.log("Resposta do novo Middleware");
//   next();
// });
// Com o método app.use, conferimos como registrar um middleware que é 
// executado em toda requisição para a API. Mas como fazer para registrar 
// um middleware que é executado apenas em uma requisição GET para a rota /livros
// app.get("/livros", (req, res, next) => {
//   console.log("Middleware registrado no GET da rota /livros");
//   next();
// });
//--------------------------------------------------------------------------------------
