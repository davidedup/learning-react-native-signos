import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signos from './signos.json';

export default class DetalhesSigno extends React.Component {
  constructor(){
      super()
      this.state = {
          signo: undefined
      }
  }

  componentDidMount(){
    const idSigno = parseInt(this.props.match.params.idSigno, 10)

    this.setState({
        signo: signos.filter((signo, key) => idSigno === key).shift()
    })
  }

  render() {
    const { idSigno } = this.props
    const { signo } = this.state

    if(!signo){
        return(
            <Text> Sem signo </Text>
        )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}> {signo.nome} </Text> 
        <Text style={styles.text}> {signo.caracteristica} </Text>
        <Text style={styles.date}> {signo.periodo.join(" até ")} </Text>
        <Button title="Voltar" onPress = {() =>  this.props.history.push('/') } />

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
    padding: 15
  },

  title: {
    fontSize: 30,
    marginBottom: 10
  },

  text: {
    fontSize: 15,
    marginBottom: 10
  },

  date: {
    fontSize: 12
  }

});
