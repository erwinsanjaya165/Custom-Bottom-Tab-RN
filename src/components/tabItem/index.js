import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Warna_Sekunder, Warna_Utama} from '../../utils';
import {
  IconHome,
  IconHomeActive,
  IconCart,
  IconCartActive,
  IconUser,
  IconUserActive,
} from '../../assets';

const TabItem = ({label, isFocused, onLongPress, onPress}) => {
  const Icon = () => {
    if (label === 'HOME') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    } else if (label === 'CART') {
      return isFocused ? <IconCartActive /> : <IconCart />;
    } else if (label === 'AKUN') {
      return isFocused ? <IconUserActive /> : <IconUser />;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}>
      <Icon />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 7,
  },
  containerFocus: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 7,
    backgroundColor: Warna_Sekunder,
  },
  text: {
    color: Warna_Utama,
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 5,
  },
});
