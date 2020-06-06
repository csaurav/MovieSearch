import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import {Input, Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {movieActions} from '../actions/';
import MovieInfo from './MovieInfo';

const width = Dimensions.get('window').width;
class HomeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {searchValue: []};
  }
  componentDidMount() {
    // this.props.fetchInitialMovieList();
  }
  // keyExtractor = (item, index) => {
  //   if (item != undefined) {
  //     index.toString();
  //   }
  // };

  showMovieDetails = () => {
    const {movieList} = this.props;
    if (movieList.Response === 'False') {
      return (
        <View style={styles.container}>
          <View
            style={
              (styles.subContainer, {alignItems: 'center', paddingTop: 20})
            }>
            <Text style={styles.genericText}>{movieList.Error}</Text>
          </View>
        </View>
      );
    }
    if (Object.keys(movieList).length > 0) {
      return (
        <View>
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
              style={{width: width, height: 300}}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View
            style={
              (styles.subContainer, {alignItems: 'center', paddingBottom: 20})
            }>
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
  };
  render() {
    const {isLoading} = this.props;

    if (isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.container}>
        <Input
          placeholder="Search movie with Title"
          onChangeText={(value) => this.setState({searchValue: value})}
        />
        <Button
          style={styles.buttonContainerStyle}
          title="Search"
          onPress={() => this.props.searchMovie(this.state.searchValue)}
        />
        <Divider style={{top: 10, bottom: 10}} />
        {this.showMovieDetails()}
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

  searchMovie: (value) => {
    dispatch(movieActions.searchMovie(value));
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
    alignItems: 'center',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeListItem);
