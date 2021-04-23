import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  const imageUnsplash = 'https://source.unsplash.com/480x320/?face,portrait';

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Hello React Natives</Text>
      <Image style={styles.image} source={{uri: imageUnsplash}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeText: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
