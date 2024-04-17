import React, {FC} from 'react'
import {Styles} from '../styles/Style'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Navigation from '../navigation/Navigation'
import {SkipButton} from '../components/SkipButton'

const bodySize = {
  uri: 'https://2klena.ru/upload/medialibrary/491/491787d663a3bc6d412673211645be1f.jpg',
}

const DetermBodyType = () => {
  const insets = useSafeAreaInsets()

  const handleNavigateToHome = () => {
    Navigation.navigate('Main')
  }
  return (
    <View style={styles.conteiner}>
      <LinearGradient
        colors={['#3E97F7', '#AB73ED']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: insets.bottom}}>
          <SkipButton />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginTop: insets.top + 12,
            }}>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 30,
                marginBottom: 7,
                marginTop: 50,
              }}>
              <Image
                source={bodySize}
                style={{
                  height: 500,
                  width: 270,
                }}
              />
            </View>
            <TextInput
              style={Styles.input}
              placeholder="Рост"
              placeholderTextColor={'#FFFFFF'}
            />
            <TextInput
              style={Styles.input}
              placeholder="Обхват плечей"
              placeholderTextColor={'#FFFFFF'}
            />
            <TextInput
              style={Styles.input}
              placeholder="Обхват груди"
              placeholderTextColor={'#FFFFFF'}
            />
            <TextInput
              style={Styles.input}
              placeholder="Обхват талии"
              placeholderTextColor={'#FFFFFF'}
            />
            <TextInput
              style={Styles.input}
              placeholder="Обхват бедер"
              placeholderTextColor={'#FFFFFF'}
            />
            <TouchableOpacity
              style={Styles.button}
              onPress={handleNavigateToHome}>
              <Text style={Styles.textButton}>Внести параметры</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
  },
})
export default DetermBodyType
