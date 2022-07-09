import { all } from 'redux-saga/effects'
import { repoListWatcherSaga } from './sagas/repoList'

// Root saga
export default function* rootSaga() {
    yield all([
        repoListWatcherSaga(),
    ])
}