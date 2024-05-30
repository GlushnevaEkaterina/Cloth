import {ItemCollage} from './ItemCollage'

export class Collage {
  name: string
  description: string
  items: ItemCollage[]

  constructor(props: any) {
    this.name = props.name
    this.description = props.description
    this.items = props.items
  }
}
