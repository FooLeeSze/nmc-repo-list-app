import { combineReducers } from '@reduxjs/toolkit';
import repoReducer from './reducers/repoList';

// Root reducer
const rootReducer = combineReducers({
    repoList: repoReducer,
})

export default rootReducer;