import { PLACEROBOT, MOVEBYONE, LEFTDIRECTION, RIGHTDIRECTION, REPORTROBOT } from '../actions/types';


const INITIAL_STATE = {
  xCoordinate: -1,
  yCoordinate: -1,
  facing: ''

};

const NORTH = "north";
const SOUTH = "south";
const EAST = "east";
const WEST = "west";

const xMAX = 4;
const yMAX = 4;
const xMin = 0;
const yMin = 0;


const Commands = (state = INITIAL_STATE, action) => {
 
  switch (action.type) {
    case PLACEROBOT:
	  let fValid = false;
	  let { xCoordinate, yCoordinate, facing } = action.payload;
	  if(facing === NORTH || facing === SOUTH || facing === EAST || facing === WEST){
	    if( xCoordinate >= xMin && xCoordinate <= xMAX && yCoordinate >= yMin && yCoordinate <= yMAX) { 
	    	return Object.assign({}, state,
	    		{ 
	    			xCoordinate: xCoordinate,
	    			yCoordinate: yCoordinate,
	    			facing: facing 
	    		}
	    	);
	    }
	  } 
	  return state;
    
    case LEFTDIRECTION:
    {
      let previousDirection = state.facing;
      if(previousDirection === NORTH) {
      	return Object.assign({}, state,{ facing: WEST });
      } 
      if(previousDirection === SOUTH) {
      	return Object.assign({}, state,{ facing: EAST });
      }
      if(previousDirection === WEST) {
      	return Object.assign({}, state,{ facing: SOUTH });
      }
      if(previousDirection === EAST) {
      	return Object.assign({}, state,{ facing: NORTH });
      }
    }
    case RIGHTDIRECTION:
    {
      let previousDirection = state.facing;
      if(previousDirection === NORTH) {
      	return Object.assign({}, state,{ facing: EAST });
      } 
      if(previousDirection === SOUTH) {
      	return Object.assign({}, state,{ facing: WEST });
      }
      if(previousDirection === WEST) {
      	return Object.assign({}, state,{ facing: NORTH });
      }
      if(previousDirection === EAST) {
      	return Object.assign({}, state,{ facing: SOUTH });
      }
    }

    case MOVEBYONE: 
   	{
   		let { xCoordinate, yCoordinate, facing } = state;
   		if( facing === NORTH && yCoordinate == yMAX || facing === SOUTH && yCoordinate == yMin
   		 || facing === EAST && xCoordinate == xMAX || facing === WEST && xCoordinate == xMin){
   		  return state;
   		}
   		else{
   			switch(facing){
   				case NORTH: 
   					return Object.assign({}, state,{ yCoordinate: yCoordinate +1 });
   				case SOUTH: 
   					return Object.assign({}, state,{ yCoordinate: yCoordinate -1 });
   				case EAST: 
   					return Object.assign({}, state,{ xCoordinate: xCoordinate +1 });
   				case WEST: 
   					return Object.assign({}, state,{ xCoordinate: xCoordinate -1 });
   				default:
   				return state
   			}
   		}
   		
    }
    case REPORTROBOT:
    default:
      return state
  }
}

export default Commands