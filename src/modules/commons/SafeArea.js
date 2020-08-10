import React, {Component, Fragment} from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import {Colors} from '../../utils/Colors';

export default class SafeArea extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar
          backgroundColor={this.props.statusBarColor || Colors.white}
          barStyle={this.props.barStyle || 'dark-content'}
        />
        <SafeAreaView style={styles.safeAreaTop} />
        <SafeAreaView style={styles.safeAreaBottom}>
          <View style={styles.container}>{this.props.children}</View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: Colors.white,
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
