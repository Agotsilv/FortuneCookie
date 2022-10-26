import React, {Component} from "react";
import {View, Text, StyleSheet,TouchableOpacity ,Image, Button, } from 'react-native'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      textoFrase: '', 
      img: require('./Img/biscoito.png')

    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.frases= [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'O nosso primeiro e último amor é… o amor-próprio.',
      'Deixe de lado as preocupações e seja feliz.',
      'Nós somos o que pensamos.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
      'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
      'A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.',
      'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.'
    ]
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
     textoFrase: '"' + this.frases[numeroAleatorio] + '"',
     img: require('./Img/biscoitoAberto.png')

    })
  }

  render(){
    return(
      <View style={styles.container}>
          <Image  
          style={styles.img} 
          source={this.state.img} />

          <Text style={styles.textoFrase}> {this.state.textoFrase} </Text>



          <TouchableOpacity  style={styles.BtnContainer} activeOpacity={0.5} onPress={this.quebraBiscoito}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}> Quebrar Biscoito</Text>
            </View>
          </TouchableOpacity>

          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  BtnContainer: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22', 
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

})

export default App;