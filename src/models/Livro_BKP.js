import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: autorSchema
}, { versionKey: false });
//===================================================================================================

// Durante a aula usamos o formato embedding para unirmos os dados de autor ao livro correspondente.
// Confira abaixo um exemplo simples do mesmo processo, mas usando o formato referencing.
// No arquivo Livro.js: Ao invés do autorSchema, adicionamos a propriedade autor tendo
//como valor um ID do tipo ObjectId do MongoDB, fazendo referência à coleção autores.

// const livroSchema = new mongoose.Schema({
//     id: { type: mongoose.Schema.Types.ObjectId },
//     titulo: { type: String, required: true },
//     editora: { type: String },
//     preco: { type: Number },
//     paginas: { type: Number },
//     autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
//    }, { versionKey: false });
//----------------------------------------------------------------------------------------------------

// o LIVROS(parametro string) refere-se ao nome da coleção criada no DB(mongoose atlas)
const livro = mongoose.model("livros", livroSchema);
export default livro;