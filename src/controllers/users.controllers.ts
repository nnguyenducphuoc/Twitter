import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/request/User.request'
import usersService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'nguyenducphuoc0902@gmail.com' && password === '123123123') {
    return res.json({
      message: 'Login Success'
    })
  }
  res.json({
    message: 'Login Failed'
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    return res.json({
      message: 'Register Success',
      result
    })
  } catch (error) {
    console.log('register failed')
    console.log(error)
  }
}
