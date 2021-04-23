import React, {useState} from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import { v4 as uuid } from "uuid";
import Header from './components/Header';
import ListItem from './components/ListItem'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'item1'},
    {id: uuid(), text: 'item2'},
    {id: uuid(), text: 'item3'},
  ])

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <FlatList data={items} renderItem={({item}) => <ListItem item={item}/>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
