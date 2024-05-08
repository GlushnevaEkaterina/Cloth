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
  ActivityIndicator,
} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {HeadElement} from '../components/HeadElement'
import {ArrowLeftIcon} from '../components/icons/ArrowLeftIcon'
import Navigation from '../navigation/Navigation'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {LikeIcon} from '../components/icons/LikeIcon'
import {getUserStore} from '../hooks/getUserStore'
import {Observer, observer} from 'mobx-react-lite'
import {ScreenConteiner} from '../components/global/ScreenConteiner'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('screen').height

const userStore = getUserStore()

export const LikePage: FC = observer(() => {
  const layout = useWindowDimensions()
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {key: 'first', title: 'ВЕЩИ'},
    {key: 'second', title: 'ОБРАЗЫ'},
  ])
  const handleNavigateToProfile = () => {
    Navigation.goBack()
  }
  useEffect(() => {
    userStore.getLikes()

    return () => {
      userStore.resetLikes()
    }
  }, [])
  const ItemsRout = () => {
    if (userStore.isLikeLoading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      )
    }

    return (
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <FlatList
            data={userStore.likes}
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
                      source={{uri: item.uriImage}}
                      style={{flex: 1, borderRadius: 10}}
                    />
                    <TouchableOpacity
                      style={{position: 'absolute', top: 5, right: 5}}>
                      <LikeIcon color="#F95731" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{marginTop: 5, fontSize: 17}}>{item.price} ₽</Text>
                <Text>{item.shopName}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    )
  }
  const LooksRout = () => (
    <ScrollView>
      <Text>Looks</Text>
    </ScrollView>
  )

  const renderScene = SceneMap({
    first: () => <Observer>{() => ItemsRout()}</Observer>,
    second: LooksRout,
  })
  return (
    <ScreenConteiner>
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
    </ScreenConteiner>
  )
})
