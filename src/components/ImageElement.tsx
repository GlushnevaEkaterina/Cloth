import React, {FC, useState} from 'react'
import {
  View,
  AnimatableNumericValue,
  DimensionValue,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native'
import {CloseIcon} from './icons/CloseIcon'
import {Portal} from '@gorhom/portal'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

interface IProps {
  source: ImageSourcePropType
  height: DimensionValue
  width: DimensionValue
  borderRadius?: AnimatableNumericValue
}

export const ImageElement: FC<IProps> = props => {
  const insets = useSafeAreaInsets()
  const [visible, setIsVisible] = useState(false)
  return (
    <View>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Image
          source={props.source}
          style={{
            height: props.height,
            width: props.width,
            borderRadius: props?.borderRadius,
          }}
        />
      </TouchableOpacity>
      {visible && (
        <Portal>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
            }}>
            <TouchableOpacity
              style={{
                top: insets.top + 8,
                width: 48,
                height: 48,
                right: 8,
                zIndex: 2,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
              }}
              onPress={() => setIsVisible(false)}>
              <CloseIcon />
            </TouchableOpacity>
            <Image
              source={props.source}
              style={{width: '100%'}}
              resizeMode="contain"
            />
          </View>
        </Portal>
      )}
    </View>
  )
}
