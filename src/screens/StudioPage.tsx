import React, {useCallback, useEffect, useRef, useState} from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Pressable,
} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {HeadElement} from '../components/HeadElement'
import {CartElement} from '../components/CartElement'
import {LikeIcon} from '../components/icons/LikeIcon'
import LinearGradient from 'react-native-linear-gradient'
import {CameraIcon} from '../components/icons/CameraIcon'
import {ShareIcon} from '../components/icons/ShareIcon'
import {DeleteIcon} from '../components/icons/DeleteIcon'
import {GradientButton} from '../components/GradientButton'
import Navigation from '../navigation/Navigation'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import {GalleryIcon} from '../components/icons/GalleryIcon'
export default function Studio() {
  const insents = useSafeAreaInsets()

  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const handleNavigateToNewImage = () => {
    Navigation.navigate('NewImage')
  }

  const [data, setData] = useState<any>([])
  const getCollage = async () => {
    try {
      const response = await fetch('http://192.168.1.46:3000/studio')
      const json = await response.json()
      setData(json)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getCollage()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insents.top,
        paddingLeft: insents.left,
        paddingRight: insents.right,
        backgroundColor: '#FFFFFF',
      }}>
      <HeadElement
        name="Студия"
        iconRight={<CartElement />}
        iconLeft={<LikeIcon color="#FFFFFF" />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginLeft: 20, marginRight: 20, alignItems: 'center'}}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <GradientButton
              onPress={handleNavigateToNewImage}
              name="НОВЫЙ ОБРАЗ"
            />
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef.current?.present()
              }}
              style={styles.cameraButton}>
              <LinearGradient
                colors={['#3E97F7', '#AB73ED']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={styles.gradientCamera}>
                <CameraIcon />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              justifyContent: 'center',
              fontSize: 30,
              color: '#6981D3',
              marginTop: 20,
            }}>
            Проекты образов
          </Text>
          {/* <FlatList
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  marginTop: 25,
                  marginBottom: 25,
                  backgroundColor: 'white',
                }}>
                <TouchableOpacity
                  style={[{borderRadius: 150}, styles.shadowBig]}>
                  <Image
                    style={{
                      flex: 1,
                      height: 300,
                      width: 300,
                      borderRadius: 150,
                    }}
                    source={{uri: item.uri_collage}}
                  />
                </TouchableOpacity>
                <View style={[styles.shadowSmall, {left: '30%'}]}>
                  <TouchableOpacity>
                    <ShareIcon />
                  </TouchableOpacity>
                </View>
                <View style={[styles.shadowSmall, {right: '30%'}]}>
                  <TouchableOpacity>
                    <DeleteIcon color="" />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
                  <Text style={{fontSize: 20}}>{item.name}</Text>
                  <Text style={{fontSize: 15, color: '#6981D3'}}>
                    {item.count} вещей · стоимость {item.sum}
                  </Text>
                </View>
              </View>
            )}
          /> */}
        </View>
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetRef}
        enablePanDownToClose
        enableDynamicSizing
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            enableTouchThrough={false}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            style={[
              {backgroundColor: 'rgba(0, 0, 0, 1)'},
              StyleSheet.absoluteFillObject,
            ]}
          />
        )}>
        <BottomSheetView
          style={[
            styles.contentContainer,
            {paddingBottom: insents.bottom + 16},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.sheetButton}>
              <View style={styles.sheetButtonBorder}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CameraIcon />
                  <Text style={{fontSize: 20, color: '#7286CF', marginTop: 10}}>
                    Камера
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.sheetButton}>
              <View style={styles.sheetButtonBorder}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <GalleryIcon color="#7286CF" />
                  <Text style={{fontSize: 20, color: '#7286CF', marginTop: 10}}>
                    Галлерея
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  )
}

const styles = StyleSheet.create({
  shadowSmall: {
    position: 'absolute',
    height: 50,
    bottom: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 1,
    backgroundColor: '#FFFFFF',
  },
  shadowBig: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 150,
  },
  gradientCamera: {
    flex: 1,
    borderRadius: 60,
    paddingTop: 15,
    paddingBottom: 15,
    paddingEnd: 10,
    paddingStart: 10,
    justifyContent: 'center',
  },
  cameraButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    marginRight: 0,
    width: 50,
    height: 50,
  },
  contentContainer: {
    alignItems: 'center',
  },
  sheetButton: {
    flex: 0.5,
    height: 150,
    padding: 20,
  },
  sheetButtonBorder: {
    flex: 1,
    borderColor: '#7286CF',
    borderWidth: 1,
    borderRadius: 20,
  },
})
