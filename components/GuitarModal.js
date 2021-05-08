import React from 'react';
import { View, Modal, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { GUITARS } from '../shared/guitars';

export default class GuitarModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            guitars: GUITARS,
            modalOpen: false
        };
    }

    setModal = (status) => {
        this.setState({ modalOpen: !status });
    };

    render() {

        /*let guitarlist = this.state.guitars.map((val, key) => {
            return <Guitar key={key} keyVal={key} val={val}
                deleteMethod = {() => this.deleteItem(key)} />
        } );*/

        return (
            <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalOpen}
                onClick={() => {
                    this.setModal(!modalOpen);
                }}
            >
                
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Brand</Text>
                    <TextInput style={styles.modalInputText}
                        onChangeText={brand => this.setState(brand)}
                        value={this.state.brand}
                        placeholder="Enter Brand"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Model</Text>
                    <TextInput style={styles.modalInputText}
                        onChangeText={model => this.setState(model)}
                        value={this.state.model}
                        placeholder="Enter Model"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Year Mfg</Text>
                    <TextInput style={styles.modalInputText}
                        onChangeText={year => this.setState(year)}
                        value={this.state.year}
                        placeholder="Enter Year Manufactured"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Serial Number</Text>
                    <TextInput style={styles.modalInputText}
                        onChangeText={sn => this.setState(sn)}
                        value={this.state.sn}
                        placeholder="Enter Serial #"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Description</Text>
                    <TextInput style={styles.modalInputText}
                        onChangeText={description => this.setState(description)}
                        value={this.state.description}
                        placeholder="Enter Description"
                        underlineColorAndroid="transparent"
                    />
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => this.setModal(this.state.modalOpen)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable> 
                </View>
                
            </Modal>

            <Pressable
                style={[styles.footer, styles.button, styles.buttonOpen]}
                onPress={() => {
                    this.setModal(this.state.modalOpen)}
                }
            >
                <Text style={styles.textStyle}>Add New</Text>
            </Pressable>
            </View>
            
        );
    };
};

const styles = StyleSheet.create({
footer: {
    //position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    zIndex: 10,
},
centeredView: {
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
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},
button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
    },
buttonOpen: {
    backgroundColor: "#e91e63",
},
buttonClose: {
    backgroundColor: "#2196F3",
},
textStyle: {
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
}
});