import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import {HomeListItem} from '../components/';
class HomeScreen extends Component {
  render() {
    {
      console.log('im at homescreen.js');
    }
    return (
      <View style={styles.container}>
        <HomeListItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
  },
});

export default HomeScreen;
// export default connect(null, null)(HomeScreen);
