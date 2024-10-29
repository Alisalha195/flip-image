import React from 'react';

import { View, Text, StyleSheet, Image,Pressable } from 'react-native'

import {useState, useEffect} from 'react'
const ImageCard = ({level ,src, itemNumber,imagesBoard,setImagesBoard,compareSet, setCompareSet ,waiting ,showImageInBoard, setWaiting, allowPress, setAllowPress, index}) => {

  // console.log("imagesBoard : ",imagesBoard);

  const [showImage, setShowImage] = useState(showImageInBoard);
  // const [showImage, setShowImage] = useState(false);
  const [clickDenied,setClickDenied] = useState(false);
  // const [successfullyEqual, setSuccessfullyEqual] = useState(false);
  
  // compare two current clicked images 
  const handlePress = () => {

    console.log("waiting ",waiting)
    // we clicked at least one time
    if(waiting) {

      // first click occured so we are handling second click
      if((compareSet[0].item != '0') && (!compareSet[1].active)) {

        const updatedItem = {name:"second",item:itemNumber, active:true}
        setCompareSet( compareSet.map((compareItem) =>(compareItem.name=="second" ? updatedItem : compareItem)));

        // setShowImage(true);
        showImageAtIndex(index);
        setAllowPress(false);

        console.log("Second Click");


        // imagesBoard.map(item => {
        //   console.log()
        //   if (item.imgName = (itemNumber+'.jpg')) {
        //     setShowImage(item.done)
        //   }
        // });

      }  

    // we just clicked for the first time
    } else {

      // we hanlde first click
      if((compareSet[0].item == '0') && (!compareSet[0].active)) {

        // begin Timer (1500 ms) and wait
        startWaiting();
        // setClickDenied(true)
        const updatedItem = {name:"first",item:itemNumber, active:true}
        setCompareSet( compareSet.map((compareItem) =>(compareItem.name=="first" ? updatedItem : compareItem)));

        // setShowImage(true);
        showImageAtIndex(index);
        console.log("First Click")
        // console.log("compareSet",compareSet)
        // handleShowImage();
        
      } 
    }
    
  };

  const startWaiting = () => {
    setWaiting(true);
  }

  // const denyClicking = () => {
  //   console.log("clicking is Forbidden...");
  // }

  const showImageAtIndex = (index) =>{
    console.log("index :",index)
    const updatedItem = {imgName:(itemNumber+'.jpg'), done:false, show:true};
    console.log("updatedItem in showImageAtIndex ",updatedItem)
    setImagesBoard(imagesBoard.map((imgItem, itemIndex)=>(
      itemIndex == index ? updatedItem : imgItem 
    ) ));

    // console.log("imagesBoard in showImageAtIndex ",imagesBoard)
  }

  return (

    // <View>
    //   <Text>s</Text>
    // </View>
    // <View>
    <Pressable onPress={handlePress} disabled={showImageInBoard} >
      {/*<Image source={require("@/assets/gameImages/question.jpg")} style={styles.image} />*/}
      <View style={styles.container}>
        {showImageInBoard 
          ? <Image source={src} style={level=="easy"? styles.imageEasy :styles.imageHard} />
          : <Image source={require("@/assets/gameImages/question.jpg")} style={level=="easy"? styles.imageEasy :styles.imageHard} />
        }
      
      </View>
    </Pressable>
    // </View>
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
    // backgroundColor: "#000",
    // borderRadius:20,
  },
  imageEasy:{
    alignSelf: 'center',
    width:70,
    height:70,
    margin:2,
    borderRadius:9,
    // backgroundImage: url(src)
  },
  imageHard:{
    alignSelf: 'center',
    width:44,
    height:44,
    margin:2,
    borderRadius:9,
    // backgroundImage: url(src)
  },
});
export default ImageCard;





// imagesBoard.map(item => {
//   if (item.imgName = (itemNumber+'.jpg')) {
    
//       setShowImage(item.done)

//   } 
// });

