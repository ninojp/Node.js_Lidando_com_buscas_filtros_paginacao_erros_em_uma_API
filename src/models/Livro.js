import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { 
    type: String, 
    required: [true, "O Titulo do livro é Obrigatório"] },
  autor: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "autores", 
    required: [true, "O autor(a) é Obrigatório"],
    autopopulate: true
  },
  editora: { 
    type: String, 
    required: [true, "O campo editora é Obrigatório"],
    enum: {//O enum é usado para passar valores específicos a serem validados
      values: ["Casa do código", "Alura"],
      message: "A editora {VALUE} digitado não é permitido!"} },
  preco: { 
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 5 && valor <= 1000;
      },
      message: "O preço digitado: {VALUE} deve ser entre 5 e 1000" },
  },
  paginas: { 
    type: Number, 
    min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
    max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"] },
}, 
{ versionKey: false });
livroSchema.plugin(autopopulate);
// o LIVROS(parametro string) refere-se ao nome da coleção criada no DB(mongoose atlas)
const livros = mongoose.model("livros", livroSchema);
export default livros;