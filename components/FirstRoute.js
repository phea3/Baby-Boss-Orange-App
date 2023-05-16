import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import {useState, useEffect} from 'react';
import { SearchBar } from '@rneui/themed';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const FirstRoute = ({route, foo}) => {

    const [search, setSearch] = useState("");
  
    const updateSearch = (search) => {
      setSearch(search);
    };
  
    const [tableHead, setTableHead] = useState(['No', 'Name', 'Email']);
    const [tableData, setTableData] = useState([
        [1, 'Divyesh', 'divyesh@gmail.com'],
        [2, 'Nikhi', 'nikhil@gmail.com'],
        [3, 'Bhavesh', 'bhavesh@gmail.com'],
        [4, 'Vishal', 'vishal@gmail.com'],
        [5, 'Divyesh', 'divyesh@gmail.com'],
        [6, 'Nikhi', 'nikhil@gmail.com'],
        [7, 'Bhavesh', 'bhavesh@gmail.com'],
        [8, 'Vishal', 'vishal@gmail.com'],
        [9, 'Divyesh', 'divyesh@gmail.com'],
        [10, 'Nikhi', 'nikhil@gmail.com'],
        [11, 'Bhavesh', 'bhavesh@gmail.com'],
        [12, 'Vishal', 'vishal@gmail.com'],
        [13, 'Divyesh', 'divyesh@gmail.com'],
        [14, 'Nikhi', 'nikhil@gmail.com'],
        [15, 'Bhavesh', 'bhavesh@gmail.com'],
        [16, 'Vishal', 'vishal@gmail.com'],
        [17, 'Divyesh', 'divyesh@gmail.com'],
        [18, 'Nikhi', 'nikhil@gmail.com'],
        [19, 'Bhavesh', 'bhavesh@gmail.com'],
        [20, 'Vishal', 'vishal@gmail.com'],
        [21, 'Divyesh', 'divyesh@gmail.com'],
        [22, 'Nikhi', 'nikhil@gmail.com'],
        [23, 'Bhavesh', 'bhavesh@gmail.com'],
        [24, 'Vishal', 'vishal@gmail.com'],
        [25, 'Divyesh', 'divyesh@gmail.com'],
        [26, 'Nikhi', 'nikhil@gmail.com'],
        [27, 'Bhavesh', 'bhavesh@gmail.com'],
        [28, 'Vishal', 'vishal@gmail.com'],
        [29, 'Divyesh', 'divyesh@gmail.com'],
        [30, 'Nikhi', 'nikhil@gmail.com'],
        [31, 'Bhavesh', 'bhavesh@gmail.com'],
        [32, 'Vishal', 'vishal@gmail.com'],
        [33, 'Divyesh', 'divyesh@gmail.com'],
        [34, 'Nikhi', 'nikhil@gmail.com'],
        [35, 'Bhavesh', 'bhavesh@gmail.com'],
        [36, 'Vishal', 'vishal@gmail.com'],
        [37, 'Divyesh', 'divyesh@gmail.com'],
        [38, 'Nikhi', 'nikhil@gmail.com'],
        [39, 'Bhavesh', 'bhavesh@gmail.com'],
        [40, 'Vishal', 'vishal@gmail.com'],
    ]);

    useEffect(()=>{
      // console.log(foo)
    },[])
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            // containerStyle={{backgroundColor: '#0081CF'}}
            // inputStyle={{backgroundColor: '#ffffff'}}
            platform={Platform.OS}
          />
          <ScrollView 
             showsVerticalScrollIndicator={false}
          >
            <View style={styles.contrainer}>
                <Table borderStyle={{ borderWidth: 1 }}>
                    <Row data={tableHead} flexArr={[1, 1, 3]} style={styles.head} textStyle={styles.text} />
                    <TableWrapper style={styles.wrapper}>
                        <Rows data={tableData} flexArr={[1,1,3]} widthArr={tableData.widthArr} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
                <Image 
                      style={styles.image} 
                      source={foo.params.item.imgUrl}
                      contentFit= 'cover'
                      transition={1000}
                      placeholder={blurhash}
                />
              <Text>{foo.params.item.title}</Text>
              <Text>{foo.params.item.body}</Text>
            </View>
          </ScrollView>
          
      </View>
    )};

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        alignItem: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
    },
    head: {  
        height: 40, 
        backgroundColor: '#f1f8ff',
    },
    wrapper: { 
        flexDirection: 'row',
    },
    title: { 
        flex: 1, 
        backgroundColor: '#f6f8fa',
    },
    row: {  
        height: 28,  
    },
    text: { 
        textAlign: 'center',
    },
});

      
export default FirstRoute