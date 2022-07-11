import React from 'react';
import { useSelector } from 'react-redux';

import { ACCENT_COLOR } from '../helpers/constants';
import useLoadMoreRepos from '../hooks/useLoadMoreRepos';
import useRepoModal from '../hooks/useRepoModal';
import RepoListFooter from './RepoListFooter';
import RepoListItem from './RepoListItem';
import RepoInfoCard from './RepoInfoCard';
import { loadRepoList } from '../redux/actions/repoList';
import { loadMoreSearches } from '../redux/actions/search';

import Modal from "react-native-modal";
import { 
    Text, 
    View, 
    FlatList, 
    StyleSheet, 
    ActivityIndicator
} from 'react-native';


export default function RepoList() {
    // Access states from Redux store
    const repos = useSelector(state => state.repoList)
    const searchRes = useSelector(state => state.search)

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
                    style={styles.modal}
                >
                    <View style={styles.repoCardContainer}>
                        <RepoInfoCard repoInfo={repoInfo} modalCtrl={setRepoInfo} />
                    </View>
                </Modal>
            </View>
            
            <View style={styles.listContainer}>
                {
                    // Render text to indicate failure if any
                    searchRes.error.length>0
                        ?
                            <RepoListFooter text='Failed to search repositories' />
                        :
                            // If user is searching, render search results list,
                            // else render the main list
                            searchRes.keywords.length>0
                            ?
                                // If full repo list not fetched yet for searching, render activity indicator
                                // else render search results list
                                searchRes.fullRepoList.length > 0
                                ?
                                <FlatList
                                    data={searchRes.currentList}
                                    renderItem={(repo) => <RepoListItem repo={repo} handleSelectRepo={setRepoInfo} />}
                                    onEndReachedThreshold={0.2}
                                    onEndReached={fetchMoreSearches}
                                    ListFooterComponent={() => {
                                        if (searchRes.filteredList.length>0) {
                                            if (searchRes.isListEnd) {
                                                return (<RepoListFooter text='End of search results' />)
                                            } else {
                                                return (<ActivityIndicator size="large" color={ACCENT_COLOR} />)
                                            }
                                            
                                        } else {
                                            if (searchRes.isLoading) {
                                                return (<ActivityIndicator size="large" color={ACCENT_COLOR} />)
                                            } else {
                                                return (<RepoListFooter text='No matches found' />)
                                            }
                                            
                                        }
                                    }}
                                />
                                :
                                <ActivityIndicator size="large" color={ACCENT_COLOR} />
                            :
                            // Render text to indicate failure if any
                            repos.error.length>0
                                ?
                                    <RepoListFooter text='Failed to load repositories' />
                                :
                                    // If repo list not yet fetched, render activity indicator
                                    // else render repo list
                                    repos.repoList.length>0 
                                    ?
                                        
                                        <FlatList
                                            data={repos.repoList}
                                            renderItem={(repo) => <RepoListItem repo={repo} handleSelectRepo={setRepoInfo} />}
                                            onEndReachedThreshold={0.2}
                                            onEndReached={fetchMoreRepos}
                                            ListEmptyComponent={() => <Text>No repositories to show at this time</Text>}
                                            ListFooterComponent={() => {
                                                if (repos.isListEnd) {
                                                    return (<RepoListFooter text='No more repositories to show' />)
                                                } else {
                                                    return (<ActivityIndicator size="large" color={ACCENT_COLOR} />)
                                                }
                                            }}
                                        />
                                    : 
                                        <ActivityIndicator size="large" color={ACCENT_COLOR} />
                }
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
    },
    searchEndContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    searchEndText: {
        fontSize: 15
    }, 
  });