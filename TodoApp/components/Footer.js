import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>Betta Development</Text>
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#428bc7',
    padding: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Footer;
