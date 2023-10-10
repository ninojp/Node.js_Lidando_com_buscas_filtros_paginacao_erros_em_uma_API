// import mongoose from "mongoose";
import livro from "../models/Livro.js";
import { autores } from "../models/Autor.js";

class LivroController{
  // Método feito durante as aulas, usamos o formato embedding para unirmos os dados de autor ao livro correspondente.
  static async listarLivros(req, res){
    try{
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    }catch(erro){
      res.status(500).json({ message: `${erro.message} - Falha na requição!` });
    }
  }
  // --------------------------------------------------------------------------------------------------
  // Exercício proposto, usamos references para unir o autor ao livro
  // Quando usamos references o autor não faz mais parte do objeto livro. 
  //Assim, cada livro deve ser “populado” com as referências do autor.
  // Os métodos livro.find({}).populate("autor").exec(); vão utilizar o ID informado no
  //campo autor do livro para buscar a referência desse ID e “popular” a propriedade.

  // static async listarLivros (req, res) {
  //     try {
  //       const listaLivros = await livro.find({}).populate("autor").exec();
  //       res.status(200).json(listaLivros);
  //     } catch (erro) {
  //       res.status(500).json({ message: `${erro.message} - falha na requisição` });
  //     }
  //   };
  //--------------------------------------------------------------------------------------------------
  static async listarLivroPorId(req, res){
    try{
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    }catch(erro){
      res.status(500).json({ message: `${erro.message} - Falha na requição do livro!` });
    }
  }
  static async cadastrarLivro(req, res){
    const novoLivro = req.body;
    try{
      const autorEncontrado = await autores.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "Livro criado com sucesso", livro: livroCriado });
    }catch(erro){
      res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` });
    }
  }
  static async atualizarLivro(req, res){
    try{
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json( {message: "Livro atualizado"} );
    }catch(erro){
      res.status(500).json({ message: `${erro.message} - Falha na atualização!` });
    }
  }
  static async excluirLivro(req, res){
    try{
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json( {message: "Livro Excluído com sucesso!"} );
    }catch(erro){
      res.status(500).json({ message: `${erro.message} - Falha na Exclusão!` });
    }
  }
  static async listarLivroPorEditora(req, res){
    const queryEditora = req.query.editora;
    try{
      const livroPorEditora = await livro.find({ editora: queryEditora });
      res.status(200).json(livroPorEditora);
    }catch(erro){
      res.status(500).json({ message: `${erro.message} - Falha na Busca!` });
    }

  }
}
export default LivroController;