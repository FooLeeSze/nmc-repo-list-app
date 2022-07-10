import { all } from 'redux-saga/effects'
import { repoListWatcherSaga } from './sagas/repoList'
import { searchReposWatcherSaga } from './sagas/search'

// Root saga
export default function* rootSaga() {
    yield all([
        repoListWatcherSaga(),
        searchReposWatcherSaga(),
    ])
}