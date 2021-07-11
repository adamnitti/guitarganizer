import React, { useState } from "react";
import { GUITARS } from "../shared/guitars";
import styles from "./Styles";
import {
    Button,
    FlatList,
    View,
    Text,
    ScrollView,
    Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GuitarModal from "./GuitarModal";
//import { StyleSheet } from 'react-native';

const Collection = () => {
    const navigation = useNavigation();
    const [showAddGuitar, setShowAddGuitar] = useState(false);
    const [gtrlist, setGtrlist] = useState(GUITARS);

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
    }

    /* // Delete Guitar
      const deleteGuitar = (id) => {
          //setCollection(collection.filter(guitar => guitar.id !== id));
          //console.log(collection); 
      } */

    return (
        <View
            //onAdd={() => setShowAddGuitar(!showAddGuitar)}
            //showAdd={showAddGuitar}
        >
            {showAddGuitar && <GuitarModal onAdd={addGuitar} onCloseModal={onCloseModal} />}

            {gtrlist.length > 0 ? (
                <FlatList
                    data={gtrlist}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text
                            style={styles.item}
                            onPress={() =>
                                navigation.navigate("Details", { item })
                            }
                        >
                            {item.year} {item.brand} {item.model}
                        </Text>
                    )}
                />
            ) : (
                <p>Collection empty</p>
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
