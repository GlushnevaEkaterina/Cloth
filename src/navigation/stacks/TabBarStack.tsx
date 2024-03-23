import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {TabBar} from '../tabs/TabBar'

const Stack = createNativeStackNavigator()

export const TabBarStack = <Stack.Screen name={'Main'} component={TabBar} />
