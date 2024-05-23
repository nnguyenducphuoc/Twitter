import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
/**
 * Description: Register a new user
 * Path: /register
 * Method: POST
 * Body: ...
 */
usersRouter.post('/register', registerValidator, registerController)

export default usersRouter
