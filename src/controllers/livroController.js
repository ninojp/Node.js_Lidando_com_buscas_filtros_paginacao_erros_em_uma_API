// import mongoose from "mongoose";
import NaoEncontrado from "../erros/NaoEncontrado.js";
import {autores, livros} from "../models/index.js";

class LivroController{
  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = livros.find();
      req.resultado = buscaLivros;
      next();
    } catch (erro) {
      next(erro);
    }
  };
  // --------------------------------------------------------------------------------------------------
  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findById(id).populate("autor", "nome").exec();
      if(livroResultado !== null){
        res.status(200).send(livroResultado);
      }else{
        next(new NaoEncontrado("Id do Livro não localizado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };
  //--------------------------------------------------------------------------------------------------
  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      const livroResultado = await livro.save();
      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };
  //--------------------------------------------------------------------------------------------------
  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findByIdAndUpdate(id, {$set: req.body});
      if(livroResultado !== null){
        res.status(200).send({message: "Livro atualizado com sucesso"});
      }else{
        next(new NaoEncontrado("Id do Livro não localizado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };
  //--------------------------------------------------------------------------------------------------
  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findByIdAndDelete(id);
      if(livroResultado !== null){
        res.status(200).send({message: "Livro removido com sucesso"});
      }else{
        next(new NaoEncontrado("Id do Livro não localizado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };
  //--------------------------------------------------------------------------------------------------
  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);
      if(busca !== null){
        const livrosResultado = livros
          .find(busca)
          .populate("autor");
        req.resultado = livrosResultado;
        next();
      }else{
        // res.status(200).send([]);// professor fez assim
        res.status(200).send({message: "Nenhum Autor encontrado!"});// Eu fiz
      }
    } catch (erro) {
      next(erro);
    }
  };
}
export default LivroController;

// Obs, a função foi criada fora da classe justamente para não ser exportada
async function processaBusca(parametros){
  const {titulo, editora, minPaginas, maxPaginas, nomeAutor} = parametros;
  // const regex = new RegExp(titulo, "i"); // Sintax usando o JavaScript

  let busca = {};
  if (editora) busca.editora = editora;
  // if (titulo) busca.titulo = regex;// Sintax usando o JavaScript

  if (minPaginas || maxPaginas) busca.paginas = {};

  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };//Operadores de busca do MongoDB
  // $gte,(MongoDB) expressão em inglês “Greater Than or Equal”, “maior ou igual que”
  if (minPaginas) busca.paginas.$gte = minPaginas;
  // $lte,(MongoDB) vem da expressão em inglês “Less Than or Equal”, “menor ou igual que”
  if (maxPaginas) busca.paginas.$lte = maxPaginas;

  if(nomeAutor){
    const autor = await autores.findOne({nome: nomeAutor});
    if(autor !== null){
      busca.autor = autor._id;
    }else{
      busca=null;
    }
  }
  return busca;
}