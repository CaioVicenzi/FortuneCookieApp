import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {

  const [fortune, setFortune] = useState("")
  const [estaAberto, setEstaAberto] = useState(false)

  function selecionarFortune () {
    setEstaAberto(true)
    let numeroRandomico = Math.floor(Math.random() * fortunes.length)
    let fortuneRandomico = fortunes[numeroRandomico]
    setFortune(fortuneRandomico)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fortune Cookie</Text>

      <Text style="fortuneText">{fortune}</Text>

      <View>
        <Pressable onPress={selecionarFortune}>
        <Image style={estaAberto ? styles.image2 : styles.image} 
        source={
          estaAberto
            ? require('./assets/biscoitoAberto.jpeg') 
            : require('./assets/biscoitoFechado.jpeg') 
          }
      ></Image>
        </Pressable>
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const fortunes = [
  "Você terá  uma boa notícia em breve", 
  "Seus dias de sorte chegaram",
  "O amor batera em sua porta em poucos dias", 
  "A sua felicidade está dentro de você não deixe os outros tomarem ela para si",
  "Cuide do seu coração antes de entregar ele para alguém",
  "A semana não será boa, mas o fim de semana será repleto de sorrisos",
  "Suas noites são frias, mas os sorrisos de felicidade esquentam seus dias",
  "O amor está perto talvez ele esteja dentro de você",
  "A felicidade está a um sorriso de distância", 
  "Seu sonho se tornara real só basta o tornar realidade",
  "Não tenha medo de falhar tenha medo de nunca tentar"
];



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'brown'
  },
  image: {
    width: 100,
    height: 100
  },
  image2: {
    width: 300,
    height: 200,
  },
  fortuneText: {
    width: '10%'
  }
});
