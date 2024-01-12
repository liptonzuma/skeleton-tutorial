import { View, ViewProps } from 'react-native';
import React from 'react';

export default function Column(props: ViewProps) {
  const { style, ...rest } = props;
  return <View style={[style]} {...rest} />;
}
