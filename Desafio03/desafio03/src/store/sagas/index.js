import { all, takeLatest } from 'redux-saga/effects';
import { addInfoRequest } from './map';

export default function* rootSaga() {
  return yield all([
    takeLatest('ADD_INFO_REQUEST', addInfoRequest),
  ]);
}
