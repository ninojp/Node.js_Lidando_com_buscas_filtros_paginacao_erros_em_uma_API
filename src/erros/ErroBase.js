class ErroBase extends Error {
  constructor(mensagen="Erro interno do servidor", status=500){
    super();
    this.message=mensagen;
    this.status=status;
  }
  enviarResposta(res){
    res.status(this.status).send({
      mensagen: this.message,
      status: this.status
    });
  }
}
export default ErroBase;