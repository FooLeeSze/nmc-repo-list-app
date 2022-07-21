import axios from "axios";

// API url
const API_URL = 'https://api.github.com/users/react-native-community/repos';

// Access token (if any)
const GITHUB_TOKEN = null;

// Request parameters
const options = {
    method: 'get',
    url: API_URL,
    headers: {
        'accept': 'application/vnd.github+json'
    },
    params: {
        type: 'all'
    }
}

if (GITHUB_TOKEN) {
    options.headers.Authorization = `token ${GITHUB_TOKEN}`;
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
        options.params.sort = 'name';
        options.params.direction = 'asc';
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