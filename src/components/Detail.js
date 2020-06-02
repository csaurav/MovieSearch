import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {item: []};
  }

  componentDidMount() {
    console.log(`params: ${JSON.stringify(this.props.params)}`);
  }
  render() {
    return <View></View>;
  }
}

export default Detail;
