import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { factoryReducer } from './factory'
//import { moneyBoxReducer } from './moneyBox'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  factory: factoryReducer
})
