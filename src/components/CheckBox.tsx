import React, {FC, useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {CheckBoxOff} from './icons/CheckBoxOff'
import {CheckBoxOn} from './icons/ChekBoxOn'

interface ICheckBox {
  name: string
  elementName: string
  onPress: (name: string) => void
}

export const CheckBox: FC<ICheckBox> = props => {
  const [press, setPress] = useState(false)

  const handlePress = () => {
    props.onPress(props.elementName)
    setPress(!press)
  }
  return (
    <TouchableOpacity style={styles.touch} onPress={handlePress}>
      {press ? (
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <CheckBoxOn />
          <Text style={styles.text}>{props.name}</Text>
        </View>
      ) : (
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <CheckBoxOff />
          <Text style={styles.text}>{props.name}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  touch: {
    paddingLeft: 15,
    height: 50,
    justifyContent: 'center',
  },
  text: {
    marginLeft: 20,
    fontSize: 25,
  },
})
