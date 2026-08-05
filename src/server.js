import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routerUsuarios from './routers/usuario_routes.js'
// inicializaciones

const app = express()
dotenv.config()

// confi

// middlewares 
app.use(express.json())
app.use(cors())

// variables globales
app.set('port', process.env.PORT || 3000)
app.get('/', (req, res) => res.send('Serven on'))

// Ruta de usuarios
app.use('/api', routerUsuarios)

// Manejo de rutas no encontradas
app.use((req, res) => res.status(404).send('Ruta no encontrada'))


export default app