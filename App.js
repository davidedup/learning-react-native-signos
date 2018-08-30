import React from 'react';
import { StyleSheet, View } from 'react-native';
import DetalhesSigno from './DetalhesSigno';
import ListaSigno from './ListaSigno';
import  { NativeRouter as Router, Switch, Route } from 'react-router-native';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <View style= {styles.container}>
          <Switch>
            <Route path='/:idSigno' component={DetalhesSigno} />
            <Route component={ListaSigno} />
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
