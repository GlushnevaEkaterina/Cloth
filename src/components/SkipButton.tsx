import React from 'react'
import {Styles} from '../styles/Style'
import {TouchableOpacity, Text, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Navigation from '../navigation/Navigation'

export const SkipButton = () => {
  const insets = useSafeAreaInsets()
  const handleNavigateToHome = () => {
    Navigation.navigate('Main')
  }
  return (
    <View
      style={{position: 'absolute', top: 1 + insets.top, right: 16, zIndex: 9}}>
      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 8,
        }}
        onPress={handleNavigateToHome}>
        <Text style={Styles.button2}>Пропустить</Text>
      </TouchableOpacity>
    </View>
  )
}
