import { StyleSheet, Text, View, Modal, Alert, Pressable, ScrollView, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import React, { Component, useEffect, useState } from 'react'
import CarouselCards from '../components/CarouselCards';
const { width } = Dimensions.get('window')
const { height } = Dimensions.get('screen')

const Start = ({ navigation }) => {

  const [splash, setSplash] = useState(true)

  BenButonum=()=>{
    Alert.alert('Ben Butonum');
  }
  useEffect(()=>{
    setTimeout(() => {
       setSplash(false)
    },2000)
  },[])
  return (
    <>
    { splash ? (
      <Modal 
        transparent={false}
        visible={splash}
        animationType='fade'
    >
      <Image
          style={styles.modal}
          source={require('../assets/animated-cute.png')}
          contentFit= 'none'
          transition={1000}
      />
    </Modal>
    )
    :
    (
      <ScrollView
      style={{backgroundColor: '#ffffff'}}
      >

      <View style={styles.container}>
      <View style={styles.control_image}>
        <Image
          style={styles.image}
          source={require('../assets/kissface.png')}
          contentFit= 'contain'
          transition={1000}
          />
      </View>
      <CarouselCards navigation={navigation}/>
    </View>
    </ScrollView>
    )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  control_image: {
    width: 300,
    height: 300,
    marginTop: 40,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  modal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0081CF',
  },
  all_box:{
    backgroundColor: '#ffffff'
  },
  box:{
    flex: 1,
    width: width,
    backgroundColor: '#0081CF',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    // shadowRadius: 40,
    // shadowColor: '#000',
    // shadowOpacity: 0.4,
    paddingTop: 30,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center'
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    paddingBottom: 20,
    fontWeight: '500',
  },
  buttom: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 40,
    alignItems: 'center'
  },
  buttom_title: {
    color: '#0081CF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  control_dot:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 20,
    height: 20,
    margin: 10,
  },
});
export default Start