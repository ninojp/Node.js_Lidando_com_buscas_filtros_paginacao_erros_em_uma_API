import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  message: ({path}) => `O campo: ${path} está em branco!`
});

// No caso o validadorGlobal válida todos os campos dos Schemas importados
// O método trim() remove espaços em branco no início e no final de uma string. 
// validator: (valor) => valor.trim() !== ""
//Poderia ser outro método de string necessário se fose o caso
