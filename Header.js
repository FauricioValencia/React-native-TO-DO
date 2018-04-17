import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      // tareas: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
