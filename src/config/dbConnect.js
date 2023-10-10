import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};
// Note que, no exemplo acima, 
//não é necessário adicionar await pois return já é implicitamente assíncrono.
export default conectaNaDatabase;



