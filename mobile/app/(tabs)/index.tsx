
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
import {getShuffledEasyImages, getShuffledHardImages, createEasyBoard, createHardBoard} from "@/constants/data";

import Header from "@/components/game/header";
import GameBoard from "@/components/game/GameBoard";

export default function HomeScreen() {

  const [level, setLevel] = useState("easy");
  const [wrongFlips, setWrongFlips] = useState(0);
  const [gameFinished , setGameFinished] = useState(false);
  const [shuffeledImages,setShuffeledImages] = useState(()=> level=="easy" ? getShuffledEasyImages() : getShuffledHardImages() );
  
  const [imagesBoard, setImagesBoard] = useState(()=> level=="easy" ? createEasyBoard() : createHardBoard());

  const newEasyGame = () => {
    setLevel("easy");
    setShuffeledImages(()=>getShuffledEasyImages());
    setWrongFlips(0); 
    setImagesBoard(()=>createEasyBoard())
    setGameFinished(false);
  }
  
  const newHardGame = () => {
    setLevel("hard");
    setShuffeledImages(() => getShuffledHardImages());
    setWrongFlips(0);
    setImagesBoard(() => createHardBoard())
    setGameFinished(false);
  }

  return (
    <View style={{backgroundColor:"#555", height:"100vh"}}>
      <Header wrongFlips={wrongFlips} newEasyGame={newEasyGame} newHardGame={newHardGame}/>
      <GameBoard 
        level={level}
        setWrongFlips={setWrongFlips} 
        shuffeledImages={shuffeledImages}
        setShuffeledImages={setShuffeledImages}
        imagesBoard={imagesBoard}
        setImagesBoard={setImagesBoard}
        gameFinished={gameFinished}
        setGameFinished={setGameFinished}
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
