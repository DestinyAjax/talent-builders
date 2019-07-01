import { all } from "redux-saga/effects";
// import authSaga from "./authSaga";
// import storageSaga from "./storageSaga";
// import invitesSaga from "./invitesSaga";
// import propertySaga from "./propertySaga";
// import utilsSaga from "./utilsSaga";
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        // storageSaga(),
        // authSaga(),
    ]);
}
