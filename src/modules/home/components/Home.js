import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  FlatList,
  Keyboard,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

import SafeArea from '../../commons/SafeArea';
import PostCard from '../../commons/PostCard';
import {homeStyles} from '../styles/homeStyles';
import {posts, todos} from '../mockData/data';
import {Strings} from '../../../utils/Strings';
import ActivityCard from '../../commons/ActivityCard';
import AddPost from '../../commons/AddPost';
import BottomBar from '../../commons/BottomBar';
import {bottomBarConstants} from '../../../utils/Constants';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomBarSelection: bottomBarConstants.posts,
      keyboardOpen: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    let {bottomBarSelection, keyboardOpen} = this.state;
    return (
      <SafeArea>
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <PostCard
              profileImg={item.profile_image}
              image={item.image_url}
              username={item.username}
              timestamp={item.timestamp}
              caption={item.caption}
              views={item.views}
              likes={item.likes}
              comments={item.comments}
              onPress={() => {}}
            />
          )}
          contentContainerStyle={homeStyles.postsContainer}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={() => (
            <View style={homeStyles.listSeparator} />
          )}
          ListFooterComponent={() => <View style={homeStyles.listFooter} />}
        />
        {!keyboardOpen && (
          <BottomBar active={bottomBarSelection} onPress={() => {}} />
        )}
      </SafeArea>
    );
  }

  renderHeaders = () => {
    return (
      <Fragment>
        <View style={homeStyles.card}>
          <Text style={homeStyles.screenTitle}>{Strings.activity}</Text>
          <View>
            {todos.map((item) => {
              return (
                <ActivityCard
                  background={item.background_image}
                  color={item.color}
                  label={item.label}
                  total={item.total}
                  pending={item.pending}
                />
              );
            })}
          </View>
        </View>
        <AddPost />
      </Fragment>
    );
  };

  renderHeader = () => {
    return (
      <Fragment>
        <View style={homeStyles.card}>
          <FlatList
            numColumns={2}
            data={todos}
            renderItem={({item, index}) => (
              <ActivityCard
                background={item.background_image}
                color={item.color}
                label={item.label}
                total={item.total}
                pending={item.pending}
                index={index}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={homeStyles.itemSeparator} />
            )}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => (
              <Text style={homeStyles.screenTitle}>{Strings.activity}</Text>
            )}
            ListFooterComponent={() => <View style={homeStyles.headBottom} />}
          />
        </View>
        <AddPost />
        <View style={homeStyles.cardList} />
        <View style={homeStyles.headBottom} />
      </Fragment>
    );
  };

  keyboardDidShow = () => {
    this.setState({keyboardOpen: true});
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  keyboardDidHide = () => {
    this.setState({keyboardOpen: false});
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
}
