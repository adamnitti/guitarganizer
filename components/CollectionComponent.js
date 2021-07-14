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
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DetailsPage from "./DetailsPage";

const Collection = () => {
    const navigation = useNavigation();
    const [showAddGuitar, setShowAddGuitar] = useState(false);
    const [gtrlist, setGtrlist] = useState(GUITARS);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedGuitar, setSelectedGuitar] = useState({});

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

    /*// Delete Guitar
    const deleteGuitar = (item) => {
          setGtrlist(gtrlist.filter(guitar => guitar.id !== item.id));
          console.log(gtrlist); 
    };*/

    // Open Details
    const openDetails = (guitar) => {
        //console.log(guitar);
        setSelectedGuitar(guitar);
        setShowDetails(true);
    };

    const hideDetails = () => {
        setShowDetails(false);
    };

    return (
        <View>
            {showAddGuitar && <GuitarModal onAdd={addGuitar} onCloseModal={onCloseModal} />}

            {(gtrlist.length <= 0) && <Text>Collection empty</Text>}
            {(gtrlist.length > 0) && 
                <FlatList
                    //onDelete={deleteGuitar}
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
                /> }             
                {(showDetails) && <DetailsPage hideDetails={hideDetails} guitar={selectedGuitar}/>}
                 
                <Button
                    title="Add New Guitar"
                    style={[styles.footer, styles.button, styles.buttonOpen]}
                    onPress={handleAddNewGuitarPress}
                />
            
        </View>
    );
};
export default Collection;
