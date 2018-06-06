import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';
import { addInfoSuccess, addInfoError } from 'store/actions/map';

export function* addInfoRequest(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.user}`);
    const coordinate = yield select(state => state.map.markers);

    const result = {
      response: response.data,
      coordinate,
    };

    if (result.response.status === 404) {
      console.tron.log('404');
    }

    yield put(addInfoSuccess(result));
  } catch (error) {
    yield put(addInfoError('Usuário não encontrado'));
  }
}
