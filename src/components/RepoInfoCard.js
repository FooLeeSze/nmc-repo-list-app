import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RepoInfo from './RepoInfo';
import { ACCENT_COLOR } from '../helpers/constants';


export default function RepoInfoCard(props) {

    // Function to close modal
    function handleClose() {
        props.modalCtrl('close')
    }

    // Define list of details
    const details = [
        {
            icon: 'star',
            desc: 'Number of Stars',
            info: props.repoInfo.nStars,
        },
        {
            icon: 'directions-fork',
            desc: 'Number of Forks',
            info: props.repoInfo.nForks
        },
        {
            icon: 'eye',
            desc: 'Number of Watchers',
            info: props.repoInfo.nWatchers
        },
        {
            icon: 'code-tags',
            desc: 'Language',
            info: props.repoInfo.lang === null ? "N/A" : props.repoInfo.lang 
        }
    ];

    return (
        <View style={styles.mainContainer}>
            <View style={styles.modal}>

                <View style={styles.closeBtnContainer}>
                    <TouchableOpacity onPress={handleClose}>
                        <Icon name='close' style={styles.closeBtn}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerContainer}>
                    <Icon
                        name="bookmark-box-multiple"
                        style={styles.headerIcon}
                    />
                    <Text style={styles.repoTitle} adjustsFontSizeToFit={true} numberOfLines={1}>
                        {props.repoInfo.name}
                    </Text>  
                    <Text style={styles.repoDesc}>
                        {props.repoInfo.desc}
                    </Text>
                </View>
                
                <View style={styles.contentContainer}>
                    {details.map((detail, i) => <RepoInfo 
                                                    key={i} 
                                                    icon={detail.icon}
                                                    info={detail.info}
                                                    desc={detail.desc} 
                                                />)}
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modal: {
        width: '100%',
        backgroundColor: ACCENT_COLOR,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingBottom: 40

    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    headerIcon: {
        fontSize: 40,
        color: 'white',
        backgroundColor: '#0e4687',
        padding: 8,
        borderRadius: 15
    },
    repoTitle: {
        fontSize: 30,
        fontWeight: '900',
        color: 'white',
        textAlign: 'center'
    },
    repoDesc: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeBtnContainer: {
        position: 'absolute',
        right: 20,
        top: 20,
        backgroundColor: '#eeee',
        padding: 4,
        borderRadius: 5
    },
    closeBtn: {
        fontSize: 20
    }
})