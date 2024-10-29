import {shuffle} from "@/lib/actions" ;

export const easyLevelImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];


export const hardLevelImages = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg', '17.jpg','18.jpg'];

let shuffledEasyImages = new Array();
let finalEasyShuffledImages = new Array();

let shuffledHardImages = new Array();
let finalHardShuffledImages = new Array();


export const getShuffledEasyImages = () => {
	const shuffledBase = shuffle(easyLevelImages);
	const shuffledCopy = shuffle(easyLevelImages);
	
	shuffledEasyImages = [...shuffledBase , ...shuffledCopy];
	finalEasyShuffledImages = shuffle(shuffledEasyImages);
	// const shuffeledImagesObjectToUse = [shuffeledImagesToUse.map((item,index)=> ({id:index , name:item}))]
	return finalEasyShuffledImages;
}

export const getShuffledHardImages = () => {
  const shuffledBase = shuffle(hardLevelImages);
  const shuffledCopy = shuffle(hardLevelImages);
  
  shuffledHardImages = [...shuffledBase, ...shuffledCopy];
  finalHardShuffledImages = shuffle(shuffledHardImages);
  // const shuffeledImagesObjectToUse = [shuffeledImagesToUse.map((item,index)=> ({id:index , name:item}))]
  return finalHardShuffledImages;
}

export const createEasyBoard = () => {
    let board = new Array();
    finalEasyShuffledImages.map((item)=> {
      board.push({imgName:item, done:false, show:false})
    });
    console.log("board",board);
    return board;
}

export const createHardBoard = () => {
  let board = new Array();
  finalHardShuffledImages.map((item) => {
    board.push({ imgName: item, done: false, show: false })
  });
  console.log("board", board);
  return board;
}
