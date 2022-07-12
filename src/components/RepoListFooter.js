import { View, Text, StyleSheet } from 'react-native'


export default function RepoListFooter({ text }) {

    return (
        <View style={styles.listEndContainer}>
            <Text style={styles.listEndText}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    listEndContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    listEndText: {
        fontSize: 15
    },  
})
