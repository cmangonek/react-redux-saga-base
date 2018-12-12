import { takeEvery } from 'redux-saga/effects';
import fetchExample from './fetchExample';
import * as Types from '../../constants';

export default function* requestLogo(){
  yield takeEvery(Types.LANDING_FETCH_EXAMPLE, fetchExample);
}