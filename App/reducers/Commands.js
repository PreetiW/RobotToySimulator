import { PLACEROBOT } from '../actions/types';


const INITIAL_STATE = {
  XCoordinate: -1,
  YCoordinate: -1,
  Facing: ''

};

const Commands = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case PLACEROBOT:
      return state

    default:
      return state
  }
}

export default Commands