import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import AppNavigator from './AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
