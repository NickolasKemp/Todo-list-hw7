import React from "react";
import { BsCheck} from "react-icons/bs";

const Check = ({isCompleted}) => {
	return (
		<div className={`border-2 text-white rounded-lg border-blue-400 ${ isCompleted ? 'bg-blue-400' : ''} w-7 h-7 `}>
			{ isCompleted &&
				<BsCheck size={24} text-gray-900 />
			}
		</div>
	)
}

export default Check