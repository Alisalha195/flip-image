import React from 'react';

import { View, Text, StyleSheet, Image,Pressable } from 'react-native'

import {useState, useEffect} from 'react'
const ImageCard = ({level ,src, itemNumber,imagesBoard,setImagesBoard,compareSet, setCompareSet ,waiting ,showImageInBoard, setWaiting, allowPress, setAllowPress, index}) => {

  const [showImage, setShowImage] = useState(showImageInBoard);
  const [clickDenied,setClickDenied] = useState(false);
  
  // compare two current clicked images 
  const handlePress = () => {

    // we clicked at least one time
    if(waiting) {

      // first click occured so we are handling second click
      if((compareSet[0].item != '0') && (!compareSet[1].active)) {

        const updatedItem = {name:"second",item:itemNumber, active:true}
        setCompareSet( compareSet.map((compareItem) =>(compareItem.name=="second" ? updatedItem : compareItem)));

        showImageAtIndex(index);
        setAllowPress(false);

        // console.log("Second Click");

      }  

    // we just clicked for the first time
    } else {

      // we hanlde first click
      if((compareSet[0].item == '0') && (!compareSet[0].active)) {

        // begin Timer (1500 ms) and wait
        startWaiting();
        const updatedItem = {name:"first",item:itemNumber, active:true}
        setCompareSet( compareSet.map((compareItem) =>(compareItem.name=="first" ? updatedItem : compareItem)));

        showImageAtIndex(index);
        // console.log("First Click")        
      } 
    }
    
  };

  const startWaiting = () => {
    setWaiting(true);
  }

  const showImageAtIndex = (index) =>{
    const updatedItem = {imgName:(itemNumber+'.jpg'), done:false, show:true};
    setImagesBoard(imagesBoard.map((imgItem, itemIndex)=>(
      itemIndex == index ? updatedItem : imgItem 
    ) ));
  }

  return (

    <Pressable onPress={handlePress} disabled={showImageInBoard} >
      <View style={styles.container}>
        {showImageInBoard 
          ? <Image source={src} style={level=="easy"? styles.imageEasy :styles.imageHard} />
          : <Image source={require("@/assets/gameImages/question.jpg")} style={level=="easy"? styles.imageEasy :styles.imageHard} />
        }
      
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: "space-arround",
    width:"100%" ,
    height:"100vh " ,
    // padding:20,
    marginHorizontal:1,
    borderRadius:9,
  },
  imageEasy:{
    alignSelf: 'center',
    width:70,
    height:70,
    margin:2,
    borderRadius:9,
  },
  imageHard:{
    alignSelf: 'center',
    width:44,
    height:44,
    margin:2,
    borderRadius:9,
  },
});
export default ImageCard;

