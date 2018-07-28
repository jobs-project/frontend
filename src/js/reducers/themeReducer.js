'use strict'
let initialState = {
  type: 'light'
}

const themeReducer = (state=initialState, action) => {
  switch(action.type) {
  case 'CHANGE_THEME':
    state = {...state, type: action.payload};
    break;
  }
  return state;
}

export default themeReducer;
