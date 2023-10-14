import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
async function paginar(req, res, next){
  try{
    // let {limite=5, pagina=1, campoOrdenacao="_id", ordem=-1} = req.query;
    let {limite=5, pagina=1, ordenacao="_id:-1"} = req.query;
    let [campoOrdenacao, ordem] = ordenacao.split(":");
    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);
    const resultado = req.resultado;
    if(limite > 0 && pagina > 0){
      const resultadoPaginado = await resultado.find()
        // a Variável [campoOrdenacao], precisa estar entre colchetes
        .sort({[campoOrdenacao]: ordem})// (.sort, Ordenar) -1=Decrescente, 1=Crescente
        .skip((pagina -1) * limite)
        .limit(limite)
        .exec();
      res.status(200).json(resultadoPaginado);
    }else{
      next(new RequisicaoIncorreta());
    }
  }catch(erro){
    next(erro);
  }
}   
export default paginar;
