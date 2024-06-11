import {makeAutoObservable} from 'mobx'
import {User} from './models/UserModel'
import {Like} from './models/Like'
import {Item} from '../collage/models/Item'
import AsyncStorage from '@react-native-async-storage/async-storage'

export class UserStore {
  isLikeLoading: boolean = false

  likes: Like[] = []
  items: Item[] = []

  user: User | null = null

  constructor() {
    makeAutoObservable(this)
  }

  loginUser = async (login: string, password: string) => {
    const logi = {
      email: login,
      password: password,
    }
    fetch(
      'http://192.168.1.47:3000/user/login',
      // 'http://192.168.1.104:3000/studio/collage/save',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(logi),
      }
    )
      .then(res => res.json())
      .then(res => {
        const data = {
          id: res.data.id,
          login: login,
          password: password,
        }
        this.user = new User(data)
        AsyncStorage.setItem('token', res.data.token)
        console.log('User:', this.user)
      })
      .catch(err => {
        console.log('Error', err)
        return err
      })
  }

  getUseInfo = () => {
    console.log('User info==============')
    // const data = {
    //   id: 1,
    //   login: 'Test',
    //   name: 'Test 1',
    //   firstName: 'Test 2',
    //   avatar: {id: '', fullUrl: ''},
    //   sex: 'Male',
    // }
    // this.user = new User(data)
  }

  getLikes = async () => {
    this.setLikeLoading(true)

    const token = (await AsyncStorage.getItem('token')) ?? ''

    fetch('http://192.168.1.47:3000/profile/like', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      // fetch('http://192.168.1.104:3000/profile/like')
      // fetch('https://10.0.2.2:3000/profile/like')
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
    console.log(this.likes)
  }

  createUser = (name: string, password: string, email: string, sex: string) => {
    const user = {
      name: name,
      password: password,
      email: email,
      sex: sex,
    }
    fetch(
      'http://192.168.1.47:3000/user/register',
      // 'http://192.168.1.104:3000/studio/collage/save',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      }
    ).catch(err => {
      console.log('Error', err)
      return err
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
