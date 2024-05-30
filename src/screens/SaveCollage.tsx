import React, {FC, useState} from 'react'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {ScreenConteiner} from '../components/global/ScreenConteiner'
import {HeadElement} from '../components/HeadElement'
import {ArrowLeftIcon} from '../components/icons/ArrowLeftIcon'
import Navigation from '../navigation/Navigation'
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors'
import {GradientButton} from '../components/GradientButton'
import {getCollageStore} from '../hooks/getCollageStore'

interface ISaveCollage {}

const collageStore = getCollageStore()

export const SaveCollage: FC<ISaveCollage> = () => {
  const [name, onChangeName] = useState<string>('')
  const [description, onChangeDescription] = useState<string>('')

  const handleNavigateToNewCollagePage = () => {
    Navigation.goBack()
  }
  const handleSaveCollage = () => {
    collageStore.postCollage(name, description)
  }
  return (
    <ScreenConteiner>
      <HeadElement
        name="Сохранить коллаж"
        iconLeft={
          <TouchableOpacity onPress={handleNavigateToNewCollagePage}>
            <ArrowLeftIcon color="" />
          </TouchableOpacity>
        }
        iconRight={<ArrowLeftIcon color="#FFFFFF" />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/236x/f4/b5/76/f4b576bee5467a5941a7b71881b80d2a.jpg',
            }}
            style={{height: 300, width: 300}}
          />
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <Text style={{fontSize: 20, color: 'black'}}>Заголовок</Text>
          <TextInput
            multiline
            style={{
              flex: 1,
              justifyContent: 'center',
              fontSize: 20,
              color: '#6981D3',
            }}
            onChangeText={onChangeName}
            placeholder="Название образа"
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <Text style={{fontSize: 20, color: 'black'}}>Описание</Text>
          <TextInput
            multiline
            style={{
              flex: 1,
              justifyContent: 'center',
              fontSize: 20,
              color: '#6981D3',
            }}
            onChangeText={onChangeDescription}
            placeholder="Несколько слов об образе"
            placeholderTextColor={'grey'}
          />
        </View>
        <View
          style={{
            padding: 15,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <GradientButton name="Сохранить" onPress={handleSaveCollage} />
        </View>
      </ScrollView>
    </ScreenConteiner>
  )
}
