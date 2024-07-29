import express from "express";
import corse from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import './src/database/dbConnection';
import usuarioRouter from "./src/routes/usuarios.routes";

const app = express();
dotenv.config();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), () =>{
    console.log("Estoy en el puerto " + app.get('PORT'));
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(corse()); 
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'/public')));

app.use("/api", usuarioRouter);