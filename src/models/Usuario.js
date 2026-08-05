import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
    }
}
    , {
        timestamps: true,
    });


    // Metofdod para cifrar el password
    usuarioSchema.methods.passwordEncrypt = async function (password) {
        const salt = await bcrypt.genSalt(10)
        const passwordEncrypt = await bcrypt.hash(password, salt)
        return passwordEncrypt
    }

    usuarioSchema.methods.matchPassword = async function (password) {
        const response = await bcrypt.compare(password, this.password)
        return response
    }


    export default model ('Usuario', usuarioSchema)