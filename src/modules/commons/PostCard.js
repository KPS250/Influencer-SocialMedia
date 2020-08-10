import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Icons} from '../../utils/Icons';
import {Colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import {Strings} from '../../utils/Strings';
import {clipText} from '../../utils/Utils';

export default PostCard = ({
  profileImg,
  image,
  username,
  timestamp,
  caption,
  views,
  likes,
  comments,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.row, styles.header]}>
        <Image style={styles.profileImage} source={profileImg} />
        <View style={styles.innerHeader}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
      </View>

      <Image style={styles.image} source={{uri: image}} />
      <View>
        <Text style={styles.caption}>
          {caption.length > 220 ? clipText(caption, 220) : caption}
          {caption.length > 220 && (
            <Text style={styles.continueReading}>
              {Strings.continueReading}
            </Text>
          )}
        </Text>
      </View>

      <View style={styles.hr} />
      <View style={[styles.row, styles.apart]}>
        <View style={[styles.row, styles.box]}>
          <Image source={Icons.heart} style={[styles.icon, styles.like]} />
          <Text style={[styles.count, styles.likeCount]}>{likes}</Text>
          <Image source={Icons.comment} style={styles.icon} />
          <Text style={styles.count}>{comments}</Text>
        </View>
        <View style={[styles.row]}>
          <Image source={Icons.eye} style={styles.icon} />
          <Text style={styles.count}>{` ${Strings.views} (${views})`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.athensGray,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  hr: {
    height: 1,
    backgroundColor: Colors.athensGray,
    marginHorizontal: 16,
  },
  header: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  innerHeader: {
    marginLeft: 16,
  },
  profileImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  username: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.blue,
  },
  timestamp: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.silver,
  },
  image: {
    width: '100%',
    height: 240,
  },
  apart: {
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: Colors.silver,
  },
  caption: {
    fontFamily: Fonts.regular,
    color: Colors.mineShaft,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
  },
  box: {
    marginHorizontal: 16,
    alignItems: 'center',
  },
  count: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.silver,
    marginLeft: 7,
    marginRight: 8,
  },
  like: {
    tintColor: Colors.red,
  },
  likeCount: {
    color: Colors.red,
  },
  continueReading: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    fontFamily: Fonts.regular,
    color: Colors.red,
  },
});
