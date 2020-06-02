import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import {HomeListItem} from '../components/';
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeListItem navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
