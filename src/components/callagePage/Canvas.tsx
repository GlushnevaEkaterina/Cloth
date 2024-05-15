import React, {FC} from 'react'
import {StyleSheet} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {observer} from 'mobx-react-lite'
import {CanvasItem} from './CanvasItem'
import {getCollageStore} from '../../hooks/getCollageStore'

interface ICanvas {
  selectedItem: null | number
  onSelectItem: (id: number) => void
}
const collageStore = getCollageStore()

export const Canvas: FC<ICanvas> = observer(props => {
  return (
    <GestureHandlerRootView style={styles.container}>
      {collageStore.collage.map(item => {
        const isSelect = item.id === props.selectedItem

        console.log('item', item)

        return (
          <CanvasItem
            key={item.id}
            item={item}
            isSelect={isSelect}
            onPress={() => props.onSelectItem(item.id)}
          />
        )
      })}
    </GestureHandlerRootView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
})
