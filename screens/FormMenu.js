import { View, Text, Modal, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Card} from 'react-native-shadow-cards';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const items = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: require('../assets/images/stingy.png'),
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: require('../assets/images/stingy.png'),
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: require('../assets/images/stingy.png'),
  },
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: require('../assets/images/stingy.png'),
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: require('../assets/images/stingy.png'),
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: require('../assets/images/stingy.png'),
  },
]

const FormMenu = ({navigation}) => {
  const [splash, setSplash] = useState(true)
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
      <View style={styles.image_view}>
        <Image
            style={styles.modal}
            source={require('../assets/images/three.png')}
            contentFit= 'none'
            transition={1000}
        />
      </View>
    </Modal>
    )
    : 
    (
      <View  style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        { items.map((item, index) => (
           <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Detail', {item: item})}
           >
              <Card 
              style={{padding: 10, margin: 10}} 
              opacity={0.2}
              cornerRadius={10}
              >
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <Image 
                  style={styles.image} 
                  source={item.imgUrl}
                  contentFit= 'cover'
                  transition={1000}
                  placeholder={blurhash}
                  />
                  <View style={{
                    height: 50,
                    marginLeft: 13,
                    // backgroundColor: '#00ff00',
                    justifyContent: 'center',
                  }}>
                    <Text style={styles.heading}>
                    {item.title}
                    </Text>
                  </View>
                </View>
                <Text>
                  {item.body}
                </Text>
            </Card>
           </TouchableOpacity>
        ))}
        </ScrollView>
    </View>
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
  image_view:{
    width: '100%',
    height: '100%',
    backgroundColor: '#0081CF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: '90%',
    height: '25%',
  },
  image: {
    width: 50,
    height: 50,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
  },
})

export default FormMenu