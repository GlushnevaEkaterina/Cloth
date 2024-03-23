import React, {useEffect, useState} from 'react'
import {View, ScrollView} from 'react-native'
import {HeadElement} from '../components/HeadElement'
import {CartElement} from '../components/CartElement'
import {SettingElemet} from '../components/SettingElenet'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {ProfileElement} from '../components/ProfileElement'
import {ProfileButtonElement} from '../components/ProfileButtonElement'
import {ProfileList} from '../components/ProfileList'

export default function Profile(this: any) {
  const insets = useSafeAreaInsets()
  const [data, setData] = useState<any>([])
  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:3000/profile')
      const json = await response.json()
      setData(json)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getProfile()
  }, [])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View>
        <HeadElement
          name={data.nik_name}
          iconLeft={<SettingElemet />}
          iconRight={<CartElement />}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 15, marginLeft: 15, marginRight: 15}}>
        <ProfileElement />
        <ProfileButtonElement />
        <ProfileList />
      </ScrollView>
    </View>
  )
}
