import React, {FC} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {ArrowRightIcon} from './icons/ArrowRightIcon'
import {CartElement} from './CartElement'

interface IProps {
  name: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
}
export const HeadElement: FC<IProps> = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1,
      }}>
      <View style={{marginLeft: 10}}>{props?.iconLeft}</View>
      <Text
        style={{flex: 1, textAlign: 'center', fontSize: 17, color: '#000000'}}>
        {props.name}
      </Text>
      <View style={{marginRight: 10}}>{props?.iconRight}</View>
    </View>
  )
}
