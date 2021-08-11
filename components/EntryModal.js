import React, { useState } from "react";
import {
    View,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    Pressable,
} from "react-native";

const EntryModal = ({ onAdd, onCloseModal }) => {
    //const [id, setId] = useState("");
    const [date, setDate] = useState("");
    const [item, setItem] = useState("");
    const [cost, setCost] = useState("");
    const [description, setDescription] = useState("");

    const handleClose = () => {
        onCloseModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!item) {
            alert("Please add an entry");
            return;
        }

        const entryToAdd = {
            date,
            item,
            cost,
        };

        onAdd(entryToAdd);

        setDate("");
        setItem("");
        setCost("");
        setDescription("");
    };

    return (
        <View>
            <Modal animationType="slide" transparent={true}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Date</Text>
                    <TextInput
                        style={styles.modalInputText}
                        onChangeDate={setDate}
                        value={date}
                        placeholder="Enter Date"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Item</Text>
                    <TextInput
                        style={styles.modalInputText}
                        onChangeText={setItem}
                        value={item}
                        placeholder="Enter Item"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.modalText}>Cost</Text>
                    <TextInput
                        style={styles.modalInputText}
                        onChangeText={setCost}
                        value={cost}
                        placeholder="Enter Cost"
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
                        <Text style={styles.textStyle}>Add Entry</Text>
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

export default EntryModal;
