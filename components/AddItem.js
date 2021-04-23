import React from 'react';
import PropTypes from 'prop-types';
import {View, Text,TouchableOpacity,TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Octicons'

const AddItem = () => (
  <View>
    <TextInput placeholder={"What will you buy ?"} style={styles.textInput}/>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
        <Icon name={"plus"} size={20}/>
        {" "}Add to list
      </Text>
    </TouchableOpacity>

  </View>
);

AddItem.propTypes = {

};

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
