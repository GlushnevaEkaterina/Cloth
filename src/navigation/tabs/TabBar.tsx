import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomePage from '../../screens/HomePage'
import RibbonPage from '../../screens/RibbonPage'
import SelectionPage from '../../screens/SelectionPage'
import StudioPage from '../../screens/StudioPage'
import ProfilePage from '../../screens/ProfilePage'
import {RibbonIcon} from '../../components/icons/RibbonIcon'
import {SelectionIcon} from '../../components/icons/SelectionIcon'
import {HomeIcon} from '../../components/icons/HomeIcon'
import {StudioIcon} from '../../components/icons/StudioIcon'
import {ProfileIcon} from '../../components/icons/ProfileIcon'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#6981D3',
        tabBarActiveTintColor: '#FFFFFF',
      }}>
      <Tab.Screen
        name="Ribbon"
        component={RibbonPage}
        options={{
          tabBarIcon: ({color}) => <RibbonIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Selection"
        component={SelectionPage}
        options={{
          tabBarIcon: ({color}) => <SelectionIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Studio"
        component={StudioPage}
        options={{
          tabBarIcon: ({color}) => <StudioIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
