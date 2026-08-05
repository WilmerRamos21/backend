import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const connection = async() => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URI_LOCAL)
        console.log(`Base de datos conectada en ${connection.host} - ${connection.port}`)
    }catch(error){
        console.log(`No se ha podido conectar a la base: `, error)
    }
}

export default connection