import {
  GET_MONEY_REQUEST,
  GET_MONEY_SUCCESS,
  GET_MONEY_FAIL,
  POST_MONEY_REQUEST,
  DELETE_COIN_REQUEST,
  POST_ARM_REQUEST,
  POST_ARM_FAIL,
  POST_LEG_REQUEST,
  POST_LEG_FAIL,
  POST_BODY_REQUEST,
  POST_BODY_FAIL,
  DELETE_ARM_REQUEST,
  DELETE_LEG_REQUEST,
  DELETE_BODY_REQUEST,
  TOGGLE_GENDER,
  TOGGLE_COLOR,
  TOGGLE_BAR1,
  TOGGLE_BAR2,
  TOGGLE_BAR3,
  TOGGLE_BAR4,
  TOGGLE_BAR5,
  CREATE_MAN,
  CREATE_MAN_FAIL
} from '../actions/FactoryActions'

const initialState = {
  moneyCount: 19,
  error: '',
  isFetching: false,
  arm: 3,
  leg: 4,
  body: 0,
  gender: true,
  color: true,
  human: 0,
  bar_1: false,
  bar_2: true,
  bar_3: false,
  bar_4: false,
  bar_5: false
}

export function factoryReducer(state = initialState, action) {
  switch (action.type) {

    case GET_MONEY_REQUEST:
      return { ...state, moneyCount: action.payload, isFetching: false, error: '' } //  isFetching: true

    case GET_MONEY_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false, name: action.payload }

    case GET_MONEY_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    case POST_MONEY_REQUEST:
      return { ...state, moneyCount: action.payload, isFetching: false, error: '' } 

    case DELETE_COIN_REQUEST:
      return { ...state, moneyCount: action.payload, isFetching: false, error: '' } 

    case POST_ARM_REQUEST:
      return { ...state, arm: action.payload, isFetching: false, error: '' } 

    case POST_ARM_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    case POST_LEG_REQUEST:
      return { ...state, leg: action.payload, isFetching: false, error: '' } 

    case POST_LEG_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    case POST_BODY_REQUEST:
      return { ...state, body: action.payload, isFetching: false, error: '' } 

    case POST_BODY_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    case DELETE_ARM_REQUEST:
      return { ...state, isFetching: false, error: action.payload.message, arm: action.payload }

    case DELETE_LEG_REQUEST:
      return { ...state, isFetching: false, error: action.payload.message, leg: action.payload }

    case DELETE_BODY_REQUEST:
      return { ...state, isFetching: false, error: action.payload.message, body: action.payload }

    case TOGGLE_GENDER:
      return { ...state, gender: action.payload }

    case TOGGLE_COLOR:
      return { ...state, color: action.payload }

    case TOGGLE_BAR1:
      return { ...state, bar_1: action.payload }

    case TOGGLE_BAR2:
      return { ...state, bar_2: action.payload }

    case TOGGLE_BAR3:
      return { ...state, bar_3: action.payload }

    case TOGGLE_BAR4:
      return { ...state, bar_4: action.payload }

    case TOGGLE_BAR5:
      return { ...state, bar_5: action.payload }

    case CREATE_MAN:
      return { ...state, human: action.payload, isFetching: false, error: '' }

    case CREATE_MAN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message}

    default:
      return state
  }
}
