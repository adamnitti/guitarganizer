import React, { useState, useContext } from "react";
import { GUITARS } from "../shared/guitars";
import styles from "./Styles";
import { Button, FlatList, View, Text } from "react-native";
import GuitarModal from "./GuitarModal";
import { GuitarContext } from "./GuitarContext";

const Collection = ({ navigation }) => {
    const [showAddGuitar, setShowAddGuitar] = useState(false);
    const [gtrlist, setGtrlist] = useState(GUITARS);
    const [selectedGuitar, setSelectedGuitar] = useState({});

    const guitar = useContext(GuitarContext);

    // Add Guitar
    const addGuitar = (guitar) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newGuitar = { id, ...guitar };
        setGtrlist([...gtrlist, newGuitar]);
        setShowAddGuitar(!showAddGuitar);
    };

    const handleAddNewGuitarPress = () => {
        setShowAddGuitar(true);
    };

    const onCloseModal = (state) => {
        setShowAddGuitar(state);
    };

    // Delete Guitar
    const deleteGuitar = (id) => {
        setGtrlist(gtrlist.filter((guitar) => guitar.id !== id));
        console.log(gtrlist);
    };

    // Open Details Page
    const openDetails = (item) => {
        //setSelectedGuitar(item);
        guitar.setId(item.id);
        guitar.setBrand(item.brand);
        guitar.setModel(item.model);
        guitar.setYear(item.year);
        guitar.setSn(item.sn);
        guitar.setDescription(item.description);
        guitar.setHistory(item.history);
        navigation.navigate("Details");
    };

    return (
        <View>
            {showAddGuitar && (
                <GuitarModal onAdd={addGuitar} onCloseModal={onCloseModal} />
            )}

            {gtrlist.length == 0 && <Text>Collection empty</Text>}

            {gtrlist.length > 0 && (
                <FlatList
                    data={gtrlist}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text
                            style={styles.item}
                            onPress={() => openDetails(item)}
                        >
                            {item.year} {item.brand} {item.model}
                        </Text>
                    )}
                />
            )}
            <Button
                title="Add New Guitar"
                style={[styles.footer, styles.button, styles.buttonOpen]}
                onPress={handleAddNewGuitarPress}
            />
        </View>
    );
};
export default Collection;
