import {all, spawn} from 'redux-saga/effects';
import HomeSaga from '../../modules/gameData/saga';
import {apiRest} from '../api';

const config = {
  apiBase: 'https://reqres.in/api',
};
export const mainApi = apiRest(config.apiBase);

// Root saga
function* sagas(): Generator {
  yield all([
    // List all sagas
    spawn(HomeSaga(mainApi)),
  ]);
}

export default sagas;
