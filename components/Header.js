import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {uuid} from 'uuidv4';

const Header = ({title}) => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'item1'},
    {id: uuid(), text: 'item2'},
    {id: uuid(), text: 'item3'},
    {id: uuid(), text: 'item4'},
  ]);
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
