import React, {FC, useEffect, useState} from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {HeadElement} from '../components/HeadElement'
import {ArrowLeftIcon} from '../components/icons/ArrowLeftIcon'
import Navigation from '../navigation/Navigation'
import {useRoute} from '@react-navigation/native'

interface IAddItemStudioPage {}

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('screen').height

export const AddItemStudioPage: FC<IAddItemStudioPage> = () => {
  const params = useRoute().params as any
  const handleNavigateToNewImage = () => {
    Navigation.navigate('NewImage')
    params.handleAddImage()
  }
  const handleAddToNewImage = (image: string) => {
    Navigation.navigate('NewImage')
    params.handleAddImage(image)
  }
  const insents = useSafeAreaInsets()
  const [data, setData] = useState<any>([])
  const getLikes = async () => {
    try {
      const response = await fetch('http://192.168.1.46:3000/profile/like')
      const json = await response.json()
      console.log(json)
      setData(json)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getLikes()
  }, [])
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insents.top,
        paddingLeft: insents.left,
        paddingBottom: insents.bottom,
        paddingRight: insents.right,
        backgroundColor: '#FFFFFF',
      }}>
      <HeadElement
        name="Выбор изображения"
        iconLeft={
          <TouchableOpacity onPress={handleNavigateToNewImage}>
            <ArrowLeftIcon color="" />
          </TouchableOpacity>
        }
        iconRight={<ArrowLeftIcon color="#FFFFFF" />}
      />
      {/* <FlatList
        data={data}
        numColumns={3}
        renderItem={({item}) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={{
                flex: 1,
              }}
              onPress={() => {
                handleAddToNewImage(item.uri_image)
              }}>
              <Image
                source={{uri: item.uri_image}}
                style={{flex: 1, height: HEIGHT / 4, width: WIDTH / 3}}
              />
            </TouchableOpacity>
          </View>
        )}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: HEIGHT / 4,
    width: WIDTH / 3,
    borderWidth: 1,
  },
})
