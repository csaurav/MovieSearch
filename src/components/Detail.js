import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  // ActivityIndicator,
  Animated,
} from 'react-native';
// import {Image} from 'react-native-elements';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';
import MovieInfo from './MovieInfo';

const width = Dimensions.get('window').width;
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {item: []};
  }

  componentDidMount() {
    console.log(`params: ${JSON.stringify(this.props.params)}`);
  }
  scale = new Animated.Value(1);

  onZoomEvent = Animated.event(
    [
      {
        nativeEvent: {scale: this.scale},
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  onZoomStateChange = (event) => {
    console.log(`onZoomEvent`);
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };
  render() {
    const {movieListParams} = this.props.params;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <MovieInfo
            style={styles}
            param1={movieListParams.Title}
            param2={movieListParams.Year}
          />
        </View>
        <View style={styles.subContainer}>
          <MovieInfo
            style={styles}
            param1={movieListParams.Rated}
            param2={movieListParams.Released}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <MovieInfo
              style={styles}
              param1={movieListParams.Title}
              param2={movieListParams.Year}
            />
          </View>
          <View style={styles.subContainer}>
            <PinchGestureHandler
              onGestureEvent={this.onZoomEvent}
              onHandlerStateChange={this.onZoomStateChange}>
              <Animated.Image
                source={{
                  uri: movieListParams.Poster,
                }}
                style={{
                  width: width,
                  height: 300,
                  transform: [{scale: this.scale}],
                }}
                resizeMode="contain"
              />
            </PinchGestureHandler>
          </View>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.genericText}>{movieListParams.Director}</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.genericText}>{movieListParams.Actors}</Text>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.genericText}>{movieListParams.Plot}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
  },

  movieTitleText: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  yearTitleText: {
    top: 5,
    padding: 5,
    fontSize: 12,
    fontWeight: 'normal',
    color: 'grey',
  },
  genericText: {
    // top: 5,
    padding: 5,
    fontSize: 13,
    fontWeight: 'normal',
    color: 'black',
  },
});

export default Detail;
