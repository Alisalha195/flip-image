import React from 'react';

const Control = ({wrongFlips, newEasyGame,newHardGame,gameFinished}) => {
	return (
		<div className="flex flex-row justify-center ">
			<div className="w-[90vw] flex xs:flex-col md:flex-row justify-left  mt-5 pl-3">
				<div className="flex flex-row  basis-6/12  md:p-2">
					<span className=" flex flex-col justify-center text-[20px] ">wrong tests
					</span>
					<span className=" flex flex-col justify-center ml-2  text-[20px] font-[bold] pt-[4px]">
						{wrongFlips}
					</span>
					{gameFinished && 
					<span className=" flex flex-col justify-center text-[#229922] ml-2 md:ml-[20px] [border-bottom:2px_solid_#229922]"> 
						Game Complete 
					</span>}
				</div>

				<div className="flex flex-row xs:justify-start md:justify-end pr-5 basis-6/12">
					<div className="flex flex-col ">
						<span 
							className="flex flex-row text-[#335599]  click text-[22px] md:p-2"
							onClick={()=>newEasyGame()}
						>
							new game(easy)
						</span>
					</div>
					<div className="flex flex-col">
						<span 
							className="flex flex-row text-[#335599]  click text-[22px] md:p-2"
							onClick={()=>newHardGame()}
						>
							new game(hard)
						</span>
					</div>

				</div>
				
			</div>
		</div>	
	);
}
export default Control
;
