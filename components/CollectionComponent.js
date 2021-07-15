import React, { useState } from "react";
import { GUITARS } from "../shared/guitars";
import styles from "./Styles";
import {
    Button,
    FlatList,
    View,
    Text,
    Pressable,
    SafeAreaView,
    LayoutAnimation,
    StyleSheet,
    UIManager,
    TouchableOpacity,
    Platform,
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
    const [isExpanded, setIsExpanded] = useState(false);

    //Expandable component code
    const ExpandableComponent = ({item}) => {
        //Custom Component for the Expandable List
        const [layoutHeight, setLayoutHeight] = useState(0);
      
        useEffect(() => {
          if (item.isExpanded) {
            setLayoutHeight(null);
          } else {
            setLayoutHeight(0);
          }
        }, [item.isExpanded]);
    };

    const updateLayout = (item) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
        ExpandableComponent(item);
    }

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
    const deleteGuitar = (item) => {
          setGtrlist(gtrlist.filter(guitar => guitar.id !== item.id));
          console.log(gtrlist);
          setShowDetails(false); 
    };

    // Open Details
    const openDetails = (guitar) => {
        //console.log(guitar);
        //LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setSelectedGuitar(guitar);
        setShowDetails(true);
    };

    const hideDetails = () => {
        setShowDetails(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {showAddGuitar && <GuitarModal onAdd={addGuitar} onCloseModal={onCloseModal} />}

                {(gtrlist.length <= 0) && <Text>Collection empty</Text>}
                {(gtrlist.length > 0) && 
                    <FlatList style={styles.container}
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
                    {(showDetails) && <DetailsPage hideDetails={hideDetails} onDelete={deleteGuitar} guitar={selectedGuitar}/>}
                    
                    {(!showDetails) && <Button
                        title="Add New Guitar"
                        style={[styles.footer, styles.button, styles.buttonOpen]}
                        onPress={handleAddNewGuitarPress}
                    />}
                
            </View>
        </SafeAreaView>
    );
};
export default Collection;
