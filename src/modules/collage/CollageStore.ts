import {makeAutoObservable} from 'mobx'
import {Item} from './models/Item'
import {ItemCollage} from './models/ItemCollage'

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
