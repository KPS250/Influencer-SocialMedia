import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../../utils/Colors';
import {Fonts} from '../../../utils/Fonts';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.carrotOrange,
  },
  postsContainer: {},
  screenTitle: {
    fontSize: 26,
    fontFamily: Fonts.semiBold,
    marginTop: 24,
    marginBottom: 30,
  },
  listSeparator: {
    height: 16,
  },
  listFooter: {
    height: 120,
  },
  itemSeparator: {
    height: 15,
  },
  headBottom: {
    height: 30,
  },
  card: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {height: 0.5, width: 0},
      },
    }),
  },
  cardList: {
    backgroundColor: Colors.athensGray,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {height: -0.5, width: 0},
      },
    }),
  },
});
