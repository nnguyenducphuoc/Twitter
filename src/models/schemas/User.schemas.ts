import { ObjectId } from 'mongodb'
import { UserVerifyStatus } from '~/constants/enum'

interface UserType {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  created_at?: Date
  updated_at?: Date
  email_verify_token?: string
  forgot_password_token?: string
  verify?: UserVerifyStatus

  bio?: string
  location?: string
  website?: string
  username?: string
  avatar?: string
  cover_photo?: string
}

export default class User {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  created_at: Date
  updated_at: Date
  email_verify_token: string
  forgot_password_token: string
  verify: UserVerifyStatus

  bio: string
  location: string
  website: string
  username: string
  avatar: string
  cover_photo: string

  constructor(user: UserType) {
    const data = new Date()
    ;(this._id = user._id),
      (this.name = user.name || ''),
      (this.email = user.email),
      (this.date_of_birth = user.date_of_birth || new Date()),
      (this.password = user.password),
      (this.created_at = user.created_at || data),
      (this.updated_at = user.updated_at || data),
      (this.email_verify_token = user.email_verify_token || ''),
      (this.forgot_password_token = user.forgot_password_token || ''),
      (this.verify = user.verify || UserVerifyStatus.UnVerified),
      (this.bio = user.bio || ''),
      (this.website = user.website || ''),
      (this.avatar = user.avatar || ''),
      (this.location = user.location || ''),
      (this.username = user.username || ''),
      (this.cover_photo = user.cover_photo || '')
  }
}
