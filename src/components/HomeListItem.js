import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import {ListItem, Image, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {movieActions} from '../actions/';
import MovieInfo from './MovieInfo';

const width = Dimensions.get('screen').width;
class HomeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  componentDidMount() {
    this.props.fetchInitialMovieList();
  }
  keyExtractor = (item, index) => {
    if (item != undefined) {
      index.toString();
    }
  };

  renderItem = (item) => {
    return <ListItem title={item.item['Source']} />;
  };

  render() {
    const {movieList, isLoading} = this.props;

    if (isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <MovieInfo
            style={styles}
            param1={movieList.Title}
            param2={movieList.Year}
          />
        </View>
        <View style={styles.subContainer}>
          <MovieInfo
            style={styles}
            param1={movieList.Rated}
            param2={movieList.Released}
          />
        </View>
        <View>
          <Image
            source={{uri: movieList.Poster}}
            style={{width: width, height: 500}}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View style={(styles.subContainer, {alignItems: 'center'})}>
          <Button
            containerStyle={styles.buttonContainerStyle}
            title="Details"
            type="outline"
            onPress={() =>
              this.props.navigation.navigate('Detail', {
                movieListParams: movieList,
              })
            }
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.appReducer.movieList,
  isLoading: state.appReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialMovieList: () => {
    dispatch(movieActions.requestInitialMovieList());
  },
});

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
    fontSize: 12,
    fontWeight: 'normal',
    color: 'grey',
  },

  buttonContainerStyle: {
    paddingTop: 10,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeListItem);
