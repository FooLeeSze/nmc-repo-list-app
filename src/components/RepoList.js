import React from 'react';

import { ACCENT_COLOR } from '../helpers/constants';
import RepoListFooter from './RepoListFooter';
import RepoListItem from './RepoListItem';

import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';


export default function RepoList({ data, doneFetching, footerTexts, handleSelectRepo, handlefetchMore }) {

    // Extract repo list information from data
    const { currentList, error, isLoading, isListEnd } = data;

    return (
        <View style={styles.mainContainer}>
            {
                // Render text to indicate failure if any
                error.length > 0
                ?
                    <RepoListFooter text={footerTexts.fail} />
                :
                    // Render list if done fetching, else show activity indicator
                    doneFetching
                    ? 
                        <FlatList
                            data={currentList}
                            renderItem={(repo) => <RepoListItem repo={repo} handleSelectRepo={handleSelectRepo} />}
                            onEndReachedThreshold={0.2}
                            onEndReached={handlefetchMore}
                            ListFooterComponent={() => {

                                // Footer texts for when list is populated
                                if (currentList.length > 0) {
                                    if (isListEnd) {
                                        return (<RepoListFooter text={footerTexts.end} />)
                                    } else {
                                        return (<ActivityIndicator size="large" color={ACCENT_COLOR} />)
                                    }
                                
                                // Footer texts for when list is empty
                                } else {
                                    if (isLoading) {
                                        return (<ActivityIndicator size="large" color={ACCENT_COLOR} />)
                                    } else {
                                        return (<RepoListFooter text={footerTexts.empty} />)
                                    }
                                }
                            }}
                        />
                    :
                        <ActivityIndicator size="large" color={ACCENT_COLOR} />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
  });