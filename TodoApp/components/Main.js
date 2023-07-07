import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Main = () => (
  <View style={styles.mainContainer}>
    <View style={styles.contentContainer}>
      <Image source={require('../assets/ima.jpg')} style={styles.image} />
      <Text style={styles.mainText}>VDM Group</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80e4c6',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Main;
