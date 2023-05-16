import { View, useWindowDimensions} from 'react-native'
import * as React from 'react';
import {useState, useEffect} from 'react';
import { TabView } from 'react-native-tab-view';
import FirstRoute from '../components/FirstRoute';

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#FF6F91' }} />
);
const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#F9F871' }} />
);

const DetailView = ({navigation, route}) => {

  const layout = useWindowDimensions();

  const [items] = useState(route)

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute jumpTo={jumpTo} route={route} foo={items} />;
      case 'second':
        return <SecondRoute jumpTo={jumpTo} route={route} foo={items}/>;
      case 'third':
        return <ThirdRoute jumpTo={jumpTo} route={route} foo={items}/>;
      case 'fourth':
        return <FourthRoute jumpTo={jumpTo} route={route} foo={items}/>;
    }
  };

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'first', title: 'User' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
    { key: 'fourth', title: 'Fourth' },
  ]);
  useEffect(()=>{
    // console.log(items)
  },[])

  return (
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      />
  )
}

export default DetailView