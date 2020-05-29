import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

class HomeScreen extends Component {
  render() {
    {
      console.log('im at homescreen.js');
    }
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Im HomeScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
  },
});

export default connect(null, null)(HomeScreen);
