import {
  PLACEROBOT, MOVEBYONE, LEFTDIRECTION, RIGHTDIRECTION, REPORTROBOT
} from './types';

export const placeRobot = (payload) => {
	return{
		type: PLACEROBOT,
		payload: payload
	};
}

export const moveByOne = () => {
	return{
		type: MOVEBYONE
	};
}

export const leftDirection = () => {
	return{
		type: LEFTDIRECTION
	};
}

export const rightDirection = () => {
	return{
		type: RIGHTDIRECTION
	};
}

export const reportRobot = () => {
	return{
		type: REPORTROBOT
	};
}