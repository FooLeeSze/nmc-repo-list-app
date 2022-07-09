// Action types
export const LOAD_REPO_LIST = "LOAD_REPO_LIST"
export const LOAD_REPO_LIST_SUCCESS = "LOAD_REPO_LIST_SUCCESS"
export const LOAD_REPO_LIST_END = "LOAD_REPO_LIST_END"
export const LOAD_REPO_LIST_FAILURE = "LOAD_REPO_LIST_FAILURE"

// Action creators
export const loadRepoList = (payload) => {
    return { type: LOAD_REPO_LIST, payload }
}

export const loadRepoListSuccess = (payload) => {
    return { type: LOAD_REPO_LIST_SUCCESS, payload }
}

export const loadRepoListEnd = (payload) => {
    return { type: LOAD_REPO_LIST_END, payload }
}

export const loadRepoListFailure = (payload) => {
    return { type: LOAD_REPO_LIST_FAILURE, payload }
}