import { combineReducers } from 'redux';

import {default as items} from './bucket';
import {default as category} from './filter';

const reducer = combineReducers({
    items,
    category
})

export default reducer;
