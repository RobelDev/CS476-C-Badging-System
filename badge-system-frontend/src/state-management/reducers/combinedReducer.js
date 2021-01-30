import isLoggedReducer from './isLoggedReducer';
import kudosReducer from './kudosReducer';
import badgeReducer from './badgeReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: isLoggedReducer,
    kudosModifier: kudosReducer,
    badgeModifier: badgeReducer
});

export default allReducers;