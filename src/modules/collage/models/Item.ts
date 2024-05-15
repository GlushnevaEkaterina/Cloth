export class Item {
  id: number
  uri_image: string
  height: number
  width: number

  constructor(props: any) {
    this.id = props.id
    this.uri_image = props.uri_image
    this.height = props.height
    this.width = props.width
  }
}
