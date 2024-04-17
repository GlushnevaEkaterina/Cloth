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

interface INewCollagePage {}
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('screen').height
const insets = useSafeAreaInsets()
export const NewCollagePage: FC<INewCollagePage> = () => {
  const handleNavigateToStudio = () => {
    Navigation.navigate('Studio')
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

  // const start = useSharedValue({x: 0, y: 0})
  // const offset = useSharedValue({x: 0, y: 0})
  // const isPressed = useSharedValue(false)
  // const tap = Gesture.Tap().onStart(() => {
  //   isPressed.value = !isPressed.value
  // })

  return (
    <View style={styles.view}>
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
      <Image
        source={{uri: images[1]}}
        style={{
          height: 150,
          width: 150,
          position: 'absolute',
          left: WIDTH / 3,
          top: HEIGHT / 4,
        }}
      />
      <Image
        source={{uri: images[0]}}
        style={{
          height: 150,
          width: 150,
          position: 'absolute',
          left: WIDTH / 2,
          top: HEIGHT / 4,
        }}
      />
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: insets.top,
    paddingLeft: insets.left,
    paddingRight: insets.right,
    paddingBottom: insets.bottom,
  },
})
