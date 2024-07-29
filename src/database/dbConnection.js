import mongoose from "mongoose";
import 'dotenv/config';

const cadenaConexion = process.env.DATABASE_URI || 'mongodb://localhost:27017/dbmiies';

mongoose.connect(cadenaConexion);

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('base de datos conectada');
});