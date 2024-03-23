import React from 'react'
import {TouchableOpacity} from 'react-native'
import Navigation from '../navigation/Navigation'
import {SettingIcon} from './icons/SettingIcon'

export const SettingElemet = () => {
  const handleNavigateToSetting = () => {
    Navigation.navigate('Setting')
  }
  return (
    <TouchableOpacity onPress={handleNavigateToSetting}>
      <SettingIcon />
    </TouchableOpacity>
  )
}
