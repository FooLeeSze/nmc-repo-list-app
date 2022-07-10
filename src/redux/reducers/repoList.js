import { LOAD_REPO_LIST, LOAD_REPO_LIST_SUCCESS, LOAD_REPO_LIST_FAILURE, LOAD_REPO_LIST_END } from "../actions/repoList";

// Initial state
const initialState = {
    repoList: [],
    isLoading: false,
    isListEnd: false,
    error: ""
}

// Reducer
export default function repoReducer(state = initialState, action) {
    switch (action.type) {

        // Fetch data
        case LOAD_REPO_LIST:
            return {
                ...state,
                isLoading: true
            };

        // If fetch data success, append new repo list to existing list
        case LOAD_REPO_LIST_SUCCESS:
            const newRepoList = action.payload.data;
            const { repoList } = state;

            return {
                ...state,
                isLoading: false,
                repoList: [...repoList, ...newRepoList],    
            };

        // Repo list maximum page reached
        case LOAD_REPO_LIST_END:
            return {
                ...state,
                isLoading: false,
                isListEnd: true
            };

        // If fetch data failed, get error
        case LOAD_REPO_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}