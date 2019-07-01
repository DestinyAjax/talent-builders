import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import indexReducer from "./reducers/index";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default function(data) {
    const finalCreateStore =
        process.env.NODE_ENV === "development"
            ? applyMiddleware(sagaMiddleware, logger)(createStore)
            : applyMiddleware(sagaMiddleware)(createStore);
    const store = finalCreateStore(indexReducer, data);
    sagaMiddleware.run(rootSaga);

    return store;
}
