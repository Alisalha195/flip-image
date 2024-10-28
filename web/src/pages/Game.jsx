import {useState} from 'react';
import Control from "../components/Control";
import GameBoard from "../components/GameBoard";
import {getShuffledImages, createBoard} from "../constants/index"

const Game = () => {

	const [wrongFlips, setWrongFlips] = useState(0);
	const [shuffeledImages,setShuffeledImages] = useState(()=>getShuffledImages());
	const [imagesBoard, setImagesBoard] = useState(()=>createBoard());
	const [gameFinished , setGameFinished] = useState(false);

	const newGame = () => {
		setGameFinished(false);
	    setShuffeledImages(()=>getShuffledImages());
	    setWrongFlips(0); 
	    setImagesBoard(()=>createBoard())

	  }

	return (
		<div className="flex xs:flex-col">
			<Control 
				wrongFlips={wrongFlips}
				newGame={newGame}
				gameFinished={gameFinished}
			/>
			<GameBoard 
				setWrongFlips={setWrongFlips} 
				shuffeledImages={shuffeledImages}
				setShuffeledImages={setShuffeledImages}
				imagesBoard={imagesBoard}
				setImagesBoard={setImagesBoard}
				gameFinished={gameFinished}
				setGameFinished={setGameFinished}
			/>	
		</div>	
	);
}
export default Game;
