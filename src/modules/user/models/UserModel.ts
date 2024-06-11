export class User {
  id: number
  login: string
  password: string

  constructor(userResponse: any) {
    this.id = userResponse.id
    this.login = userResponse.login
    this.password = userResponse.password
  }
}
