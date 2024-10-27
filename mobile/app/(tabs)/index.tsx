
//test
import React from 'react';
import { Image, 
  StyleSheet, 
  Platform ,
  Button, 
  TextInput,
  FlatList,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {useState} from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {getShuffledImages} from "@/constants/data";
import {createBoard} from "@/constants/data";
import Header from "@/components/game/header";
import GameBoard from "@/components/game/GameBoard";

export default function HomeScreen() {

  const [wrongFlips, setWrongFlips] = useState(0);
  const [shuffeledImages,setShuffeledImages] = useState(()=>getShuffledImages());
  const [imagesBoard, setImagesBoard] = useState(()=>createBoard());

  const newGame = () => {
    setShuffeledImages(()=>getShuffledImages());
    setWrongFlips(0); 
    setImagesBoard(()=>createBoard())
  }

  return (
    <View style={{backgroundColor:"#555", height:"100vh"}}>
      <Header wrongFlips={wrongFlips} newGame={newGame}/>
        <GameBoard 
          setWrongFlips={setWrongFlips} 
          shuffeledImages={shuffeledImages}
          setShuffeledImages={setShuffeledImages}
          imagesBoard={imagesBoard}
          setImagesBoard={setImagesBoard}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  boardContainer : {
    flex:4,
    width:10,
    alignItems: "center",
    backgroundColor: "#0f0",
    
  }
  
});
