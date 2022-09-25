import {View, StyleSheet} from 'react-native';
import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

export default function Bottom3(props) {
  return (
    <View>
      <View style={styles.container}></View>
      <BottomTabBar {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 17,
    backgroundColor: 'white',
  },
});
