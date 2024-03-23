import React, {FC} from 'react'
import {ImageElement} from '../components/ImageElement'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

interface IProfileElement {}

export const ProfileElement: FC<IProfileElement> = () => {
  const name = 'Ирина'
  const images = 18
  const subscription = 60
  const subscribers = 147
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <ImageElement
        source={require('../assets/image/a449412077f9896b3f90e4a6404ef33c.jpeg')}
        height={100}
        width={100}
        borderRadius={100}
      />
      <View style={{marginLeft: 15}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: '#6981D3'}}>
          {name}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity style={{marginRight: 10}}>
            <Text style={styles.number}>{images}</Text>
            <Text style={styles.signature}>образы</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}}>
            <Text style={styles.number}>{subscription}</Text>
            <Text style={styles.signature}>подписки</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.number}>{subscribers}</Text>
            <Text style={styles.signature}>подписчики</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  signature: {
    fontSize: 15,
    color: '#D9D9D9',
  },
  number: {
    color: '#000000',
    fontSize: 20,
  },
})
