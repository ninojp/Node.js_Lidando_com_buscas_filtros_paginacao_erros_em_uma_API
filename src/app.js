import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de Conexão", erro);
});
conexao.once("open", () => {
  console.log("Conexão com a DB realizada com Sucesso");
});

const app = express();
routes(app);

export default app;
