import * as types from '../constants'

export function setActiveLang(lang) {
  return async (dispatch) => {
    dispatch({
      type: types.SET_ACTIVE_LANG,
      payload: lang,
    })
  }
}