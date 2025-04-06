import React from 'react';

import {useState, useEffect} from 'react';
import { View, Text, StyleSheet,FlatList, ScrollView } from 'react-native';

import ConfettiCannon from 'react-native-confetti-cannon';
import img1 from "@/assets/gameImages/1.jpg"
import img2 from "@/assets/gameImages/2.jpg"
import img3 from "@/assets/gameImages/3.jpg"
import img4 from "@/assets/gameImages/4.jpg"
import img5 from "@/assets/gameImages/5.jpg"
import img6 from "@/assets/gameImages/6.jpg"
import img7 from "@/assets/gameImages/7.jpg"
import img8 from "@/assets/gameImages/8.jpg"

import img01 from "@/assets/gameImages/01.jpg"
import img02 from "@/assets/gameImages/02.jpg"
import img03 from "@/assets/gameImages/03.jpg"
import img04 from "@/assets/gameImages/04.jpg"
import img05 from "@/assets/gameImages/05.jpg"
import img06 from "@/assets/gameImages/06.jpg"
import img07 from "@/assets/gameImages/07.jpg"
import img08 from "@/assets/gameImages/08.jpg"
import img09 from "@/assets/gameImages/09.jpg"
import img10 from "@/assets/gameImages/10.jpg"
import img11 from "@/assets/gameImages/11.jpg"
import img12 from "@/assets/gameImages/12.jpg"
import img13 from "@/assets/gameImages/13.jpg"
import img14 from "@/assets/gameImages/14.jpg"
import img15 from "@/assets/gameImages/15.jpg"
import img16 from "@/assets/gameImages/16.jpg"
import img17 from "@/assets/gameImages/17.jpg"
import img18 from "@/assets/gameImages/18.jpg"




import {getShuffledEasyImages, 
        getShuffledHardImages,
        createEasyBoard,
        createHardBoard
} from "@/constants/data"


import ImageCard from "@/components/game/ImageCard";

const GameBoard = ({level, setWrongFlips, shuffeledImages, setShuffeledImages, imagesBoard, setImagesBoard,gameFinished,setGameFinished}) => {

  const initialCompareSet = [
    {name:"first",item:'0',active:false},{name:"second",item:'99',active:false}  
  ];
  
  const [compareSet ,setCompareSet] = useState(initialCompareSet);
  const [allowPress, setAllowPress] = useState(true)
  
  const [waiting, setWaiting] = useState(false)

  // compare cards
  useEffect(()=> {  
    // console.log("COMPARING.......")
    compare(compareSet[0].item,compareSet[1].item)
    testGameComplete();
  },[compareSet[0].active , compareSet[1].active ])
  
  // Game Finished
  useEffect(()=> {
    if(gameFinished) {
      console.log("Game Finished");
    }
  },[gameFinished]);

  const easyImagesSources = [
  	img1, img2, img3 , img4, img5, img6 , img7, img8
  ];

  const hardImagesSources = [
    img01, img02, img03 , img04, img05, img06 , img07, img08,img09, img10, img11 , img12, img13 ,img14 , img15, img16,img17, img18
  ];


  const testGameComplete = () => {
    let finished = true;
    imagesBoard.map(item => {
      if (!item.done) {
        finished = false;
      }  
    });
    setGameFinished(finished);
  }

  const compare = (firstItem, secondItem) => {
    if((firstItem != "0") &&(secondItem != "99") ) {

      const firstImgName = firstItem + '.jpg';
    const secondImgName = secondItem + '.jpg';

      if(firstItem == secondItem) {
        
        // console.log("BOTH ARE EQUAL");
         
        const updatedBoardItem = {imgName:firstImgName, done:true,show:true};

        setImagesBoard(imagesBoard.map((boardItem)=>(boardItem.imgName == firstImgName ? updatedBoardItem : boardItem)));
        
        reset();

      } else {
        setWrongFlips(prev => prev + 1);
        const updatedBoardFirstItem = {imgName:firstImgName, done:false, show:false};

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
  } 

  return (
   <View style={{height:"100%"}}>
    <View style={[styles.boardContainer, {backgroundColor: level=='easy'?"#00aaff":"#00aa55", paddingTop:"30%" , flex:1}]}>
      {level=="easy" 
        ? <FlatList
        key={"_"}
        data={shuffeledImages}
        horizontal={false}  
        numColumns={4 }
        contentContainerStyle={styles.grid}
        keyExtractor={(item, index) => index}
        renderItem={({item,index}) => <ImageCard  
                            level={level}
                            src={easyImagesSources[item.substring(0,1)-1]}
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
         
        }
      />
        : <FlatList
        key={"#"} 
        data={shuffeledImages}
        horizontal={false}  
        numColumns={6 }
        contentContainerStyle={styles.grid}
        keyExtractor={(item, index) => index}
        renderItem={({item,index}) => <ImageCard  
                            level={level}
                            src={hardImagesSources[item.substring(0,2)-1]}
                            itemNumber={item.substring(0,2)}
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
         
        }
      />
      }
      

      
      <View>
        {/* <Text style={styles.completeText}>
          {gameFinished && "Game Complete"}
        </Text> */}
        {gameFinished && <ConfettiCannon count={400} origin={{x: -10, y: 0}} />}
      </View>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boardContainer : {
  	width:"100%",
  	height:"100vh",
    
    justifyContent: 'flex-end',
    
    padding:20,
  },
  grid: {
  	padding:10,
   alignSelf:"center",
   
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
