
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
    siAdeuda: {
        type: Boolean,
    },
    noAdeuda: {
        type: Boolean,
    },
    nombreMateriaAdeuda: {
        type: String,
        minLength: {
            value: 2,
            message: 'La cantidad minima de caracteres es de 2 dígitos'
        },
        maxLength: {
            value: 1000,
            message: 'La cantidad máxima de caracteres es de 1000 dígitos'
        }
    },
    tituloSec: {
        type: Boolean
    },
    fotos: {
        type: Boolean
    },
    actaNacimiento: {
        type: Boolean,
    },
    constanciaEstudio: {
        type: Boolean
    },
    copiaDNI: {
        type: Boolean
    },
    psicoFisico: {
        type: Boolean,
    },
    constanciaCuil: {
        type: Boolean
    }
});

const Alumno = mongoose.model('alumno', alumnoSchema);

export default Alumno;