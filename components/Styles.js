import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'steelblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    header: {
        backgroundColor: '#e91e63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#ddd',
        height: 50
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 50
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 5,
        backgroundColor: '#e91e63',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center' ,
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 32
    }
});