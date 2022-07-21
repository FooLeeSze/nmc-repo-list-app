import React from 'react';
import { useSelector } from 'react-redux';

import { LIST_FOOTER_TEXT } from '../helpers/constants';
import useLoadMoreRepos from '../hooks/useLoadMoreRepos';
import useRepoModal from '../hooks/useRepoModal';
import RepoInfoCard from './RepoInfoCard';
import { loadRepoList } from '../redux/actions/repoList';
import { loadMoreSearches } from '../redux/actions/search';

import Modal from "react-native-modal";
import { View, StyleSheet } from 'react-native';
import RepoList from './RepoList';


export default function RepoListContainer() {
    // Access states from Redux store
    const repos = useSelector(state => state.repoList)
    const searchRes = useSelector(state => state.search)
    const isSearching = searchRes.keywords.length > 0;

    // Hook to fetch more repos and append to list - for main list & search results list
    const [ fetchMoreRepos ] = useLoadMoreRepos(1, repos, loadRepoList, false);
    const [ fetchMoreSearches ] = useLoadMoreRepos(0, searchRes, loadMoreSearches, true);

    // Hook to set repo info in modal
    const [ repoInfo, setRepoInfo ] = useRepoModal();

    return (
        <View style={styles.mainContainer}>
            <View>
                <Modal
                    isVisible={repoInfo.visible}
                    backdropOpacity={0}
                    onBackdropPress={() => {setRepoInfo('close')}}
                    onBackButtonPress={() => {setRepoInfo('close')}}
                    style={styles.modal}
                >
                    <View style={styles.repoCardContainer}>
                        <RepoInfoCard repoInfo={repoInfo} modalCtrl={setRepoInfo} />
                    </View>
                </Modal>
            </View>
            
            <View style={styles.listContainer}>
                
                    {/* If user is searching, render search results list,
                    else render the main list*/}
                    <RepoList 
                        data={isSearching ? searchRes : repos}
                        doneFetching={isSearching ? searchRes.fullRepoList.length > 0 : repos.currentList.length > 0}
                        handlefetchMore={isSearching ? fetchMoreSearches : fetchMoreRepos}
                        footerTexts={isSearching ? LIST_FOOTER_TEXT.searchList : LIST_FOOTER_TEXT.mainList} 
                        handleSelectRepo={setRepoInfo}
                    />
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    modal: {
        marginBottom: 0, 
        marginLeft: 0, 
        marginRight: 0
    },
    listContainer: {       
      flex: 1,
      paddingBottom: 20
    },
    repoCardContainer: {
        flex: 1
    }
  });