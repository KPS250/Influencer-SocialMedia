import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {Icons} from '../../utils/Icons';
import {postAttachments} from '../../utils/Constants';
import {Strings} from '../../utils/Strings';
import {Fonts} from '../../utils/Fonts';

export default AddPost = ({profileImage, caption, onChangeCaption}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.profileImage}
          defaultSource={Icons.avatar}
          source={Icons.avatar}
        />
        <TextInput
          placeholder={Strings.createNewPost}
          value={caption}
          style={styles.caption}
          //onChangeText={(caption) => onChangeCaption(caption)}
          editable
          multiline
          maxLength={300}
        />
      </View>
      <View style={styles.hr} />
      <View style={styles.bottomContainer}>
        {postAttachments.map((item) => {
          return (
            <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
              <Image style={styles.icon} source={item.icon} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.athensGray,
  },
  topContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 20,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  hr: {
    height: 1,
    backgroundColor: Colors.silver,
    marginHorizontal: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  iconContainer: {
    paddingTop: 16,
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  caption: {
    flex: 1,
    marginLeft: 20,
    fontSize: 18,
    fontFamily: Fonts.regular,
    color: Colors.black50,
  },
});
