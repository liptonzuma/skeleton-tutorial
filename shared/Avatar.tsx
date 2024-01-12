import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Avatar() {
  return (
    <View style={styles.container}>
      <Text style={styles.initails}>RN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  initails: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  container: {
    backgroundColor: '#21eeff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
