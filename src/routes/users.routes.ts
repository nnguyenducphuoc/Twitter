import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
/**
 * Description: Register a new user
 * Path: /register
 * Method: POST
 * Body: ...
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

export default usersRouter
