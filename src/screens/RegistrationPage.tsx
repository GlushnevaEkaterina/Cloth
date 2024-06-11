import React, {useState} from 'react'
import {Styles} from '../styles/Style'
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import Navigation from '../navigation/Navigation'
import {SkipButton} from '../components/SkipButton'
import {WomanIcon} from '../components/icons/WomanIcon'
import {ManIcon} from '../components/icons/ManIcon'
import {getUserStore} from '../hooks/getUserStore'

const userStore = getUserStore()

export const Registration = () => {
  const insets = useSafeAreaInsets()
  const handleNavigateToDeterm = () => {
    Navigation.navigate('DetermBodyTypePage')
  }
  const [isMan, setMen] = useState(false)
  const [name, onChangeName] = useState<string>('')
  const [email, onChangeEmail] = useState<string>('')
  const [password, onChangePassword] = useState<string>('')

  const handleMan = (value: number) => {
    if (value == 0 && isMan == true) {
      setMen(!isMan)
    }
    if (value == 1 && isMan == false) {
      setMen(!isMan)
    }
  }

  const handleCreateUser = () => {
    let sex
    if (isMan) {
      sex = 'man'
    } else {
      sex = 'woman'
    }
    console.log(name, password, email, sex)
    userStore.createUser(name, password, email, sex)
    Navigation.goBack()
  }

  return (
    <LinearGradient
      colors={['#3E97F7', '#AB73ED']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1, justifyContent: 'flex-start'}}>
      <SkipButton />
      <View
        style={{
          marginTop: insets.top,
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 60,
          }}>
          Регистраци
        </Text>
        <View style={{flexDirection: 'row', marginRight: 20}}>
          <TextInput
            style={[Styles.input, {flex: 0.9, marginRight: 0}]}
            placeholder="Name"
            onChangeText={onChangeName}
            placeholderTextColor={'#FFFFFF'}></TextInput>
          <TouchableOpacity
            onPress={() => {
              handleMan(0)
            }}
            style={isMan ? {opacity: 0.3} : {opacity: 1}}>
            <WomanIcon color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={isMan ? {opacity: 1} : {opacity: 0.3}}
            onPress={() => {
              handleMan(1)
            }}>
            <ManIcon color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <TextInput
          style={Styles.input}
          placeholder="Email"
          onChangeText={onChangeEmail}
          placeholderTextColor={'#FFFFFF'}></TextInput>
        <TextInput
          style={Styles.input}
          placeholder="Password"
          onChangeText={onChangePassword}
          placeholderTextColor={'#FFFFFF'}
          secureTextEntry={true}></TextInput>
        <TouchableOpacity style={Styles.button} onPress={handleCreateUser}>
          <Text style={Styles.textButton}>Создать аккаунт</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}
