import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import rootSaga from "./sagas/index";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
      reducers,
      compose(
          applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory)),
          process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
)

sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);
