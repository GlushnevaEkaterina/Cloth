export class Like {
  id: number
  name: string
  shopName: string
  uriImage: string
  price: number
  sale: number
  salePrice: number

  constructor(props: any) {
    this.id = props.id
    this.name = props.name
    this.shopName = props.shop_name
    this.uriImage = props.uri_image
    this.price = props.price
    this.sale = props.sale
    this.salePrice = props.sale_price
  }
}
