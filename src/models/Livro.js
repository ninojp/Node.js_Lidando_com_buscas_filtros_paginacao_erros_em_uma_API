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
// o LIVROS(parametro string) refere-se ao nome da coleção criada no DB(mongoose atlas)
const livros = mongoose.model("livros", livroSchema);
export default livros;