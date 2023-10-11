import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "O Titulo do livro é Obrigatório"] },
  autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O autor(a) é Obrigatório"]},
  editora: { type: String, required: [true, "O campo editora é Obrigatório"] },
  preco: { type: Number },
  paginas: { type: Number },
}, { versionKey: false });
// o LIVROS(parametro string) refere-se ao nome da coleção criada no DB(mongoose atlas)
const livros = mongoose.model("livros", livroSchema);
export default livros;