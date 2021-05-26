import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Simple app By for project3',
  };
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isRefreshing: false,
      list: null,
    };
  }

  fetchData() {
    fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
      .then(response => response.json())
      .then(data => {
        this.setState({ list: data.results, isRefreshing: false });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { navigate } = this.props.navigation;
    if(this.state.list===null){

    return (
      <View>
         <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
    }else{

    return (
      <View style={styles.view}>
        <Text style={{ fontSize: 30 }}> Choose a User</Text>
        <View>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={() => this.fetchData()}
              />
            }
            data={this.state.list}
            renderItem={({ item }) => (
              <Text
                onPress={() => navigate('WeatherDay', { user: item })}
                style={styles.item}>
                {capitalizeFirstLetter(item.name.first)}{' '}
                {item.name.last.toUpperCase()}
              </Text>
            )}
          />
        </View>
      </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
