import React, {FC, useRef, useState} from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {GridIcon} from './icons/GridIcon'
import {ListIcon} from './icons/ListIcon'
import {LikeIcon} from './icons/LikeIcon'
import Navigation from '../navigation/Navigation'

interface IProfileList {}

const WIDTH = Dimensions.get('window').width

export const ProfileList: FC<IProfileList> = () => {
  const handleNavigateToLike = () => {
    Navigation.navigate('Like')
  }
  const Data = [
    {
      id: 1,
      uri: 'https://cdn.fishki.net/upload/post/201402/07/1242948/1_1284329882_doseng.jpg',
    },
    {
      id: 2,
      uri: 'https://media.istockphoto.com/id/1322277517/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B8%D0%BA%D0%B0%D1%8F-%D1%82%D1%80%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%B3%D0%BE%D1%80%D0%B0%D1%85-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5.jpg?s=612x612&w=0&k=20&c=PzyOT42E_elmRShS-7hCADYhXiElZar77vEm8uxuC3Y=',
    },
    {
      id: 3,
      uri: 'https://kartin.papik.pro/uploads/posts/2023-06/thumbs/1686798679_kartin-papik-pro-p-kartinki-priroda-bezhevie-54.jpg',
    },
    {
      id: 4,
      uri: 'https://kartin.papik.pro/uploads/posts/2023-06/thumbs/1686798662_kartin-papik-pro-p-kartinki-priroda-bezhevie-1.jpg',
    },
    {
      id: 5,
      uri: 'https://kartin.papik.pro/uploads/posts/2023-06/thumbs/1686798662_kartin-papik-pro-p-kartinki-priroda-bezhevie-3.jpg',
    },
    {
      id: 6,
      uri: 'https://kartin.papik.pro/uploads/posts/2023-06/thumbs/1686798677_kartin-papik-pro-p-kartinki-priroda-bezhevie-49.jpg',
    },
    {
      id: 7,
      uri: 'https://kartin.papik.pro/uploads/posts/2023-06/thumbs/1686798663_kartin-papik-pro-p-kartinki-priroda-bezhevie-5.jpg',
    },
    {
      id: 8,
      uri: 'https://i.pinimg.com/564x/d5/49/d4/d549d4edaddcbd7e0efae54ec08548ad.jpg',
    },
  ]
  const [isSelected, setSelected] = useState(false)
  const [isList, setList] = useState(false)

  const handleSelected = (value: boolean) => {
    setList(value)
    setSelected(!isSelected)
  }

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleSelected(false)}>
            {isSelected ? (
              <GridIcon color="#C8C8C8" />
            ) : (
              <GridIcon color="#6981D3" />
            )}
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleSelected(true)}>
            {isSelected ? (
              <ListIcon color="#6981D3" />
            ) : (
              <ListIcon color="#C8C8C8" />
            )}
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={handleNavigateToLike}>
            <LikeIcon color="#C8C8C8" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <FlatList
          style={{paddingBottom: 15}}
          key={`${isList}`}
          data={Data}
          numColumns={isList ? 1 : 3}
          renderItem={({item}) => (
            <View>
              {isList ? (
                // <View
                //   style={{
                //     flex: 1,
                //     width: WIDTH,
                //     height: 300,
                //     borderColor: '#D9D9D9',
                //     borderWidth: 0.5,
                //   }}
                // >
                <Image
                  source={{uri: item.uri}}
                  style={{
                    // flex: 1,
                    width: WIDTH,
                    height: WIDTH,
                    // resizeMethod: 'resize',
                  }}
                  resizeMode="contain"
                />
              ) : (
                // </View>
                <View
                  style={{
                    width: WIDTH / 3 - 10,
                    height: WIDTH / 3 - 10,
                    borderColor: '#D9D9D9',
                    borderWidth: 0.5,
                  }}>
                  <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => handleSelected(true)}>
                    <Image
                      source={{uri: item.uri}}
                      style={{
                        flex: 1,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        />
      </View>
    </View>
  )
}
