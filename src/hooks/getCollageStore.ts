import {CollageStore} from '../modules/collage/CollageStore'

let collageStore: CollageStore
export function getCollageStore() {
  if (!collageStore) {
    collageStore = new CollageStore()
  }
  return collageStore
}
