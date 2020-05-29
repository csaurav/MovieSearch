import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const gradientHeader = (
  <LinearGradient
    colors={['#FF0099', '#493240']}
    style={{flex: 1}}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
  />
);

export default gradientHeader;
