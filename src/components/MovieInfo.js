import React from 'react';
import {View, Text} from 'react-native';

// function MovieInfo(props) {
const MovieInfo = (props) => {
  return (
    <View style={props.style.subContainer}>
      <Text style={props.style.movieTitleText}>{props.param1}</Text>
      <Text style={props.style.yearTitleText}>{props.param2}</Text>
    </View>
  );
};

export default MovieInfo;
