import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/dist/Octicons'

const ListItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <Icon name="x" size={24} color="firebrick" />
        </View>
      </TouchableOpacity>
    );
};

ListItem.propTypes = {
  item: PropTypes.string
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18
  }
})

export default ListItem;