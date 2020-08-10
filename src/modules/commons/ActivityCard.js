import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {Strings} from '../../utils/Strings';
import {Fonts} from '../../utils/Fonts';

export default ActivityCard = ({
  background,
  color,
  label,
  total,
  pending,
  index,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        index % 2 !== 0 ? {marginLeft: 6} : {marginRight: 6},
      ]}>
      <ImageBackground
        style={[styles.container]}
        imageStyle={styles.image}
        source={background}>
        <View style={[styles.pendingContainer, {backgroundColor: color}]}>
          <Text style={styles.pending}>{Strings.pending}</Text>
          <Text style={styles.pendingCount}>{` ${pending}`}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.total}>{total}</Text>
          <Text style={styles.label}>{label}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
  },
  pendingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black50,
    paddingTop: 3,
    paddingBottom: 2,
    paddingHorizontal: 8,
    borderRadius: 15,
    position: 'absolute',
    right: 10,
    top: 8,
  },
  pending: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
  pendingCount: {
    fontSize: 14,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 8,
    left: 10,
  },
  total: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: Colors.white,
  },
  label: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.white,
  },
});
