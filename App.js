import React, {useState} from 'react';
import { View, FlatList, Alert,StyleSheet } from "react-native";
import { v4 as uuid } from "uuid";
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([])
  const deleteItem = id => {
    setItems( prevItems => prevItems.filter(item => item.id !== id) )
  }
  const addItem = text => {
    if(!text){
      Alert.alert('Missing item','You need at least one character in order to add an element to the list !', [{text: "Try again"}]);
    }else{
      setItems( prevItems => [{id: uuid(), text},...prevItems] )
    }

  }
  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem}/>
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
