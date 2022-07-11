import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { searchRepos, clearSearch } from '../redux/actions/search';


export default function RepoSearchBar() {
    const dispatch = useDispatch();

    // State for keywords
    const [searchKeywords, setSearchKeyword] = useState('');

    // Keep track if first run (when component renders)
    const isFirstRun = useRef(true);

    // Set keywords upon user input
    function handleSearchInput(value) {
        setSearchKeyword(value)
    }

    useEffect(() => {
        if (!isFirstRun.current) {
            if (searchKeywords.length>0){
                // If user input keyword, dispatch search action
                dispatch(searchRepos(searchKeywords))
            } else {
                // If keyword is empty, dispatch clear action
                dispatch(clearSearch())
            }
        } else {
            isFirstRun.current = false;
        }
    }, [searchKeywords])

    return (
        <View>
            <SearchBar
                containerStyle={styles.container}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                placeholder="Search for repository"
                placeholderTextColor="#6f7680"
                value={searchKeywords}
                onChangeText={(value) => {handleSearchInput(value)}}
                onClear={() => {dispatch(clearSearch())}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent', 
        borderBottomColor: 'transparent', 
        borderTopColor: 'transparent', 
        padding: 0, 
        marginBottom: 20
    },
    inputContainer: {
        backgroundColor: '#aaaa', 
        borderRadius: 30
    },
    input: {
        color: 'black'
    }
});
