import React, {FC, useEffect, useState} from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {HeadElement} from '../components/HeadElement'
import {ArrowLeftIcon} from '../components/icons/ArrowLeftIcon'
import {PlusIcon} from '../components/icons/PlusIcon'
import {CheckIcon} from '../components/icons/CheckIcon'
import Navigation from '../navigation/Navigation'
import {Bottom} from '../components/callagePage/Bottom'
import {Canvas} from '../components/callagePage/Canvas'
import {ScreenConteiner} from '../components/global/ScreenConteiner'
import {observer} from 'mobx-react-lite'
import {getCollageStore} from '../hooks/getCollageStore'
import {FlatList} from 'react-native-gesture-handler'

interface INewCollagePage {}

const collageStore = getCollageStore()

export const NewCollagePage: FC<INewCollagePage> = observer(() => {
  const [selectedItem, setSelectItem] = useState<number | null>(null)

  useEffect(() => {
    return () => {
      collageStore.resetCollage()
    }
  }, [])

  const handleNavigateToStudio = () => {
    Navigation.goBack()
  }
  const handleNavigateToAddItem = () => {
    Navigation.navigate('AddItemStudio')
  }
  const handleNavigateToSave = () => {
    Navigation.navigate('SaveCollage')
  }
  const handleSelectItem = (id: number) => {
    setSelectItem(id)
  }

  const handleDownCollageItem = () => {
    collageStore.downCollageItem(selectedItem)
  }

  const handleUpCollageItem = () => {
    collageStore.upCollageItem(selectedItem)
  }
  const handleDeleteCollageItem = () => {
    collageStore.deleteCollageItem(selectedItem)
  }
  const handleFlipCollageItem = () => {
    collageStore.flipCollageItem(selectedItem)
  }
  const handleCopyCollageItem = () => {
    collageStore.copyCollageItem(selectedItem)
  }

  return (
    <ScreenConteiner>
      <View style={{zIndex: 2, backgroundColor: '#FFFFFF'}}>
        <HeadElement
          name="Новый образ"
          iconLeft={
            <TouchableOpacity onPress={handleNavigateToStudio}>
              <ArrowLeftIcon color="" />
            </TouchableOpacity>
          }
          iconRight={
            <TouchableOpacity onPress={handleNavigateToSave}>
              <CheckIcon />
            </TouchableOpacity>
          }
        />
      </View>
      <View style={{zIndex: 1, flex: 1}}>
        <Canvas selectedItem={selectedItem} onSelectItem={handleSelectItem} />
      </View>
      <View
        style={{
          flex: 0.37,
          justifyContent: 'flex-end',
          backgroundColor: '#FFFFFF',
          zIndex: 3,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#D6D6D6',
            borderTopWidth: 1,
          }}>
          <TouchableOpacity onPress={handleNavigateToAddItem}>
            <PlusIcon />
          </TouchableOpacity>
          <FlatList
            horizontal
            data={collageStore.collage}
            renderItem={({item}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 1,
                }}>
                <Image
                  style={{height: 28, width: (28 * item.width) / item.height}}
                  source={{uri: item.uri_image}}
                />
              </View>
            )}
          />
        </View>
        <Bottom
          onDownCollageItem={handleDownCollageItem}
          onUpCollageItem={handleUpCollageItem}
          onDeleteCollageItem={handleDeleteCollageItem}
          onFlipCollageItem={handleFlipCollageItem}
          onCopyCollageItem={handleCopyCollageItem}
        />
      </View>
    </ScreenConteiner>
  )
})

const styles = StyleSheet.create({})
