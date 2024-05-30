import React, {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {FlipIcon} from '../icons/FlipIcon'
import {CopyIcon} from '../icons/CopyIcon'
import {DeleteIcon} from '../icons/DeleteIcon'
import {ArrowDownIcon} from '../icons/ArrowDownIcon'
import {ArrowUpIcon} from '../icons/ArrowUpIcon'
import {ScissorsIcon} from '../icons/ScissorsIcon'

interface IBottom {
  onUpCollageItem: () => void
  onDownCollageItem: () => void
  onDeleteCollageItem: () => void
  onFlipCollageItem: () => void
  onCopyCollageItem: () => void
}

export const Bottom: FC<IBottom> = props => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          borderColor: '#D6D6D6',
          borderBottomWidth: 1,
          borderTopWidth: 1,
        }}>
        <TouchableOpacity style={styles.button}>
          <ScissorsIcon />
          <Text style={styles.text}>Убрать фон</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.button,
            {
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: '#D6D6D6',
            },
          ]}>
          <TouchableOpacity
            style={styles.button}
            onPress={props.onFlipCollageItem}>
            <FlipIcon />
            <Text style={styles.text}>Отразить</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={props.onCopyCollageItem}>
          <CopyIcon />
          <Text style={styles.text}>Скопировать</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', height: 70}}>
        <TouchableOpacity
          style={styles.button}
          onPress={props.onDeleteCollageItem}>
          <DeleteIcon color="#EF7A7D" />
          <Text style={styles.text}>Удалить</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.button,
            {
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: '#D6D6D6',
            },
          ]}>
          <TouchableOpacity
            style={styles.button}
            onPress={props.onDownCollageItem}>
            <ArrowDownIcon />
            <Text style={styles.text}>Слоем ниже</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={props.onUpCollageItem}>
          <ArrowUpIcon />
          <Text style={styles.text}>Слоем выше</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    flex: 1 / 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#D6D6D6',
  },
})
