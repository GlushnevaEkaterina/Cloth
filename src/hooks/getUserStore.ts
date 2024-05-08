import {UserStore} from '../modules/user/UserStore'

let userStore: UserStore
export function getUserStore() {
  if (!userStore) {
    userStore = new UserStore()
  }
  return userStore
}
