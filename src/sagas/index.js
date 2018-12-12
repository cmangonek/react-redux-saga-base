import { fork } from "redux-saga/effects";
import landing from "./landing";

export default function* () {
  yield fork(landing);
}