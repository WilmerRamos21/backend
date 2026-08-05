import Usuario from "../models/Usuario.js";

export const registro = async (req, res) => {
    try {
        const { nombre, apellido, correo, password, telefono } = req.body;

        // Validar campos vacíos
        if (Object.values(req.body).includes("")) {
            return res.status(400).json({ msg: 'Debe llenar todos los campos' });
        }

        // Verificar si el correo ya existe
        const verificarEmail = await Usuario.findOne({ correo });
        if (verificarEmail) {
            return res.status(400).json({ msg: 'Lo sentimos, el usuario ya se encuentra registrado' });
        }

        // Crear la instancia del usuario
        const nuevoUsuario = new Usuario({ nombre, apellido, correo, password, telefono });

        // Encriptar la contraseña usando el método del modelo
        nuevoUsuario.password = await nuevoUsuario.passwordEncrypt(password);

        // Guardar en la base de datos
        await nuevoUsuario.save();

        res.status(200).json({ msg: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ msg: `Error del servidor: ${error.message}` });
    }
}