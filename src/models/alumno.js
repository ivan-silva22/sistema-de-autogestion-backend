
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
    cuil: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20
    },
    fechaNac: {
        type: String,
        required: true,
        maxLength: 60,
    },
    provincia: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 400,
    },
    domicilio: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 800,
    },
    localidad: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 800,
    },
    celuPersonal: {
        type: Number,
        required: true,
        maxLength: 10
    },
    celuEmergencia: {
        type: Number,
        required: true,
        maxLength: 10
    },
    email: {
        type: String,
        required: true,
        match:
       /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    },
    periodoLectivo: {
        type: Number,
        required: true,
        maxLength: 5,
    },
    carrera: {
        type: String,
        required: true,
        enum: ['Profesorado en Historia', 'Profesorado en Matemática', 'Tecnicatura en Gestion Agropecuaria', 'Tecnicatura en Agroindustria de los Alimentos', 'Tecnicatura Superior en Desarrollo de Software'],
        message: 'La carrera seleccionada no es válida'
    },
    password: {
        type: String,
        required: true,
    },
    estadoAcademico: {
        type: Array,
    },
    cursando: {
        type: Array,
    },
    titulo: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 800,
    },
    escuela: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 800,
    },
    materiasAdeuda: {
        type: String,
    },
    documentos: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    }
});

const Alumno = mongoose.model('alumno', alumnoSchema);

export default Alumno;