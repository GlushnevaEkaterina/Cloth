import React, {FC, useState} from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {HeadElement} from '../components/HeadElement'
import {ArrowLeftIcon} from '../components/icons/ArrowLeftIcon'
import {PlusIcon} from '../components/icons/PlusIcon'
import {CheckIcon} from '../components/icons/CheckIcon'
import Navigation from '../navigation/Navigation'
import {Bottoms} from '../components/callagePage/Bottom'
import {Canvas} from '../components/callagePage/Canvas'
import {ScreenConteiner} from '../components/global/ScreenConteiner'

interface INewCollagePage {}
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('screen').height

export const NewCollagePage: FC<INewCollagePage> = () => {
  const handleNavigateToStudio = () => {
    Navigation.goBack()
  }
  const handleNavigateToAddItem = () => {
    Navigation.navigate('AddItemStudio', {handleAddImage})
  }
  const [images, setImage] = useState<string[]>([])
  const handleAddImage = (image: string) => {
    setImage([...images, image])
  }
  console.log(images)
  const layerBelow = () => {
    for (let i = 0; i < images.length; i++) {}
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
            <TouchableOpacity>
              <CheckIcon />
            </TouchableOpacity>
          }
        />
      </View>
      <View style={{zIndex: 1, flex: 1}}>
        <Canvas />
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
        </View>
        <Bottoms />
      </View>
    </ScreenConteiner>
  )
}

const styles = StyleSheet.create({})
