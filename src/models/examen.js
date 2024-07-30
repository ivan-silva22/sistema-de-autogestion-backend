import mongoose, { Schema } from "mongoose";

const examenSchema = new Schema({
    nombreMateria: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500
    },
    fecha: {
        type: String,
        required: true,
    },
    alumnosInscriptos: {
        type: Array,
    }
});

const Examen = mongoose.model('examene', examenSchema);

export default Examen;