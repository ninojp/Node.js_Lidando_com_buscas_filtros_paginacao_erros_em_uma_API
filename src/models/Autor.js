import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  nacionalidade: { type: String }
}, {versionKey: false} );
// o autores(parametro string) refere-se ao nome da coleção criada no DB(mongoose atlas)
const autores = mongoose.model("autores", autorSchema);

export { autores, autorSchema };