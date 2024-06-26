import {Styles} from '../styles/Style'
import React, {useState} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Navigation from '../navigation/Navigation'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {SkipButton} from '../components/SkipButton'
import {UserStore} from '../modules/user/UserStore'
import {getUserStore} from '../hooks/getUserStore'

const logo = {uri: 'https://cdn-icons-png.flaticon.com/512/2960/2960527.png'}
const userStore = getUserStore()

const AuthPage = () => {
  const [login, onChangeLogin] = useState<string>('')
  const [password, onChangePassword] = useState<string>('')

  const handleNavigateToRegister = () => {
    Navigation.navigate('Registration')
  }

  const hanleAuth = () => {
    userStore.loginUser(login, password)
    Navigation.navigate('Main')
  }

  return (
    <LinearGradient
      colors={['#3E97F7', '#AB73ED']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1, justifyContent: 'flex-start'}}>
      <SkipButton />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image source={logo} style={styles.logo} />
        <TextInput
          style={Styles.input}
          placeholder="Login"
          onChangeText={onChangeLogin}
          placeholderTextColor={'#FFFFFF'}
          clearButtonMode={'never'}></TextInput>
        <TextInput
          style={Styles.input}
          secureTextEntry={true}
          onChangeText={onChangePassword}
          placeholder="Password"
          placeholderTextColor={'#FFFFFF'}></TextInput>
        <TouchableOpacity style={Styles.button} onPress={hanleAuth}>
          <Text style={Styles.textButton}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToRegister}>
          <Text style={Styles.button2}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    height: 200,
    width: 400,
    marginHorizontal: 'auto',
    marginVertical: 7,
  },
  hello: {
    color: '#FFFFFF',
    fontSize: 60,
    textAlign: 'center',
    margin: 20,
  },
})

export default AuthPage
