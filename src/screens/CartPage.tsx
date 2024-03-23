import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, Image} from 'react-native'

export const CartPage = () => {
  // const [data, setData] = useState([])
  // const getItems = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/all')
  //     const json = await response.json()
  //     console.log(json)
  //     setData(json)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // useEffect(() => {
  //   getItems()
  // }, [])
  return (
    <View></View>
    //   <View>
    //     <FlatList
    //       data={data}
    //       keyExtractor={({id}) => id}
    //       renderItem={({item}) => (
    //         <View style={{flex: 1, margin: 10}}>
    //           <Image
    //             style={{flex: 1, height: 60}}
    //             source={{uri: item.uri_image}}
    //           />
    //           {/* <Text style={{fontSize: 20}}>{item.uri_image}</Text> */}
    //         </View>
    //       )}
    //     />
    //   </View>
  )
}
