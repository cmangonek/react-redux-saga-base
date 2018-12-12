import axios from "axios";
import { put, call } from "redux-saga/effects";
import { fetchExample } from "../../actions/landingActions";
import * as Types from "../../constants";

export default function* fetchDomains(action) {
  try {
    const data = yield call(axios, {
      method: "GET",
      url: `${Types.BASE_URL}/endpoint`,
      params: action.filter
    });

    yield put(fetchExample(data));
  } catch (e) {
    yield console.log('error: ', e.message);
  }
}
