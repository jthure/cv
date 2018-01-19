import * as types from '../constants'

const initialState = {
  active: 'en',
}
function langReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ACTIVE_LANG:
      return { ...state, active: action.payload }
    default: return state
  }
}

export default langReducer
