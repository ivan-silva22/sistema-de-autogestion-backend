import mongoose, {Schema} from "mongoose";

const carreraSchema = new Schema({
    nombreCarrera: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500
    },
    materias: {
        type: Array,
    }
});

const Carrera = mongoose.model('carrera', carreraSchema);

export default Carrera;