import { Router } from 'express'
import { loginController, logoutController, registerController } from '~/controllers/users.controllers'
import {
  accessTokenValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator
} from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const usersRouter = Router()
/**
 * Description: Login a user
 * Path: /login
 * Method: POST
 * Body: ...
 */
usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))

/**
 * Description: Logout a user
 * Path: /logout
 * Method: POST
 * Body: ...
 */
usersRouter.post('/logout', accessTokenValidator, refreshTokenValidator, wrapRequestHandler(logoutController))

/**
 * Description: Register a new user
 * Path: /register
 * Method: POST
 * Body: ...
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

export default usersRouter
