import {makeAutoObservable} from 'mobx'
import {User} from './models/UserModel'
import {Like} from './models/Like'

export class UserStore {
  isLikeLoading: boolean = false

  likes: Like[] = []

  user: User | null = null

  constructor() {
    makeAutoObservable(this)
  }

  getUseInfo = () => {
    const data = {
      id: 1,
      login: 'Test',
      name: 'Test 1',
      firstName: 'Test 2',
      avatar: {id: '', fullUrl: ''},
      sex: 'Male',
    }
    this.user = new User(data)
  }

  getLikes = () => {
    this.setLikeLoading(true)

    fetch('http://192.168.1.46:3000/profile/like')
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        const likes: Like[] = []

        res.forEach((item: any) => {
          likes.push(new Like(item))
        })

        this.setLikes(likes)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        this.setLikeLoading(false)
      })
  }

  resetLikes = () => {
    this.setLikes([])
  }

  private setLikeLoading = (value: boolean) => {
    this.isLikeLoading = value
  }

  private setLikes = (values: Like[]) => {
    this.likes = values
  }
}
