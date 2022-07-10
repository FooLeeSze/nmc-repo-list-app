import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { requestGetRepoList } from '../../api/getRepoList';
import { LOAD_REPO_LIST, loadRepoListSuccess, loadRepoListEnd, loadRepoListFailure } from '../actions/repoList';

export function* loadRepoListSaga(action) {
    
    // Get repo list page number to fetch
    const { payload } = action;

    try {
        // Fetch repo list
        const response = yield call(requestGetRepoList, payload);
        yield delay(1000);

        if (response.data.length > 0) {
            // If API call returns data, success
            yield put (loadRepoListSuccess(response));
        } else {
            // If API call returns no data, list ended
            yield put (loadRepoListEnd(response))
        }
        
    } catch (error) {
        // Log errors
        yield put (loadRepoListFailure(error.message));
    }
}

// Watcher saga for LOAD_REPO_LIST action type
export function* repoListWatcherSaga() {
    yield takeLatest(LOAD_REPO_LIST, loadRepoListSaga);
}