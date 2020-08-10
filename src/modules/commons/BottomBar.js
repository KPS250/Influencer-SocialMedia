import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {bottomBarOptions} from '../../utils/Constants';
import {Colors} from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';

export default BottomBar = ({active, onPress}) => {
  return (
    <LinearGradient
      colors={['#FFFFFF00', '#FFFFFF90','#FFFFFF', '#FFFFFF']}
      style={styles.container}>
      {bottomBarOptions.map((item) => {
        return (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => onPress(item.type)}>
            <Image
              source={item.icon}
              style={[styles.icon, active !== item.type ? styles.inactive : {}]}
            />
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconContainer: {
    zIndex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-end',
  },
  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  inactive: {
    tintColor: Colors.silver,
  },
});
