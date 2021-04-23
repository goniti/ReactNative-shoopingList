import React, {useState} from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import { v4 as uuid } from "uuid";
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'item1'},
    {id: uuid(), text: 'item2'},
    {id: uuid(), text: 'item3'},
  ])
  const deleteItem = id => {
    setItems( prevItems => prevItems.filter(item => item.id !== id) )
  }

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <AddItem/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
