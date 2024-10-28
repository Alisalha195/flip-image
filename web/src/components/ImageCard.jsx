import {useState} from 'react';
import q_mark from "../assets/images/question.jpg"

const ImageCard = ({level ,src,itemNumber,imagesBoard,setImagesBoard,showImageInBoard,index, compareSet,setCompareSet,waiting,setWaiting,allowPress,setAllowPress}) => {

	// console.log('index' , index);
	console.log('itemNumber' , itemNumber);
	// console.log('src' , src);


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
		  if((compareSet[0].item == '0') && (!compareSet[0].active)  ) {
		    // begin Timer (1500 ms) and wait
		    setWaiting(true);
		    const updatedItem = {name:"first",item:itemNumber, active:true}
		    setCompareSet( compareSet.map((compareItem) =>(compareItem.name=="first" ? updatedItem : compareItem)));
		    showImageAtIndex(index);
		    // console.log("First Click") 
		  } 
		} 
	};

	const showImageAtIndex = (index) =>{
		const updatedItem = {imgName:(itemNumber+'.jpg'), done:false, show:true};
		// console.log("updatedItem in showImageAtIndex ",updatedItem)
		setImagesBoard(imagesBoard.map((imgItem, itemIndex)=>(
		(itemIndex === index && !imgItem?.clicked ) ? updatedItem : imgItem  
		) ));
	}

	return (
			<button className="click [max-height:100vh]  "
				onClick={handlePress}
				disabled={showImageInBoard}
			>
				<div className={level=="easy" ?"bg-red-300 [border-radius:9%] w-[90px] h-[90px] [overflow:hidden] [border:1px_solid_#ccc]" :
				"bg-red-300 [border-radius:9%] w-[80px] h-[80px] [overflow:hidden] [border:1px_solid_#ccc]"}>
					
					{   showImageInBoard 
						?   <img  
								src={src}
								className="w-[100%] h-[100%]" 
							/>
						:   <img  
								src={q_mark}
								className="w-[100%] h-[100%]" 
							/>
					}
				</div>
			</button>
	);
}
export default ImageCard;
