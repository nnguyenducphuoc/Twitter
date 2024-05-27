import { Request } from 'express'
import User from './models/schemas/User.schemas'
import { Jwt } from 'jsonwebtoken'
import { TokenPayload } from './models/request/User.request'

declare module 'express' {
  interface Request {
    user?: User
    decoded_authorization?: TokenPayload
    decoded_refresh_token?: TokenPayload
  }
}
