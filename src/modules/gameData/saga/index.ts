import {takeLatest, call, put} from 'redux-saga/effects';
import {ApiInstance} from '../../../core/api';
import {fetchFail, fetchStart, fetchSuccess} from '../action';
import HomeApi from '../api/apiRest';

export default function HomeSaga(apiInstance: ApiInstance) {
  const homeApi = HomeApi(apiInstance);

  // A saga is a generator
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
  function* onFetchData() {
    let playerData = [];
    try {
      // Make an api rest request
      const {
        data: {data},
      } = yield call(homeApi.fetchPlayers);
      // Dispatch to redux store
      playerData = data.map(player => {
        player.InMyTeam = false;
        return player;
      });
      yield put(fetchSuccess({players: playerData}));
    } catch (e) {
      yield put(fetchFail());
    }
  }

  // Register all watchers (frop redux actions) here
  return function* watchers(): Generator {
    // we catch only latest action
    // we can use takeEvery to catch all action (by type) in the same time
    //
    // when fetch/fetchStart is dispatched, saga execute onFetchDemo
    yield takeLatest(fetchStart.type, onFetchData);
  };
}
