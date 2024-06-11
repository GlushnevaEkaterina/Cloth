import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Registration} from '../screens/RegistrationPage'
import Navigation from './Navigation'
import AuthPage from '../screens/AuthPage'
import DetermBodyTypePage from '../screens/DetermBodyTypePage'
import {TabBarStack} from './stacks/TabBarStack'
import {CartPage} from '../screens/CartPage'
import {SettingPage} from '../screens/SettingPage'
import {LikePage} from '../screens/LikePage'
import {NewCollagePage} from '../screens/NewCollagePage'
import {AddItemStudioPage} from '../screens/AddItemStudioPage'
import {SaveCollage} from '../screens/SaveCollage'
import {CollageElement} from '../screens/CollageElement'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
  return (
    <NavigationContainer ref={Navigation.navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthPage} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Cart" component={CartPage} />
        <Stack.Screen name="Setting" component={SettingPage} />
        <Stack.Screen
          name="DetermBodyTypePage"
          component={DetermBodyTypePage}
        />
        {TabBarStack}
        <Stack.Screen name="Like" component={LikePage} />
        <Stack.Screen name="NewImage" component={NewCollagePage} />
        <Stack.Screen name="AddItemStudio" component={AddItemStudioPage} />
        <Stack.Screen name="SaveCollage" component={SaveCollage} />
        <Stack.Screen name="ScissorsElement" component={CollageElement} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
