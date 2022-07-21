import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import RepoListContainer from '../components/RepoListContainer';
import RepoSearchBar from '../components/RepoSearchBar';
import { ACCENT_COLOR } from '../helpers/constants';


export default function Home() {

    return (
        <View style={styles.mainContainer}>
            
            <View style={styles.mainTitleContainer}>
                <Text style={styles.mainTitle}adjustsFontSizeToFit={true} numberOfLines={2}>React Native Community <Text style={styles.titleHighlight}>Open Source Repositories</Text></Text>
            </View>

            <RepoSearchBar />
            
            <RepoListContainer />
            
        </View>
    )
}

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: statusBarHeight + 30,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    mainTitleContainer: {
        paddingBottom: 20
    },  
    mainTitle: {
        fontSize: 28,
        fontWeight: '900'
    },
    titleHighlight: {
        color: ACCENT_COLOR
    } 
  });
