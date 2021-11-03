import React, { useState } from "react";
import {
    View,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    Pressable,
} from "react-native";

const GuitarModal = ({ onAdd, onCloseModal }) => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [sn, setSn] = useState("");
    const [description, setDescription] = useState("");
    const [history, setHistory] = useState([]);
    const [favorite, setFavorite] = useState(false);

    const handleClose = () => {
        onCloseModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!brand || !model) {
            alert("Please add a guitar and model");
            return;
        }

        const theGuitarToAdd = {
            brand,
            model,
            year,
            sn,
            description,
            history,
            favorite,
        };

        onAdd(theGuitarToAdd);

        setBrand("");
        setModel("");
        setYear("");
        setSn("");
        setDescription("");
        setHistory([]);
        setFavorite(false);
    };

    return (
        <View>
            <Modal animationType="slide" transparent={true}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Brand</Text>
                    <TextInput
                        style={styles.modalInputText}
                        onChangeText={setBrand}
                        value={brand}
                        placeholder="Enter Brand"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Model</Text>
                    <TextInput
                        style={styles.modalInputText}
                        onChangeText={setModel}
                        value={model}
                        placeholder="Enter Model"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Year Mfg</Text>
                    <TextInput
                        style={styles.modalInputText}
                        onChangeText={setYear}
                        value={year}
                        placeholder="Enter Year Manufactured"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Serial Number</Text>
                    <TextInput
                        style={styles.modalInputText}
                        onChangeText={setSn}
                        value={sn}
                        placeholder="Enter Serial #"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Description</Text>
                    <TextInput
                        style={styles.modalInputText}
                        onChangeText={setDescription}
                        value={description}
                        placeholder="Enter Description"
                        underlineColorAndroid="transparent"
                    />
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={onSubmit}
                    >
                        <Text style={styles.textStyle}>Add To Collection</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={handleClose}
                    >
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
};

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
        marginTop: 22,
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
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
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
        textAlign: "center",
    },
    modalText: {
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "left",
        justifyContent: "center",
    },
    modalInputText: {
        fontStyle: "italic",
    },
});

export default GuitarModal;
