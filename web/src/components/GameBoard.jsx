import { useState, useEffect } from 'react';
import ImageCard from './ImageCard'

import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"
import image5 from "../assets/images/5.jpg"
import image6 from "../assets/images/6.jpg"
import image7 from "../assets/images/7.jpg"
import image8 from "../assets/images/8.jpg"

import image01 from "../assets/images/01.jpg"
import image02 from "../assets/images/02.jpg"
import image03 from "../assets/images/03.jpg"
import image04 from "../assets/images/04.jpg"
import image05 from "../assets/images/05.jpg"
import image06 from "../assets/images/06.jpg"
import image07 from "../assets/images/07.jpg"
import image08 from "../assets/images/08.jpg"
import image09 from "../assets/images/09.jpg"
import image10 from "../assets/images/10.jpg"
import image11 from "../assets/images/11.jpg"
import image12 from "../assets/images/12.jpg"
import image13 from "../assets/images/13.jpg"
import image14 from "../assets/images/14.jpg"
import image15 from "../assets/images/15.jpg"
import image16 from "../assets/images/16.jpg"
import image17 from "../assets/images/17.jpg"
import image18 from "../assets/images/18.jpg"

const GameBoard = ({ level, setWrongFlips, shuffeledImages, setShuffeledImages, imagesBoard, setImagesBoard, gameFinished, setGameFinished }) => {

   const initialCompareSet = [
      { name: "first", item: '0', active: false },
      { name: "second", item: '99', active: false }
   ];

   const [compareSet, setCompareSet] = useState(initialCompareSet);
   const [allowPress, setAllowPress] = useState(true)
   const [waiting, setWaiting] = useState(false)

   // compare cards
   useEffect(() => {
      compare(compareSet[0].item, compareSet[1].item)
      testGameComplete();
   }, [compareSet[0].active, compareSet[1].active]);

   // Game Finished
   useEffect(() => {
      if (gameFinished) {
         console.log("Game Finished");
      }
   }, [gameFinished]);

   // ======================================================
   const easyImagesSources = [
      image1, image2, image3, image4, image5, image6, image7, image8
   ];
   const hardImagesSources = [
      image01, image02, image03, image04, image5, image06, image07, image08, image09, image10, image11, image12, image13, image14, image15, image16, image17, image18
   ];

   const testGameComplete = () => {
      let finished = true;
      imagesBoard.map(item => {
         if (!item.done)
            finished = false;
      });
      setGameFinished(finished);
   }

   const compare = (firstItem, secondItem) => {
      if ((firstItem != "0") && (secondItem != "99")) {

         const firstImgName = firstItem + '.jpg';
         const secondImgName = secondItem + '.jpg';

         if (firstItem == secondItem) {
            const updatedBoardItem = { imgName: firstImgName, done: true, show: true };
            setImagesBoard(imagesBoard.map((boardItem) => (boardItem.imgName == firstImgName ? updatedBoardItem : boardItem)));
            reset();
         } else {
            setWrongFlips(prev => prev + 1);
            const updatedBoardFirstItem = { imgName: firstImgName, done: false, show: false };
            const updatedBoardSecondItem = { imgName: secondImgName, done: false, show: false };
            setTimeout(() => {
               setImagesBoard(imagesBoard.map((boardItem) => (boardItem.imgName == firstImgName
                  ? updatedBoardFirstItem
                  : boardItem.imgName == secondImgName
                     ? updatedBoardSecondItem
                     : boardItem
               )));
            }, 700);
            reset();
         }
      }
   }

   const reset = () => {
      setTimeout(() => {
         setWaiting(false);
         setCompareSet(initialCompareSet);
      }, 1000);

      setTimeout(() => {
         setAllowPress(true)
      }, 2000)

   }

   const getImageBoardShowItem = (index) => {
      return imagesBoard[index].show
   }

   return (
      <div className="p-5 xs:[border:2px] flex justify-center">
         <div className={level == "easy" ? "grid grid-cols-4 xs:gap-2 md:gap-6" : "grid grid-cols-6 xs:gap-2 md:gap-3"}>
            {
               shuffeledImages.map((item, index) => (
                  <ImageCard
                     level={level}
                     key={index}
                     src={level == "easy" ? easyImagesSources[item.substring(0, 1) - 1] : hardImagesSources[item.substring(0, 2) - 1]}
                     itemNumber={level == "easy" ? item.substring(0, 1) : item.substring(0, 2)}
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
               ))
            }

         </div>

      </div>
   );
}
export default GameBoard;
