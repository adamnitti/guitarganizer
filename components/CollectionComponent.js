import React, { useState, useContext } from "react";
import { GUITARS } from "../shared/guitars";
import styles from "./Styles";
import {
    Button,
    FlatList,
    SafeAreaView,
    Text,
    Image,
    View,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import GuitarModal from "./GuitarModal";
import { GuitarContext } from "./GuitarContext";

const Collection = ({ navigation }) => {
    const [showAddGuitar, setShowAddGuitar] = useState(false);
    const [gtrlist, setGtrlist] = useState(GUITARS);

    const guitar = useContext(GuitarContext);

    // Add Guitar
    const addGuitar = (guitar) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newGuitar = { id, ...guitar };
        console.log(newGuitar);
        setGtrlist([...gtrlist, newGuitar]);
        console.log(gtrlist);
        setShowAddGuitar(!showAddGuitar);
    };

    // Remove Guitar
    const removeGuitar = (item) => {
        guitar.remove = false;
        const filtCol = gtrlist.filter((guitar) => guitar.id !== item.id);
        console.log(filtCol);
        setGtrlist(filtCol);
    };

    // Open Add Guitar Modal
    const handleAddNewGuitarPress = () => {
        setShowAddGuitar(true);
    };

    // Close Add Guitar Modal
    const onCloseModal = (state) => {
        setShowAddGuitar(state);
    };

    // Open Details Page
    const openDetails = (item) => {
        guitar.setId(item.id);
        guitar.setBrand(item.brand);
        guitar.setModel(item.model);
        guitar.setYear(item.year);
        guitar.setSn(item.sn);
        guitar.setDescription(item.description);
        guitar.setHistory(item.history);
        guitar.setRemove(false);
        navigation.navigate("Details");
    };

    const renderGuitarItem = ({ item }) => {
        return (
            <View>
                <ListItem
                    onPress={() => openDetails(item)}
                    title={item.brand}
                    subtitle={item.model}
                ></ListItem>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {guitar.remove === true && removeGuitar(guitar)}
            {showAddGuitar && (
                <GuitarModal onAdd={addGuitar} onCloseModal={onCloseModal} />
            )}
            {gtrlist.length == 0 && <Text>Collection empty</Text>}
            {gtrlist.length > 0 && (
                <FlatList
                    data={gtrlist}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderGuitarItem}
                />
            )}

            <Button
                title="Add New Guitar"
                style={[styles.footer, styles.button, styles.buttonOpen]}
                onPress={handleAddNewGuitarPress}
            />
        </SafeAreaView>
    );
};
export default Collection;
