import { StyleSheet, Text, View, ViewProps } from 'react-native';
import React from 'react';

export default function Row(props: ViewProps) {
  const { style, ...rest } = props;
  return <View style={[styles.row, style]} {...rest} />;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
