import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import RepoList from '../components/RepoList';
import RepoSearchBar from '../components/RepoSearchBar';


export default function Home() {

    return (
        <View style={styles.mainContainer}>
            
            <View style={styles.mainTitleContainer}>
                <Text style={styles.mainTitle}>React Native Community <Text style={styles.titleHighlight}>Repositories</Text></Text>
            </View>

            <RepoSearchBar />
            
            <RepoList />
            
        </View>
    )
}

const statusBarHeight = StatusBar.currentHeight;

const ACCENT_COLOR = '#9984D4';

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: statusBarHeight + 30,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
    },
    mainTitleContainer: {
        paddingBottom: 20
    },  
    mainTitle: {
        fontSize: 30,
        fontWeight: '900'
    },
    titleHighlight: {
        color: ACCENT_COLOR
    } 
  });
