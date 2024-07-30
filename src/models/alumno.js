import mongoose, {Schema} from "mongoose";

const alumnoSchema = new Schema({
    nombres: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300,
    },
    apellido: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300,
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
        enum: ['Profesorado en Historia', 'Profesorado en Matemática', 'Tecnicatura en Gestion Agropecuaria', 'Tecnicatura en Agroindustria de los Alimentos', 'Tecnicatura Superior en Desarrollo de Software'],
        message: 'La carrera seleccionada no es válida'
    },
    legajo: {
        type: Number,
        required: true,
        min: 4,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    estadoAcademico: {
        type: Array,
    },
    cursando: {
        type: Array,
    }
});

const Alumno = mongoose.model('alumno', alumnoSchema);

export default Alumno;