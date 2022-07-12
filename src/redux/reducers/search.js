import { SEARCH_REPOS, FETCH_ALL_REPOS_SUCCESS, FETCH_ALL_REPOS_FAILURE, FILTER_REPOS, LOAD_MORE_SEARCHES, CLEAR_SEARCH } from "../actions/search"; 
import { splitArray } from '../../helpers/helpers'

// Initial state
const initialState = {
    fullRepoList: [],
    isLoading: false,
    error: '',
    filteredList: [],
    currentList: [],
    currentPage: 0,
    isListEnd: false,
    keywords: ''
}

// Reducer
export default function searchReducer(state = initialState, action) {
    switch (action.type) {

        // Start search and fetch full repo list
        case SEARCH_REPOS: 
            return {
                ...initialState, 
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

            let paginatedList = [];

            // Paginate list (chunk size of 7)
            if (filteredList.length>0) {
                paginatedList.push(...splitArray(filteredList, 7))
            }

            return {
                ...state,
                filteredList: paginatedList,
                isLoading: false,
            }

        // Update search results list based on page number
        case LOAD_MORE_SEARCHES:

            // Append next page items to list
            const newList = [...state.currentList];
            let isEnd = false;

            const nextPage = state.currentPage + 1;

            // If found results, append the results to list
            if (state.filteredList.length > 0) {
                newList.push(...state.filteredList[state.currentPage]);

                // Check if list has ended (at last page)
                if (nextPage == state.filteredList.length) {
                    isEnd = !isEnd;
                }
            } else {
                isEnd = !isEnd;
            }

            return {
                ...state,
                currentList: [...newList],
                isLoading: false,
                isListEnd: isEnd,
                currentPage: nextPage
            }

        // Clear search
        case CLEAR_SEARCH:
            return {
                ...state,
                filteredList: [],
                keywords: '',
                isLoading: false,
            }
        
        default:
            return state
    }
}