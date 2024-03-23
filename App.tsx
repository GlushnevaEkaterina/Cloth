import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Navigator} from './src/navigation/Navigator'
import {PortalProvider} from '@gorhom/portal'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet'

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaProvider style={{flex: 1}}>
          <Navigator />
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default App
