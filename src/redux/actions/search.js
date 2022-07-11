// Action types
export const SEARCH_REPOS = 'SEARCH_REPOS';
export const FETCH_ALL_REPOS_SUCCESS = 'FETCH_ALL_REPOS_SUCCESS';
export const FETCH_ALL_REPOS_FAILURE = 'FETCH_ALL_FAILURE';
export const FILTER_REPOS = 'FILTER_REPOS';
export const LOAD_MORE_SEARCHES = 'LOAD_MORE_SEARCHES';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

// Action creators
export const searchRepos = (payload) => {
    return { type: SEARCH_REPOS, payload }
}

export const fetchAllReposSuccess = (payload) => {
    return { type: FETCH_ALL_REPOS_SUCCESS, payload }
}

export const fetchAllReposFailure = (payload) => {
    return { type: FETCH_ALL_REPOS_FAILURE, payload }
}

export const filterRepos = () => {
    return { type: FILTER_REPOS }
}

export const loadMoreSearches = () => {
    return { type: LOAD_MORE_SEARCHES }
}

export const clearSearch = () => {
    return { type: CLEAR_SEARCH }
}
