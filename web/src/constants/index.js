
import {shuffle} from "../lib/actions" ;

export const images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];

let finalShuffledImages = new Array();

export const getShuffledImages = () => {
	let shuffledImages = new Array();
	const shuffledBase = shuffle(images);
	const shuffledCopy = shuffle(images);
	// const shuffeledImagesToUse = [...shuffledBase , ...shuffledCopy];
	shuffledImages = [...shuffledBase , ...shuffledCopy];
	finalShuffledImages = shuffle(shuffledImages);
	// const shuffeledImagesObjectToUse = [shuffeledImagesToUse.map((item,index)=> ({id:index , name:item}))]
	return finalShuffledImages;
}

export const createBoard = () => {
  let board = new Array();
  finalShuffledImages.map((item,index)=> {
    board.push({imgName:item, done:false, show:false})
  });
  return board;
}
