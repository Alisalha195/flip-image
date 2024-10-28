import React from 'react';

import {useState, useEffect} from 'react';
import { View, Text, StyleSheet,FlatList, ScrollView } from 'react-native';

// import ParallaxScrollView from '@/components/ParallaxScrollView';

import img1 from "@/assets/gameImages/1.jpg"
import img2 from "@/assets/gameImages/2.jpg"
import img3 from "@/assets/gameImages/3.jpg"
import img4 from "@/assets/gameImages/4.jpg"
import img5 from "@/assets/gameImages/5.jpg"
import img6 from "@/assets/gameImages/6.jpg"
import img7 from "@/assets/gameImages/7.jpg"
import img8 from "@/assets/gameImages/8.jpg"

import {getShuffledImages} from "@/constants/data"
import {createBoard} from "@/constants/data"

import ImageCard from "@/components/game/ImageCard";

const GameBoard = ({setWrongFlips, shuffeledImages, setShuffeledImages, imagesBoard, setImagesBoard}) => {

  const initialCompareSet = [
    {name:"first",item:'0',active:false},{name:"second",item:'99',active:false}  
  ];
  
  
  const [compareSet ,setCompareSet] = useState(initialCompareSet);
  const [allowPress, setAllowPress] = useState(true)
  
  const [waiting, setWaiting] = useState(false)
  const [gameFinished , setGameFinished] = useState(false);

  // const [openSuccessImage,setOpenSuccessImage] = useState()

  // compare cards
  useEffect(()=> {  
    // console.log("COMPARING.......")
    compare(compareSet[0].item,compareSet[1].item)
    testGameComplete();
    // console.log("BOARD",imagesBoard)
  },[compareSet[0].active , compareSet[1].active ])
  
  // Game Finished
  useEffect(()=> {
    if(gameFinished) {
      console.log("Game Finished");
    }
  },[gameFinished]);
// ======================================================
  // const imagesSources = [
  //   require("@/assets/gameImages/1.jpg"),
  //   require("@/assets/gameImages/2.jpg"),
  //   require("@/assets/gameImages/3.jpg"),
  //   require("@/assets/gameImages/4.jpg"),
  //   require("@/assets/gameImages/5.jpg"),
  //   require("@/assets/gameImages/6.jpg"),
  //   require("@/assets/gameImages/7.jpg"),
  //   require("@/assets/gameImages/8.jpg"),
  // ];

  const imagesSources = [
  	img1, img2, img3 , img4, img5, img6 , img7, img8
  ];


  const testGameComplete = () => {
    // console.log("imagesBoard in testing finished ",imagesBoard)
    let finished = true;
    imagesBoard.map(item => {
      if (!item.done) {
        finished = false;
        // break;
      }  
    });
      // console.log("FINISHED!!!!",finished);
    setGameFinished(finished);
  }

  const compare = (firstItem, secondItem) => {
    if((firstItem != "0") &&(secondItem != "99") ) {

      const firstImgName = firstItem + '.jpg';
    const secondImgName = secondItem + '.jpg';

      if(firstItem == secondItem) {
        
        console.log("BOTH ARE EQUAL");
         
        const updatedBoardItem = {imgName:firstImgName, done:true,show:true};
        // console.log("updatedBoardItem",updatedBoardItem)

        setImagesBoard(imagesBoard.map((boardItem)=>(boardItem.imgName == firstImgName ? updatedBoardItem : boardItem)));
        
        reset();

      } else {
        setWrongFlips(prev => prev + 1);
        const updatedBoardFirstItem = {imgName:firstImgName, done:false, show:false};
        // console.log("updatedBoardFirstItem",updatedBoardFirstItem)

        const updatedBoardSecondItem = {imgName:secondImgName, done:false,show:false};

        setTimeout(()=> {

          setImagesBoard(imagesBoard.map((boardItem)=>(boardItem.imgName == firstImgName 
              ? updatedBoardFirstItem 
              : boardItem.imgName == secondImgName 
                  ? updatedBoardSecondItem 
                  : boardItem

          )));
        },1000);

        reset();


      }
    }
  }

  const reset = () => {
    setTimeout(()=> {
      setWaiting(false);
      setCompareSet(initialCompareSet);
    },1000);

    setTimeout(()=>{
      setAllowPress(true)
    },2000)

  }

  const getImageBoardShowItem = (index) => {
    return imagesBoard[index].show
    // imagesBoard.map((item)=>{
    //   if(item.imgName == imgName) 
    //     return item.show;
    // })
  } 
// =============================================================
  return (
    <View style={styles.boardContainer}>
      
      <FlatList 
        horizontal={false}  
        numColumns={4}
        contentContainerStyle={styles.grid}
        // data={imagesBoard}
         keyExtractor={(item, index) => index}
        data={shuffeledImages}
        
        renderItem={({item,index}) => <ImageCard  
                            src={imagesSources[item.substring(0,1)-1]}
                            itemNumber={item.substring(0,1)}
                            imagesBoard={imagesBoard}
                            setImagesBoard={setImagesBoard}
                            showImageInBoard={getImageBoardShowItem(index)}
                            index={index}
                            compareSet={compareSet}
                            setCompareSet={setCompareSet}
                            
                            waiting={waiting}
                            setWaiting={setWaiting}
                            
                            allowPress={allowPress}
                            setAllowPress={setAllowPress}
                            />
         
        // renderItem={(item) => <Text style={{color:"#444"}}>item</Text>
        }
      />
      <View>
        <Text style={styles.completeText}>
          {gameFinished && "Game Complete"}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  boardContainer : {
  	width:"100%",
  	height:"100vh",
    // flex:1,
    justifyContent: "space-arround",
    backgroundColor: "#00bbaa",
    padding:20
  },
  grid: {
  	// flex:4,
  	padding:10,
  },
  completeText: {
    color:"#448866",
    fontSize:19,
    paddingTop:9,
    textAlign:"center",
    fontWeight:"bold"

  }
  
});
export default GameBoard;
