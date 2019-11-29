import React from 'react';
import { Text } from 'react-native';

export default class ButterText extends React.Component {
    render() {
      return (
          <Text style={{fontSize: 16,
                        fontFamily: 'Avenir'}}>{this.props.children}</Text>
      );
    }
  }