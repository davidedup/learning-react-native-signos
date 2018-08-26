import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import signos from './signos.json';

export default class DetalhesSigno extends React.Component {
    constructor(){
      super() 
      this.state = {
        signo: undefined 
      }
    }

  componentDidMount(){
    this.setState({
      signo: signos
        .filter((signo, key) => this.props.idSigno === key )
        .shift()

    })
  }

  render() {
    const{ idSigno } = this.props
    const{ signo } =  this.state

    if(!signo){
      return(
        <View/>
      )
    }


    return (
      <View style={styles.container}>
        
        <Text> DetalheSigno </Text>
        <Text> { signo.caracteristica } </Text>
        <Text> { signo.periodo.join(" até ") } </Text>
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
