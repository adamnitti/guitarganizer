import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState, useContext } from "react";
import { guitarsFixture } from "../fixtures/guitars";
import styles from "./Styles";
import {
    Button,
    FlatList,
    SafeAreaView,
    Text,
<<<<<<< HEAD
    Pressable,
    SafeAreaView,
    LayoutAnimation,
    StyleSheet,
    UIManager,
    TouchableOpacity,
    Platform,
=======
    Image,
    View,
>>>>>>> 009a0bd9cd5b748d82762f072a39f06c805787fb
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import GuitarModal from "./GuitarModal";
import { GuitarContext } from "./GuitarContext";

const Collection = ({ navigation }) => {
    const [showAddGuitar, setShowAddGuitar] = useState(false);
<<<<<<< HEAD
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
=======
    const [gtrlist, setGtrlist] = useState(guitarsFixture);

    const guitar = useContext(GuitarContext);
>>>>>>> 009a0bd9cd5b748d82762f072a39f06c805787fb

    // Add Guitar
    const addGuitar = (guitarToAdd) => {
        const id = uuidv4();
        const newGuitar = { id, ...guitarToAdd };
        console.log(newGuitar);
        setGtrlist([...gtrlist, newGuitar]);
        console.log(gtrlist);
        setShowAddGuitar(false);
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
    const toggleModal = (isOpen) => {
        setShowAddGuitar(isOpen);
    };

<<<<<<< HEAD
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
=======
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
                onPress={() => openDetails(item)}
                title={item.brand}
                subtitle={item.model}
            />
        );
>>>>>>> 009a0bd9cd5b748d82762f072a39f06c805787fb
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
<<<<<<< HEAD
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
=======
        <SafeAreaView style={{ flex: 1 }}>
            {guitar.remove === true && removeGuitar(guitar)}
            {showAddGuitar && (
                <GuitarModal onAdd={addGuitar} toggleModal={toggleModal} />
            )}
            {gtrlist.length === 0 && <Text>Collection empty</Text>}
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
>>>>>>> 009a0bd9cd5b748d82762f072a39f06c805787fb
        </SafeAreaView>
    );
};
export default Collection;
