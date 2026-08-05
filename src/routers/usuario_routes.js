import {registro} from '../controllers/usuario_controller.js'
import { Router } from 'express'

const router = Router()

router.post('/registro', registro)

export default router