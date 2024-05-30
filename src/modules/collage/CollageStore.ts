import {makeAutoObservable} from 'mobx'
import {Item} from './models/Item'
import {ItemCollage} from './models/ItemCollage'
import {Collage} from './models/Collage'

export class CollageStore {
  isCollageLoading: boolean = false

  items: Item[] = []
  collage: ItemCollage[] = []

  constructor() {
    makeAutoObservable(this)
  }

  getAddItemCollage = () => {
    this.setCollageLoading(true)

    // fetch('http://192.168.1.47:3000/studio/collage/add')
    fetch('http://192.168.1.104:3000/studio/collage/add')
      .then(res => res.json())
      .then(res => {
        const items: Item[] = []
        res.forEach((item: any) => {
          items.push(new Item(item))
        })
        this.setCollageItems(items)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.setCollageLoading(false)
      })
  }

  postCollage = async (name: string, description: string) => {
    console.log('name:', name, '=====description:', description)
    console.log(this.collage)
    let user = {
      name: name,
      uri_collage: 'uri_collage',
      profile_id: 1,
      description: description,
      items: [...this.collage],
    }
    console.log(user)

    let response = await fetch(
      'http://192.168.1.104:3000/studio/collage/save',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      }
    )

    let result = await response.json()
    console.log(result.message)
  }

  upCollageItem = (id: number | null) => {
    if (!id) {
      return
    }

    const tempCollage = [...this.collage]

    const findCollageItemIndex = tempCollage.findIndex(item => item.id === id)

    tempCollage[findCollageItemIndex].zindex =
      tempCollage[findCollageItemIndex].zindex + 2

    this.collage = tempCollage
  }

  downCollageItem = (id: number | null) => {
    if (!id) {
      return
    }

    const tempCollage = [...this.collage]

    const findCollageItemIndex = tempCollage.findIndex(item => item.id === id)

    tempCollage[findCollageItemIndex].zindex =
      tempCollage[findCollageItemIndex].zindex - 2

    this.collage = tempCollage
  }

  deleteCollageItem = (id: number | null) => {
    if (!id) {
      return
    }
    const tempCollage = [...this.collage]
    const newCollage = tempCollage.filter(item => item.id !== id)
    this.collage = newCollage
  }

  flipCollageItem = (id: number | null) => {
    if (!id) {
      return
    }
    const tempCollage = [...this.collage]
    const flipItem = tempCollage.findIndex(item => item.id === id)
    if (tempCollage[flipItem].flip === 1) {
      tempCollage[flipItem].flip = -1
    } else {
      tempCollage[flipItem].flip = 1
    }
    console.log(JSON.stringify(tempCollage, null, 2))
    this.collage = tempCollage
  }

  copyCollageItem = (id: number | null) => {
    if (!id) {
      return
    }
    const zIndexes = this.collage.map(item => item.zindex)
    let maxZIndex = 0

    if (zIndexes.length) {
      maxZIndex = Math.max(...zIndexes) + 1
    } else {
      maxZIndex = 1
    }
    const tempCollage = [...this.collage]
    const copyItem = tempCollage.filter(item => item.id === id)
    const indexItem = tempCollage.findIndex(item => item.id === id)
    copyItem[indexItem].zindex = maxZIndex

    this.collage = [...this.collage, new ItemCollage(copyItem[0])]
  }
  resetAddItem = () => {
    this.items = []
  }
  resetCollage = () => {
    this.collage = []
  }
  setCollage = (value: Item) => {
    const zIndexes = this.collage.map(item => item.zindex)
    let maxZIndex = 0

    if (zIndexes.length) {
      maxZIndex = Math.max(...zIndexes) + 1
    } else {
      maxZIndex = 1
    }

    this.collage = [
      ...this.collage,
      new ItemCollage({...value, zindex: maxZIndex}),
    ]
  }

  private setCollageLoading = (value: boolean) => {
    this.isCollageLoading = value
  }
  private setCollageItems = (values: Item[]) => {
    this.items = values
  }
}
function alert(message: any) {
  throw new Error('Function not implemented.')
}
