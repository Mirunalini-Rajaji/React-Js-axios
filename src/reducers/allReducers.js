import allProductsReducer from "./allProducts"
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    allProducts:allProductsReducer
})

export default allReducers