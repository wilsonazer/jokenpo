import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Topo from './components/Topo'
import Icone from './components/Icone'

const escolas_computador = ['pedra','papel','tesoura']

export default class App extends Component{
  constructor(props){
     super(props)
     this.state = { jogador:'', computador:'', resultdo:'' }
   }   

    jogar(jogador){
      //Computador obtem sua jogada
      const computador = escolas_computador[ Math.floor(Math.random() * escolas_computador.length ) ]
       
      //Verificando ganhador
      let resultado = ''

      switch(computador){
        case 'pedra':
            if(jogador === 'pedra'){
              resultado = 'empate'
              break

            }if( jogador === 'papel'){
              resultado = 'Você Ganhou'
              break

            }if(jogador === 'tesoura'){
              resultado = "Voce Perdeu"
              break

          }
          case 'papel':
              if(jogador === 'papel'){
                resultado = 'empate'
                break
              }if( jogador === 'tesoura'){
                resultado = 'Você Ganhou'
                break
              }if( jogador === 'pedra'){
                resultado = "Voce Perdeu"
                break
            }
          case 'tesoura':
              if(jogador === 'tesoura'){
                resultado = 'empate'
                break
              }if( jogador === 'pedra'){
                resultado = 'Você Ganhou'
                break
              }if( jogador === 'papel'){
                resultado = "Voce Perdeu"
                break
            }  
          default:{
               resultado = ''
        }

      }
      this.setState({jogador , computador, resultado})

    }    
  
   render(){
     return (
       <View style={styles.container}>

          <Topo />

          <View style={ styles.menu }>
             <View  style={ styles.botao }> 
               <Button title="pedra" onPress={()=>{ this.jogar("pedra")} }></Button>
             </View>
             <View  style={ styles.botao }> 
               <Button title="papel" onPress={()=>{ this.jogar("papel")} } ></Button>
             </View>
             <View  style={ styles.botao }> 
               <Button title="tesoura" onPress={()=> { this.jogar("tesoura")} }></Button>
             </View>
          </View>
 
          <View style={ styles.palco }> 
             <Text style={ styles.resultado}> { this.state.resultado }</Text>
             <Icone  jogador="Você" escolha={ this.state.jogador }/>
             <Icone jogador="computador" escolha={ this.state.computador } ></Icone>
          </View>
       </View>
     );
     
   }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,  
  },
  botao:{
    width: 90,
  },
  palco:{
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultado:{
    fontSize: 24,
    color: 'red',
  }
});
