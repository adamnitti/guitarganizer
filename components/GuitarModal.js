import React, {useState} from 'react';
import { View, Modal, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { GUITARS } from '../shared/guitars';

const GuitarModal = () => {
    const [brand, onChangeBrand] = useState(null);
    const [model, onChangeModel] = useState(null);
    const [year, onChangeYear] = useState(null);
    const [sn, onChangeSn] = useState(null);
    const [description, onChangeDescription] = React.useState(null)

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Brand</Text>
                <TextInput style={styles.modalInputText}
                    onChangeText={onChangeBrand}
                    value={brand}
                    placeholder="Enter Brand"
                    underlineColorAndroid="transparent"
                />
                <Text style={styles.modalText}>Model</Text>
                <TextInput style={styles.modalInputText}
                    onChangeText={onChangeModel}
                    value={model}
                    placeholder="Enter Model"
                    underlineColorAndroid="transparent"
                />
                <Text style={styles.modalText}>Year Mfg</Text>
                <TextInput style={styles.modalInputText}
                    onChangeText={onChangeYear}
                    value={year}
                    placeholder="Enter Year Manufactured"
                    underlineColorAndroid="transparent"
                />
                <Text style={styles.modalText}>Serial Number</Text>
                <TextInput style={styles.modalInputText}
                    onChangeText={onChangeSn}
                    value={sn}
                    placeholder="Enter Serial #"
                    underlineColorAndroid="transparent"
                />
                <Text style={styles.modalText}>Description</Text>
                <TextInput style={styles.modalInputText}
                    onChangeText={onChangeDescription}
                    value={description}
                    placeholder="Enter Description"
                    underlineColorAndroid="transparent"
                />
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.textStyle}>Add To Collection</Text>
                </Pressable> 
            </View>
            
        </Modal>

        <Pressable
            style={[styles.footer, styles.button, styles.buttonOpen]}
            onPress={() => {
                setModalVisible(!modalVisible)}
            }
        >
            <Text style={styles.textStyle}>Add New</Text>
        </Pressable>
        </View>
        
    );
    }

const styles = StyleSheet.create({
footer: {
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

export default GuitarModal;