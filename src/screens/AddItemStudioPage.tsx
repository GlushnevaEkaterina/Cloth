import React, {FC, useEffect} from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {HeadElement} from '../components/HeadElement'
import {ArrowLeftIcon} from '../components/icons/ArrowLeftIcon'
import Navigation from '../navigation/Navigation'
import {ScreenConteiner} from '../components/global/ScreenConteiner'
import {observer} from 'mobx-react-lite'
import {getCollageStore} from '../hooks/getCollageStore'

interface IAddItemStudioPage {}

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('screen').height

const collageStore = getCollageStore()

export const AddItemStudioPage: FC<IAddItemStudioPage> = observer(() => {
  const handleGoBack = () => {
    Navigation.goBack()
  }
  const handleAddToNewImage = (image: string) => {
    Navigation.navigate('NewImage')
  }

  useEffect(() => {
    collageStore.getAddItemCollage()

    return () => {
      collageStore.resetAddItem()
    }
  }, [])

  if (collageStore.isCollageLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  } else {
    return (
      <ScreenConteiner>
        <HeadElement
          name="Выбор изображения"
          iconLeft={
            <TouchableOpacity onPress={handleGoBack}>
              <ArrowLeftIcon color="" />
            </TouchableOpacity>
          }
          iconRight={<ArrowLeftIcon color="#FFFFFF" />}
        />
        <FlatList
          data={collageStore.items}
          numColumns={3}
          renderItem={({item}) => (
            <View style={styles.item}>
              <TouchableOpacity
                style={{
                  flex: 1,
                }}
                onPress={() => {
                  collageStore.setCollage(item)
                  handleAddToNewImage(item.uri_image)
                }}>
                <Image
                  source={{uri: item.uri_image}}
                  style={{flex: 1, height: HEIGHT / 4, width: WIDTH / 3}}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </ScreenConteiner>
    )
  }
})

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: HEIGHT / 4,
    width: WIDTH / 3,
    borderWidth: 1,
  },
})
