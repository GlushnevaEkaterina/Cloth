import {AppRegistry} from 'react-native';
// import App from './Registration';
import App from './App';
// import App from './DetermBodyType';
// import App from './Scrol';
// import App from './HomePage';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App)


// import * as React from 'react';
// import { View, Text } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;