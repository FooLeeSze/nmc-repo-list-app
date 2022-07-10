import { call, put, takeLatest, select } from 'redux-saga/effects';
import { requestGetRepoList } from '../../api/getRepoList';
import { SEARCH_REPOS, fetchAllReposSuccess, fetchAllReposFailure, filterRepos } from '../actions/search'; 

const getFullRepoList = (state) => state.search.fullRepoList;

export function* searchReposSaga() {

    // Get full repo list from state
    let fullRepoList = yield select(getFullRepoList);

    // If full repo list is empty, fetch full repo list
    if (fullRepoList.length == 0) {
        try {
            const response = yield call(requestGetRepoList, -1);

            yield put (fetchAllReposSuccess(response));

        } catch (error) {
            yield put (fetchAllReposFailure(error.message))
        }
    }

    // Dispatch to filter repo based on keyword
    yield put(filterRepos())
}

// Watcher saga for FILTER_REPOS action type
export function* searchReposWatcherSaga() {
    yield takeLatest(SEARCH_REPOS, searchReposSaga);
}

