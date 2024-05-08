import React, {Children, FC} from 'react'
import {View as RNView} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

interface IScreenConteiner {
  children: React.ReactNode
}

export const ScreenConteiner: FC<IScreenConteiner> = prop => {
  const insets = useSafeAreaInsets()
  return (
    <RNView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}>
      {prop.children}
    </RNView>
  )
}
