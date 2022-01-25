import React, { useEffect, useState, useContext } from "react";
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

    //const [gtrlist, setGtrlist] = useState([]);
    //const [isLoading, setLoading] = useState(true);

    /* const getGuitars = async () => {
        console.log("test");
        fetch("https://10.0.2.2/guitars/");
        console.log(guitars)

    getGuitars(); */

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
        console.log(item);
        return (
            <ListItem
                //hideChevron={false}
                onPress={() => openDetails(item)}
                title={item.brand}
                subtitle={item.model}
            />
        );
    };

    const FlatListItemSeparator = () => {
        return (
            <View
                elevation={1}
                style={{
                    height: 1,
                    width: "97%",
                    margin: 2,
                    backgroundColor: "black",
                    border: 2,
                    borderColor: "black",
                    alignSelf: "center",
                    shadowColor: "gray",
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 7.49,
                }}
            ></View>
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
                    renderItem={renderGuitarItem}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={FlatListItemSeparator}
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
