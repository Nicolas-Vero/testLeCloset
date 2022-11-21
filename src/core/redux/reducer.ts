import {combineReducers} from 'redux';
import homeReducer from '../../modules/gameData/reducers';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
