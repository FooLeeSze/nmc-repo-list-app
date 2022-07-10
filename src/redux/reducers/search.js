import { SEARCH_REPOS, FETCH_ALL_REPOS_SUCCESS, FETCH_ALL_REPOS_FAILURE, FILTER_REPOS, CLEAR_SEARCH } from "../actions/search"; 

// Initial state
const initialState = {
    fullRepoList: [],
    isLoading: false,
    error: '',
    filteredList: [],
    keywords: ''
}

// Reducer
export default function searchReducer(state = initialState, action) {
    switch (action.type) {

        // Start search and fetch full repo list
        case SEARCH_REPOS: 
            return {
                ...state, 
                isLoading: true,
                keywords: action.payload
            }

        // If successful, store repo list
        case FETCH_ALL_REPOS_SUCCESS:

            return {
                ...state, 
                isLoading: false,
                fullRepoList: action.payload.data
            };

        // If failed, store error message
        case FETCH_ALL_REPOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        // Filter repo list based on keywords and store results
        case FILTER_REPOS:
            const keywords = state.keywords;

            let filteredList = state.fullRepoList.filter((repo) => (
                repo.name.toLowerCase().includes(keywords.toLowerCase())
            ))

            return {
                ...state,
                filteredList: filteredList
            }

        // Clear search
        case CLEAR_SEARCH:
            return {
                ...state,
                filteredList: [],
                keywords: ''
            }
        
        default:
            return state
    }
}