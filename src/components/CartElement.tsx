import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {CartIcon} from './icons/CartIcon'
import Navigation from '../navigation/Navigation'

export const CartElement = () => {
  const handleNavigateToCart = () => {
    Navigation.navigate('Cart')
  }
  return (
    <TouchableOpacity
      onPress={handleNavigateToCart}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <CartIcon />
      <Text
        style={{
          color: '#6981D3',
        }}>
        19
      </Text>
    </TouchableOpacity>
  )
}
