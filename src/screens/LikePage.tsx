import React, {FC, useEffect, useState} from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  useWindowDimensions,
  FlatList,
} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {HeadElement} from '../components/HeadElement'
import {ArrowLeftIcon} from '../components/icons/ArrowLeftIcon'
import Navigation from '../navigation/Navigation'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {LikeIcon} from '../components/icons/LikeIcon'

interface ILikePage {}
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('screen').height

export const LikePage: FC<ILikePage> = () => {
  const insets = useSafeAreaInsets()
  const layout = useWindowDimensions()
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {key: 'first', title: 'ВЕЩИ'},
    {key: 'second', title: 'ОБРАЗЫ'},
  ])
  const handleNavigateToProfile = () => {
    Navigation.navigate('Profile')
  }
  const [data, setData] = useState<any>([])
  const getLikes = async () => {
    try {
      const response = await fetch('http://192.168.1.46:3000/profile/like')
      const json = await response.json()
      setData(json)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getLikes()
  }, [])
  const ItemsRout = () => (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <View
              style={{
                height: HEIGHT / 3,
                width: WIDTH / 2,
                padding: 10,
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    flex: 1,
                    elevation: 4,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.0,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={{uri: item.uri_image}}
                    style={{flex: 1, borderRadius: 10}}
                  />
                  <TouchableOpacity
                    style={{position: 'absolute', top: 5, right: 5}}>
                    <LikeIcon color="#F95731" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={{marginTop: 5, fontSize: 17}}>{item.price} ₽</Text>
              <Text>{item.shop_name}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  )
  const LooksRout = () => (
    <ScrollView>
      <Text>Looks</Text>
    </ScrollView>
  )

  const renderScene = SceneMap({
    first: ItemsRout,
    second: LooksRout,
  })
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}>
      <HeadElement
        name="Избранное"
        iconLeft={
          <TouchableOpacity onPress={handleNavigateToProfile}>
            <ArrowLeftIcon color="#6981D3" />
          </TouchableOpacity>
        }
        iconRight={<ArrowLeftIcon color="#FFFFFF" />}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#6981D3'}}
            style={{backgroundColor: '#FFFFFF', elevation: 2}}
            renderLabel={({route, focused, color}) => {
              return (
                <View>
                  <Text
                    style={[focused ? {color: '#6981D3'} : {color: '#949494'}]}>
                    {route.title}
                  </Text>
                </View>
              )
            }}
          />
        )}
      />
    </View>
  )
}
