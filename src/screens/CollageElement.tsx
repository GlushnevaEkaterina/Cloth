import React, {FC} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {CheckBoxOff} from '../components/icons/CheckBoxOff'
import {CheckBoxOn} from '../components/icons/ChekBoxOn'
import {CheckBox} from '../components/CheckBox'
import {GradientButton} from '../components/GradientButton'
import {getCollageStore} from '../hooks/getCollageStore'

interface ICollageElement {}

const collgaeStore = getCollageStore()

export const CollageElement: FC<ICollageElement> = () => {
  return (
    <View style={styles.contener}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CheckBox
          name="Головной убор"
          onPress={collgaeStore.addElement}
          elementName="Hat"
        />

        <CheckBox
          name="Верхняя одежда"
          onPress={collgaeStore.addElement}
          elementName="Upper-clothes"
        />

        <CheckBox
          name="Юбка"
          onPress={collgaeStore.addElement}
          elementName="Skirt"
        />

        <CheckBox
          name="Штаны"
          onPress={collgaeStore.addElement}
          elementName="Pants"
        />

        <CheckBox
          name="Платье"
          onPress={collgaeStore.addElement}
          elementName="Dress"
        />

        <CheckBox
          name="Пояс"
          onPress={collgaeStore.addElement}
          elementName="Belt"
        />

        <CheckBox
          name="Обувь"
          onPress={collgaeStore.addElement}
          elementName="Shoes"
        />

        <CheckBox
          name="Шарф"
          onPress={collgaeStore.addElement}
          elementName="Scarf"
        />

        <CheckBox
          name="Сумка"
          onPress={collgaeStore.addElement}
          elementName="Bag"
        />

        <CheckBox
          name="Руки"
          onPress={collgaeStore.addElement}
          elementName="Armsag"
        />

        <CheckBox
          name="Ноги"
          onPress={collgaeStore.addElement}
          elementName="Legs"
        />

        <CheckBox
          name="Очки"
          onPress={collgaeStore.addElement}
          elementName="Sunglasses"
        />

        {/* <GradientButton name='Вырезать' onPress={}/> */}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  touch: {
    paddingLeft: 15,
    height: 50,
    justifyContent: 'center',
  },
  text: {
    marginLeft: 20,
    fontSize: 25,
  },
})
