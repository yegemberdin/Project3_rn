import React from 'react';
import { Text, View } from 'react-native';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class WeatherDay extends React.Component {
  render() {
    const user = this.props.navigation.state.params.user;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>
          Name : {capitalizeFirstLetter(user.name.first)}
           {' '}{user.name.last.toUpperCase()}
        </Text>
      </View>
    );
  }
}
