import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Warna_Utama} from '../../utils';

export default class KategoryMenu extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.bottom_Menu} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  bottom_Menu: {
    borderWidth: 2,
    borderColor: Warna_Utama,
    paddingHorizontal: '20%',
    paddingVertical: 5,
    borderRadius: 7,
    margin: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: Warna_Utama,
  },
});
