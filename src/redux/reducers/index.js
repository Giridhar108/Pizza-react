import { combineReducers } from 'redux'

import filters from './filters'
import pizzas from './pizzas'
import cart from './cart'


const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
})

/* import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'


const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,

  }) */

export default rootReducer;