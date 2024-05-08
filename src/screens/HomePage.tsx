import React from 'react'
import {ElementButton} from '../components/ElementButton'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {TrendIcon} from '../components/icons/TrendIcon'
import {NewIcon} from '../components/icons/NewIcon'
import {BrandIcon} from '../components/icons/BrandIcon'
import {ClothIcon} from '../components/icons/ClothIcon'
import {ShoesIcon} from '../components/icons/ShoesIcon'
import {AccessoriesIcon} from '../components/icons/AccessoriesIcon'
import {BagIcon} from '../components/icons/BagIcon'
import {ShopIcon} from '../components/icons/ShopIcon'
import {SaleIcon} from '../components/icons/SaleIcon'
import {SaerchElement} from '../components/SearchElement'
import {CartElement} from '../components/CartElement'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {ScreenConteiner} from '../components/global/ScreenConteiner'

const WomenRoute = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[styles.container, {paddingLeft: 16}]}>
      <ElementButton name="Новинки" icon={<NewIcon />} />
      <ElementButton name="Тренды" icon={<TrendIcon />} />
      <ElementButton name="Бренды" icon={<BrandIcon />} />
      <ElementButton name="Одежда" icon={<ClothIcon />} />
      <ElementButton name="Обувь" icon={<ShoesIcon />} />
      <ElementButton name="Аксессуары" icon={<AccessoriesIcon />} />
      <ElementButton name="Сумки" icon={<BagIcon />} />
      <ElementButton name="Магазины" icon={<ShopIcon />} />
      <ElementButton name="Расспродажа" icon={<SaleIcon />} />
    </View>
  </ScrollView>
)

const MenRoute = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[styles.container, {paddingLeft: 16}]}>
      <ElementButton name="Новинки" icon={<NewIcon />} />
      <ElementButton name="Тренды" icon={<TrendIcon />} />
      <ElementButton name="Бренды" icon={<BrandIcon />} />
      <ElementButton name="Одежда" icon={<ClothIcon />} />
      <ElementButton name="Обувь" icon={<ShoesIcon />} />
      <ElementButton name="Аксессуары" icon={<AccessoriesIcon />} />
      <ElementButton name="Сумки" icon={<BagIcon />} />
      <ElementButton name="Магазины" icon={<ShopIcon />} />
      <ElementButton name="Расспродажа" icon={<SaleIcon />} />
    </View>
  </ScrollView>
)

const renderScene = SceneMap({
  first: WomenRoute,
  second: MenRoute,
})

export default function HomePage() {
  const layout = useWindowDimensions()
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {key: 'first', title: 'ЖЕНИЩИНАМ'},
    {key: 'second', title: 'МУЖЧИНАМ'},
  ])

  return (
    <ScreenConteiner>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 5,
        }}>
        <SaerchElement />
        <View style={{marginLeft: 5, marginRight: 10}}>
          <CartElement />
        </View>
      </View>
      <TabView
        style={{margin: 5}}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})
