import React, {FC, useEffect, useState} from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

interface ICanvas {}

export const Canvas: FC<ICanvas> = () => {
  const [data, setData] = useState<any>([])
  let uri1 = {
    id: 1,
    uri: 'https://solonoi.ru/assets/img/home/4%20%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0.jpg',
    x: 0,
    y: 0,
  }

  const uri2 = {
    uri: 'https://itaita.ru/upload/medialibrary/339/tj4cbgk51t22nf5cjqupc6ct26r2yk40.jpeg',
  }
  // const data = [
  //   {
  //     id: 1,
  //     uri: 'https://solonoi.ru/assets/img/home/4%20%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0.jpg',
  //   },
  //   {
  //     id: 2,
  //     uri: 'https://itaita.ru/upload/medialibrary/339/tj4cbgk51t22nf5cjqupc6ct26r2yk40.jpeg',
  //   },
  // ]
  const start = useSharedValue({x: uri1.x, y: uri1.y})
  const offset = useSharedValue({x: 0, y: 0})
  const scale = useSharedValue(1)
  const savedScale = useSharedValue(1)
  const rotation = useSharedValue(0)
  const savedRotation = useSharedValue(0)
  const isPress = useSharedValue(false)

  const tap = Gesture.Tap().onStart(() => {
    isPress.value = !isPress.value
    console.log(isPress.value)
  })
  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = savedScale.value * e.scale
    })
    .onEnd(() => {
      savedScale.value = scale.value
    })
    .onTouchesDown((_, state) => {
      if (!isPress.value) {
        state.fail()
        return
      }
      state.activate()
    })
  const rotationGesture = Gesture.Rotation()
    .onUpdate(e => {
      rotation.value = savedRotation.value + e.rotation
    })
    .onEnd(() => {
      savedRotation.value = rotation.value
    })
    .onTouchesDown((_, state) => {
      if (!isPress.value) {
        state.fail()
        return
      }
      state.activate()
    })
  const pan = Gesture.Pan()
    .onUpdate(e => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      }
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      }
    })
    .onTouchesDown((_, state) => {
      if (!isPress.value) {
        state.fail()
        return
      }
      state.activate()
    })
  const gesture = Gesture.Simultaneous(pan, tap, pinchGesture, rotationGesture)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: scale.value},
        {rotateZ: `${(rotation.value / Math.PI) * 180}deg`},
      ],
      borderWidth: isPress.value ? 1 : 0,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      height: 210,
      width: 210,
      borderStyle: 'dashed',
      borderColor: '#768FD4',
      borderRadius: 3,
      zIndex: 1,
    }
  })
  return (
    <GestureHandlerRootView style={styles.contener}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={animatedStyle}>
          <Image source={uri1} style={{height: 200, width: 200, zIndex: 1}} />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFFFFF',

    backgroundColor: 'pink',
  },
  view: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 210,
    width: 210,
    borderStyle: 'dashed',
    borderColor: '#768FD4',
    borderRadius: 3,
  },
})
