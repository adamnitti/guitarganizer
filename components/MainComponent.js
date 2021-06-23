import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Collection from './CollectionComponent';
import { GUITARS } from '../shared/guitars';
import GuitarModal from './GuitarModal';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guitars: GUITARS
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Collection 1</Text>
                </View>
                <View style={styles.scrollContainer}>
                    <Collection guitars={this.state.guitars} />
                </View>
                <View style={styles.footer}>
                    <GuitarModal />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default Main;