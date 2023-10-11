import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: [true, "O nome do(a) Autor(a) é Obrigatório!"] },
  nacionalidade: { type: String }
}, {versionKey: false} );
// o autores(parametro string) refere-se ao nome da coleção criada no DB(mongoose atlas)
const autores = mongoose.model("autores", autorSchema);

export { autores, autorSchema };