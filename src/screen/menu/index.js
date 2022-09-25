import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import KategoryMenu from '../../components/kategory_Menu';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KategoryMenu
          text="Bottom Tabs 1"
          onPress={() => this.props.navigation.navigate('homescreen1')}
        />
        <KategoryMenu
          text="Bottom Tabs 2"
          onPress={() => this.props.navigation.navigate('homescreen2')}
        />
        <KategoryMenu
          text="Bottom Tabs 3"
          onPress={() => this.props.navigation.navigate('homescreen3')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
