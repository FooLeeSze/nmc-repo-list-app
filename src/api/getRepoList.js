import axios from "axios";

// API url and access token
const API_URL = 'https://api.github.com/users/react-native-community/repos';
const GITHUB_TOKEN = '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';

// Request parameters
const options = {
    method: 'get',
    url: API_URL,
    headers: {
        'content-type': 'application/vnd.github+json',
        'Authorization': `token ${GITHUB_TOKEN}`
    },
    params: {
        type: 'all'
    }
}


// Function to request for repo list 
// Input: Page
// If page is +ve, paginated results are requested
// If page is -ve, full repo list is requested
export const requestGetRepoList = (page) => {

    // If page number is positive fetch paginated results
    if (page > 0) {
        options.params.page = page;
        options.params.per_page = 7;
        options.params.sort = 'pushed';
        options.params.direction = 'desc';
    } else {
        // else, fetch full list
        options.params.sort = 'name';
        delete options.params.page;
        delete options.params.per_page;
        delete options.params.sort;
        delete options.params.direction;
    }

    return axios.request(options)
}