import React from 'react';

const Control = ({wrongFlips, newEasyGame,newHardGame,gameFinished}) => {
	return (
		<div className="flex flex-row justify-center [border:2px_solid_#777] bg-[#f5f5f5]">
			<div className="w-[90vw] flex xs:flex-col md:flex-row justify-left  mt-2 pl-3">
				<div className="flex flex-row  basis-6/12  md:p-2 s">
					<span className=" flex flex-col justify-center text-[22px] ">wrong tests
					</span>
					<span className=" flex flex-col justify-center ml-2 font-bold  text-[20px]  pt-[4px] text-[#444] ">
						{wrongFlips}
					</span>
					{/* {gameFinished && 
					<span className=" flex flex-col justify-center text-[#229922] ml-2 md:ml-[20px] [border-bottom:2px_solid_#229922]"> 
						Game Complete 
					</span>} */}
				</div>

				<div className="flex md:flex-row xs:flex-col xs:justify-start md:justify-end pr-5 basis-6/12">
					<div className="flex flex-col ">
						<span 
							className="flex flex-row text-[#335599]  click text-[22px] md:p-2"
							onClick={()=>newEasyGame()}
						>
							new game(4x4)
						</span>
					</div>
					<div className="flex flex-col">
						<span 
							className="flex flex-row text-[#335599]  click text-[22px] md:p-2"
							onClick={()=>newHardGame()}
						>
							new game(6x6)
						</span>
					</div>

				</div>
				
			</div>
		</div>	
	);
}
export default Control
;
