import React from 'react'
import {TextInput} from 'react-native'

export const SaerchElement = () => {
  return (
    <TextInput
      style={{
        flex: 1,
        borderColor: '#C0C0C0',
        borderRadius: 30,
        borderWidth: 1,
        marginLeft: 20,
        paddingHorizontal: 20,
        fontSize: 20,
        width: 300,
        height: 56,
      }}
      placeholder="Поиск"
      placeholderTextColor={'#C0C0C0'}></TextInput>
  )
}
