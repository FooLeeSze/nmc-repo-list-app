import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';


// Hook to call fetch action and append more repos into a list
export default function useLoadMoreRepos(initialState, repos, loadMoreFunction, skipFirstRun) {
    const [listPage, setListPage] = useState(initialState)

    const dispatch = useDispatch();
    const firstRun = useRef(true);


    // Function to update list page number
    function fetchMoreRepos() {
        if (!repos.isListEnd) {
            setListPage(prevPage => prevPage+1)
        }
    }
    
    // Load more repos upon list page number update
    useEffect(() => {
        if (skipFirstRun) {
            if (firstRun.current) {
                firstRun.current = false;
            } else {
                dispatch(loadMoreFunction(listPage))
            }
        } else {
            dispatch(loadMoreFunction(listPage))
        } 
        
    }, [listPage])

    return [ fetchMoreRepos ]
}




    
