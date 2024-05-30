import React, {FC} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface IGradientButton {
  name: string
  onPress: () => void
}

export const GradientButton: FC<IGradientButton> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        marginRight: 10,
        height: 50,
      }}>
      <LinearGradient
        colors={['#3E97F7', '#AB73ED']}
        start={{x: 1, y: 0.5}}
        end={{x: 0, y: 0.5}}
        style={{
          flex: 1,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#FFFFFF'}}>{props.name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
