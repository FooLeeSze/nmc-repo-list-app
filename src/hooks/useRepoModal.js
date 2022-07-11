import { useState } from 'react';

const iniRepoInfoState = {
    visible: false,
    name: "",
    desc: "",
    nStars: null,
    nForks: null,
    nWatchers: null,
    lang: ""
}

export default function useRepoModal() {
    const [repoInfo, setRepoInfo] = useState(iniRepoInfoState)

    // Function to set repo info as the selected repo
    function handleSelectRepo(repo) {
        setRepoInfo({
            visible: true,
            name: repo.item.name,
            desc: repo.item.description, 
            nForks: repo.item.forks_count,
            nWatchers: repo.item.watchers_count,
            nStars: repo.item.stargazers_count,
            lang: repo.item.language
        })
    }

    // Function to update repo info, or open/close modal
    function updateRepoInfo(repo) {
        if (repo==='close') {
            setRepoInfo(iniRepoInfoState)
        } else if (repo==='open') {
            setRepoInfo(prevInfo => {
                return {
                    ...prevInfo,
                    visible: true
                }
            })
        } else {
            handleSelectRepo(repo)
        }
    }

    return [ repoInfo, updateRepoInfo ]
}



    
