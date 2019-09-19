import {createStore} from 'redux';

const initialState={
  hungerLevel: 50,
  lovedLevel: 50,
  tirednessLevel: 50
}

export const UPDATE_HUNGER_LEVEL = 'UPDATE_HUNGER_LEVEL';
export const UPDATE_LOVED_LEVEL = 'UPDATE_LOVED_LEVEL';
export const UPDATE_TIREDNESS_LEVEL = 'UPDATE_TIREDNESS_LEVEL';

function reducer(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case UPDATE_HUNGER_LEVEL:
      return {
        ...state,
        hungerLevel: payload
      };
    case UPDATE_LOVED_LEVEL:
      return {
        ...state,
        lovedLevel: payload
      };
    case UPDATE_TIREDNESS_LEVEL:
      return {
        ...state,
        tirednessLevel: payload
      };
    default: return state;
  }
}

export default createStore(reducer)