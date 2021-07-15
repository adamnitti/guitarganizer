import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //marginHorizontal: 16,
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
    },
    modalFooter: {
        bottom: 5,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    modalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalButton: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    modalButtonOpen: {
        backgroundColor: "#e91e63",
    },
    modalButtonClose: {
        backgroundColor: "#2196F3",
    },
    modalTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "left",
        justifyContent: "center"
    },
    modalInputText: {
        fontStyle: "italic"
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});