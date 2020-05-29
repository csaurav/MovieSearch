import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './src/store';

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
