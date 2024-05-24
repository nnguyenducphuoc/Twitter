import express from 'express'
import { body, validationResult, ContextRunner } from 'express-validator'
import { httpStatus } from '~/constants/httpStatus'
import { ErrorWithStatus } from '~/models/Error'

// can be reused by many routes
export const validate = (validations: ContextRunner[]) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // sequential processing, stops running validations chain if one fails.
    for (const validation of validations) {
      const result = await validation.run(req)
      const errors = result.mapped()
      for (const key in errors) {
        const { msg } = errors[key]
        if (msg instanceof ErrorWithStatus && msg.status !== httpStatus.UNPROCESSABLE_ENTITY) {
          return next(msg)
        }
      }
      if (!result.isEmpty()) {
        return res.status(422).json({ errors: result.mapped() })
      }
    }

    next()
  }
}

// app.post('/signup', validate([
//   body('email').isEmail(),
//   body('password').isLength({ min: 6 })
// ]), async (req, res, next) => {
//   // request is guaranteed to not have any validation errors.
//   const user = await User.create({ ... });
// });
