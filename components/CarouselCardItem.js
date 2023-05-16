import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Dimensions, Image, Pressable, Button } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index, navigation }) => {
  return (
    <View style={styles.container} key={index}>
      { item.imgUrl !== null ? (
        <Image
        source={item.imgUrl}
        style={styles.image}
        contentFit= 'none'
        transition={1000}
      />
      ) : null}
      
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      {item.button === 'Get Start' ? ( <Pressable style={styles.buttom} onPress={()=> navigation.navigate('FormLogin')}>
        <Text style={styles.buttom_title}>{item.button}</Text>
      </Pressable>) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0081CF',
    borderRadius: 20,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 180,
    marginTop: 20,
  },
  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    textAlign: 'center',
  },
  body: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  buttom: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  buttom_title: {
    color: '#0081CF',
    fontSize: 18,
    fontWeight: 'bold'
  },
})

export default CarouselCardItem