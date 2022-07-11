import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ACCENT_COLOR } from '../helpers/constants';

export default function RepoListItem({repo, handleSelectRepo}) {

    return (
        <TouchableOpacity onPress={() => {handleSelectRepo(repo)}}>
            <View style={styles.card}>
                <View>
                    <View style={styles.cardIconContainer}>
                        <Icon
                            name="bookmark-box-multiple"
                            style={styles.cardIcon}
                        />
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.repoTitle}  adjustsFontSizeToFit={true} numberOfLines={1}>{repo.item.name}</Text>
                    <Text style={styles.repoDesc}>{repo.item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ededed',
        borderRadius: 15,
        padding: 10,
        marginBottom: 20
    },
    cardIconContainer: {
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: ACCENT_COLOR,
        padding: 7,
        marginRight: 10,
        marginTop: 3
    },
    cardIcon: {
        fontSize: 25,
        color: 'white'
    },
    repoTitle: {
        fontSize: 20,
        fontFamily: 'normal',
        fontWeight: 'bold'
    },
    repoDesc: {
        fontSize: 15,
        flex: 1
    },
})