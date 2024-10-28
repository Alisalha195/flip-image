import React from 'react';
import {useNavigate} from 'react-router-dom';

const Start = () => {
	const naviagte = useNavigate();
	return (
			<div className=" w-[100vw] h-[100vh] bg-gray-200">
				<div className="flex flex-col ">
					<div>
						<h2 className="flex flex-row justify-center text-[60px] font-[bold] text-[#333] pt-5">
							Flip Images
						</h2>
					</div>
					<div className="flex flex-row justify-center">
						<div className="w-[40%] text-left mt-[30px] text-[#222] text-[18px]">
							<p >click on card to view hidden image  </p>
							<p >each image is repeated twice  </p>
							<p >when you click on image it remains apeared waiting second image to click </p>
							<p>when all cards set to be viewd ,game is completed  </p>
						</div>
					</div>
					<div>
						<div className="flex flex-row justify-center pt-[60px]">
							<span className="text-white bg-[#268] [letter-spacing:1px] click [border:1px_solid_#444] px-3 py-0 text-[25px] rounded"
								onClick={()=>naviagte('/game')}
							>
								Start
							</span>
						</div>
					</div>
				</div>
				
			</div>	
	);
}
export default Start;
