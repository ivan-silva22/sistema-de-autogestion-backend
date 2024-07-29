import mongoose, {Schema} from "mongoose";

const materiasSchema = new Schema({
    nombreMateria: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500,
    },
    anio: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    dic: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300
    },
    acreditacion: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500
    },
    correlatividadCursar: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 800
    },
    correlatividadRendir: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 800
    }
})

const carreraSchema = new Schema({
    nombreCarrera: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500
    },
    materias: {
        type: [materiasSchema],
        validate: {
            validator: function(v) {
                return Array.isArray(v);
            }
        }
    }
});

const Carrera = mongoose.model('carrera', carreraSchema);

export default Carrera;