import {useState} from 'react';
import Control from "../components/Control";
import GameBoard from "../components/GameBoard";
import {getShuffledEasyImages,getShuffledHardImages, createEasyBoard, createHardBoard} from "../constants/index"

import Confetti from 'react-confetti'


const Game = () => {

	const [level, setLevel] = useState("easy");
	const [wrongFlips, setWrongFlips] = useState(0);

	const [shuffeledImages,setShuffeledImages] = useState(()=> level=="easy" ? getShuffledEasyImages() : getShuffledHardImages() );

	const [imagesBoard, setImagesBoard] = useState(()=> level=="easy" ? createEasyBoard() : createHardBoard());

	const [gameFinished , setGameFinished] = useState(false);

	const newEasyGame = () => {
		setLevel("easy");
		setShuffeledImages(()=>getShuffledEasyImages());
		setWrongFlips(0); 
		setImagesBoard(()=>createEasyBoard())
		setGameFinished(false);
	}

	const newHardGame = () => {
		setLevel("hard");
		setShuffeledImages(() => getShuffledHardImages());
		setWrongFlips(0);
		setImagesBoard(() => createHardBoard());
		setGameFinished(false);
	}

	return (
		<div className="flex xs:flex-col ">
         {
            gameFinished && <Confetti 
                              gravity={0.3}
                              /> 
         }
			<Control 
				wrongFlips={wrongFlips}
				newEasyGame={newEasyGame}
				newHardGame={newHardGame}
				gameFinished={gameFinished}
			/>
			<GameBoard 
				level={level}
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
