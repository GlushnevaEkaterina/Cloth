export class User {
  id: number
  login: string
  name: string

  constructor(userResponse: any) {
    this.id = userResponse.id
    this.login = userResponse.login
    this.name = userResponse.name
  }
}
