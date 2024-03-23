import React, {FC, useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

interface IProfileButtonElement {}

export const ProfileButtonElement: FC<IProfileButtonElement> = () => {
  const [isSubsribe, setIsSubscribe] = useState(false)
  const handleSubscribe = () => {
    setIsSubscribe(!isSubsribe)
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>
      <TouchableOpacity
        style={[
          styles.active_button,
          isSubsribe && {backgroundColor: '#FFFFFF'},
        ]}
        onPress={handleSubscribe}>
        <Text
          style={[
            {color: '#FFFFFF', fontSize: 15},
            isSubsribe && {color: '#6981D3'},
          ]}>
          {isSubsribe ? 'Вы подписаны' : 'Подписаться'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.disabled_button}>
        <Text style={{color: '#6981D3', fontSize: 15}}>Написать</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  active_button: {
    borderColor: '#D9D9D9',
    backgroundColor: '#6981D3',
    borderRadius: 10,
    borderWidth: 1,
    flex: 0.5,
    margin: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled_button: {
    borderColor: '#D9D9D9',
    borderRadius: 10,
    borderWidth: 1,
    flex: 0.5,
    margin: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
