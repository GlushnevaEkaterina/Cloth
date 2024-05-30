export class ItemCollage {
  id: number
  uri_image: string
  height: number
  width: number
  x: number = 0
  y: number = 0
  rotation: number = 0
  scale: number = 1
  zindex: number
  flip: number = 1

  constructor(props: any) {
    this.id = props.id
    this.height = props.height
    this.width = props.width
    this.uri_image = props.uri_image
    this.zindex = props.zindex
  }
}
