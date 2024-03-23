import React, {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {HeadElement} from '../components/HeadElement'
import {ArrowLeftIcon} from '../components/icons/ArrowLeftIcon'

interface INewImagePage {}

export const NewImagePage: FC<INewImagePage> = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <HeadElement
        name="Новый образ"
        iconLeft={<ArrowLeftIcon color="" />}
        iconRight={<ArrowLeftIcon color="#FFFFFF" />}
      />
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            borderColor: '#C2C2C2',
            borderBottomWidth: 1,
            borderTopWidth: 1,
          }}>
          <TouchableOpacity style={styles.button}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#C2C2C2'},
            ]}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', height: 50}}>
          <TouchableOpacity style={styles.button}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#C2C2C2'},
            ]}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>6</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: '#C2C2C2',
  },
})
