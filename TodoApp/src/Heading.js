import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Heading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icone.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#c9e41a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 20,
    marginLeft: 20
  },
  image: {
    width: 60,
    height: 60,
    alignContent: 'center'
  }
});

export default Heading;
