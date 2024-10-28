import {useState, useEffect} from 'react';
import ImageCard from './ImageCard'

import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"
import image5 from "../assets/images/5.jpg"
import image6 from "../assets/images/6.jpg"
import image7 from "../assets/images/7.jpg"
import image8 from "../assets/images/8.jpg"

const GameBoard = ({setWrongFlips,shuffeledImages,setShuffeledImages,imagesBoard,setImagesBoard,gameFinished,setGameFinished}) => {

	const initialCompareSet = [
		{name:"first",item:'0',active:false},
		{name:"second",item:'99',active:false}  
	];

	const [compareSet ,setCompareSet] = useState(initialCompareSet);
	const [allowPress, setAllowPress] = useState(true)
	const [waiting, setWaiting] = useState(false)
	
	// compare cards
	useEffect(()=> {  
		compare(compareSet[0].item, compareSet[1].item)
		testGameComplete();
	},[compareSet[0].active , compareSet[1].active ]);

	// Game Finished
	useEffect(()=> {
		if(gameFinished) {
		  console.log("Game Finished");
		}
	},[gameFinished]);

	// ======================================================
	const imagesSources = [
		image1, image2, image3, image4, image5, image6, image7, image8
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
		if((firstItem != "0") &&(secondItem != "99") ) {

		  const firstImgName = firstItem + '.jpg';
		  const secondImgName = secondItem + '.jpg';

		  if(firstItem == secondItem) {  
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
		    },700);
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
		<div className="p-5 xs:[border:2px] flex justify-center">
			<div className="grid grid-cols-4 xs:gap-2 md:gap-6">
			{
				shuffeledImages.map((item,index)=>(
					<ImageCard 
					    key={index} 
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
				))
			}
					
			</div>
			
		</div>	
	);
}
export default GameBoard;
