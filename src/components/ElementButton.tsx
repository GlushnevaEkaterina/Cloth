import React, {FC} from 'react'
import {TouchableOpacity, Text, View, Image} from 'react-native'
import {ArrowRightIcon} from './icons/ArrowRightIcon'

interface IProps {
  name: string
  icon?: JSX.Element
  //   onPress: () => void
}

export const ElementButton: FC<IProps> = props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: '#C0C0C0',
          height: 66.5,
        }}>
        {props?.icon}
        <Text
          style={{
            flex: 1,
            fontSize: 20,
            color: '#000000',
            marginLeft: 5,
          }}>
          {props.name}
        </Text>
        <View style={{paddingRight: 16}}>
          <ArrowRightIcon />
        </View>
      </TouchableOpacity>
    </View>
  )
}
