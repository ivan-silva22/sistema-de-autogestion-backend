import express from "express";
import corse from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";

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