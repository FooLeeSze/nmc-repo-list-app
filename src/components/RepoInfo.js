import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function RepoInfo(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.descContainer}>
                <Icon
                    name={props.icon}
                    style={styles.detailIcon}
                />
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>{props.info}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f0f0f0',
        marginBottom: 6,
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    descContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e4687',
        flex: 2,
        padding: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        color: 'white',
        fontSize: 17
    },
    detailIcon: {
        fontSize: 20,
        marginRight: 5,
        color: 'white'
    },
    info: {
        fontSize: 17,
        fontWeight: '700'
    }
})