import React, {FC, useEffect} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {Gesture, GestureDetector} from 'react-native-gesture-handler'
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {ItemCollage} from '../../modules/collage/models/ItemCollage'

interface ICanvasItem {
  item: ItemCollage
  isSelect: boolean
  onPress: () => void
}

export const CanvasItem: FC<ICanvasItem> = props => {
  const start = useSharedValue({x: props.item.x, y: props.item.y})
  const offset = useSharedValue({x: 0, y: 0})
  const scale = useSharedValue(1)
  const savedScale = useSharedValue(props.item.scale)
  const rotation = useSharedValue(props.item.rotation)
  const savedRotation = useSharedValue(0)
  const flip = useSharedValue(1)

  useEffect(() => {
    flip.value = withTiming(props.item.flip)
  }, [props.item.flip])

  console.log('start', start.value)
  console.log('flip', flip)

  const tap = Gesture.Tap()
    .onStart(() => {
      props.onPress()
    })
    .runOnJS(true)

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = savedScale.value * e.scale
    })
    .onEnd(() => {
      savedScale.value = scale.value
    })
    .onTouchesDown((_, state) => {
      'worklet'
      if (!props.isSelect) {
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
      'worklet'
      if (!props.isSelect) {
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
      if (!props.isSelect) {
        state.fail()
        return
      }
      state.activate()
    })

  const gesture = Gesture.Simultaneous(pan, tap, pinchGesture, rotationGesture)
  const animatedStyle = useAnimatedStyle(() => {
    'worklet'

    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: scale.value},
        {rotateZ: `${(rotation.value / Math.PI) * 180}deg`},
        {scaleX: flip.value},
      ],
    }
  }, [])

  // console.log('props.item.flip', props.item.flip)

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          animatedStyle,
          styles.containerCollage,
          {
            width: (200 * props.item.width) / props.item.height + 10,
            borderWidth: props.isSelect ? 1 : 0,
            zIndex: props.item.zindex,
          },
        ]}>
        <Image
          source={{uri: props.item.uri_image}}
          style={{
            height: 200,
            width: (200 * props.item.width) / props.item.height,
            zIndex: props.item.zindex,
            aspectRatio: 'auto',
          }}
          resizeMode="contain"
        />
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  containerCollage: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 210,
    borderStyle: 'dashed',
    borderColor: '#768FD4',
    borderRadius: 3,
  },
})
