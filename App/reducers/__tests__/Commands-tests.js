import reducer from '../Commands'
import * as types from '../../actions/types'

describe('Commands reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
         xCoordinate: -1,
         yCoordinate: -1,
         facing: ''
      }
    )
  })
 
})

describe('Commands reducer', () => {

  let state = {
    xCoordinate: 0,
    yCoordinate: 0,
    facing: 'north'
  };

  let expectedState = {
    xCoordinate: 0,
    yCoordinate: 1,
    facing: 'north'
  };

  it('should Move 1 in North Direction', () => {
    expect(reducer(state, {
      type: types.MOVEBYONE
    })).toEqual(expectedState)
  })
 
})


describe('Commands reducer', () => {

  let state = {
    xCoordinate: 0,
    yCoordinate: 0,
    facing: 'north'
  };

  let expectedState = {
    xCoordinate: 0,
    yCoordinate: 0,
    facing: 'west'
  };

  it('should face 90 degree left from North', () => {
    expect(reducer(state, {
      type: types.LEFTDIRECTION
    })).toEqual(expectedState)
  })
 
})


describe('Commands reducer', () => {

  let state = {
    xCoordinate: 3,
    yCoordinate: 4,
    facing: 'east'
  };

  let expectedState = {
    xCoordinate: 3,
    yCoordinate: 4,
    facing: 'south'
  };

  it('should face 90 degree right from east', () => {
    expect(reducer(state, {
      type: types.RIGHTDIRECTION
    })).toEqual(expectedState)
  })
 
})


describe('Commands reducer', () => {

  let state = {
    xCoordinate: 3,
    yCoordinate: 3,
    facing: 'east'
  };

  let expectedState = {
    xCoordinate: 3,
    yCoordinate: 3,
    facing: 'east'
  };

  it('should report the current state of Robot', () => {
    expect(reducer(state, {
      type: types.REPORTROBOT
    })).toEqual(expectedState)
  })
 
})


describe('Commands reducer', () => {

  let state = {
    xCoordinate: 4,
    yCoordinate: 4,
    facing: 'east'
  };

  let expectedState = {
    xCoordinate: 4,
    yCoordinate: 4,
    facing: 'east'
  };

  it('Should not fall if robot is on the edge', () => {
    expect(reducer(state, {
      type: types.MOVEBYONE
    })).toEqual(expectedState)
  })
 
})

describe('Commands reducer', () => {

  let state = {
    xCoordinate: 4,
    yCoordinate: 0,
    facing: 'east'
  };

  let expectedState = {
    xCoordinate: 4,
    yCoordinate: 0,
    facing: 'east'
  };

  it('Should not fall if robot is on the edge', () => {
    expect(reducer(state, {
      type: types.MOVEBYONE
    })).toEqual(expectedState)
  })
 
})

describe('Commands reducer', () => {

  let state = {
    xCoordinate: 0,
    yCoordinate: 4,
    facing: 'west'
  };

  let expectedState = {
    xCoordinate: 0,
    yCoordinate: 4,
    facing: 'west'
  };

  it('Should not fall if robot is on the edge', () => {
    expect(reducer(state, {
      type: types.MOVEBYONE
    })).toEqual(expectedState)
  })
 
})

describe('Commands reducer', () => {

  let state = {
    xCoordinate: 2,
    yCoordinate: 1,
    facing: 'east'
  };

  let expectedState = {
    xCoordinate: 3,
    yCoordinate: 1,
    facing: 'east'
  };

  it('should Move 1 in East Direction', () => {
    expect(reducer(state, {
      type: types.MOVEBYONE
    })).toEqual(expectedState)
  })
 
})