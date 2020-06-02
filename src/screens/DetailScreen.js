import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Detail from '../components/Detail';
class DetailScreen extends Component {
  render() {
    console.log('sss');
    return (
      <View style={styles.container}>
        <Detail
          navigation={this.props.navigation}
          params={this.props.route.params}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailScreen;
