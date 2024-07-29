import mongoose, {Schema} from "mongoose";

const estadoAcademico = new Schema({
    nombreMateria: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300,
    },
    anio: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    estado: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300,
    }
});

const cursando = new Schema({
    anio: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    dic: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    nombreMateria: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500,
    },
    horarios: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500,
    }
})

const usuarioSchema = new Schema({
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
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v){
                return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(v);
            },
            message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
        }
    },
    estadoAcademico: {
        type: [estadoAcademico],
        validate: {
            validator: function(v) {
                return Array.isArray(v);
            },
            message: 'El estado académico debe ser un array con al menos un objeto'
        }
    },
    cursando: {
        type: [cursando],
        validate: {
            validator: function(v) {
                return Array.isArray(v);
            },
            message: 'El estado  debe ser un array con al menos un objeto'
        }
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;