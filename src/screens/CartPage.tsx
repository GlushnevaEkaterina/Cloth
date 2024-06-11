import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {ScreenConteiner} from '../components/global/ScreenConteiner'
const Buffer = require('buffer').Buffer

export const CartPage = () => {
  let encodedAuth = new Buffer('your text').toString('base64')
  console.log(encodedAuth)
  return (
    <ScreenConteiner>
      <Text>CartPage</Text>
    </ScreenConteiner>
  )
}
const styles = StyleSheet.create({})
