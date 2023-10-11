import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    const mensagensError = Object.values(erro.errors).map(erro => erro.message).join("; ");
    super(`Os seguintes Erros foram encontrados: ${mensagensError}`);
  }
}
export default ErroValidacao;