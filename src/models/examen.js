import mongoose, { Schema } from "mongoose";

const AlumnosInscriptos = new Schema({
    nombres: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300
    },
    apellido: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300
    },
    dni: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function(v){
                return /^\d{7,8}$/.test(v);
            },
            message: 'No es un DNI valido'
        }
    },
    carrera: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500
    },
    legajo: {
        type: Number,
        required: true,
        maxLength: 4
    }
})


const examenSchema = new Schema({
    nombreMateria: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500
    },
    fecha: {
        type: Date,
        required: true,
        default: () => {
            const fecha = new Date();
            return new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        }
    },
    alumnosInscriptos: {
        type: [AlumnosInscriptos]
    }
});

const Examen = mongoose.model('examen', examenSchema);

export default Examen;