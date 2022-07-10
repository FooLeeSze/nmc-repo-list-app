import { combineReducers } from '@reduxjs/toolkit';
import repoReducer from './reducers/repoList';
import searchReducer from './reducers/search';

// Root reducer
const rootReducer = combineReducers({
    repoList: repoReducer,
    search: searchReducer
})

export default rootReducer;