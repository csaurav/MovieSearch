import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {movieActions} from '../actions/';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

class HomeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  componentDidMount() {
    this.props.fetchInitialMovieList();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(`im in componentDidUpdate`);
  //   if (prevProps.isLoading && this.props.isLoading) {
  //     this.setState({items: this.props.movieList});
  //   }
  // }

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
    console.log(`state value: ${JSON.stringify(movieList)}`);
    if (isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.movieTitleContainer}>
        <Text></Text>
        <Text style={styles.movieTitleText}>{movieList['Title']}</Text>
        {/* <FlatList
          keyExtractor={this.keyExtractor}
          data={movieList.Ratings}
          renderItem={this.renderItem}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.appReducer.movieList,
  isLoading: state.appReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchInitialMovieList: () => {
  //   console.log('hhh');
  //   dispatch({
  //     type: actionTypes.LOAD_HOME_SCREEN_REQUEST,
  //     payload: null,
  //   });
  // },
  fetchInitialMovieList: () => {
    dispatch(movieActions.requestInitialMovieList());
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  movieTitleContainer: {
    padding: 10,
  },

  movieTitleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeListItem);
