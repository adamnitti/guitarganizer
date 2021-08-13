import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Button, FlatList, Divider, ListItem } from "react-native-elements";
import { GuitarContext } from "./GuitarContext";
import EntryModal from "./EntryModal";
import Styles from "./Styles";
import { SafeAreaView } from "react-native";

const DetailsPage = ({ navigation }) => {
    const guitar = useContext(GuitarContext);

    const [showAddEntry, setShowAddEntry] = useState(false);

    const handleAddEntry = () => {
        setShowAddEntry(true);
    };

    // Add Entry
    const addEntry = (item) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        item.id = id;
        console.log(item);
        guitar.history.push(item);
        console.log(guitar.history);
        setShowAddEntry(false);
    };

    // Open Add Entry Modal
    const closeEntryModal = () => {
        setShowAddEntry(false);
    };

    // Close Add Entry Modal
    const onCloseModal = (state) => {
        setShowAddEntry(state);
    };

    const renderItem = (item) => {
        <Text>{item.date}</Text>;
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {showAddEntry && (
                <EntryModal onAdd={addEntry} onCloseModal={closeEntryModal} />
            )}
            <Text style={Styles.detailsHeadingText}>
                {guitar.year} {guitar.brand} {guitar.model}
            </Text>
            <Text style={Styles.detailsItemText}>S/N: {guitar.sn}</Text>
            <Text style={Styles.detailsItemText}>{guitar.description}</Text>
            <Divider />
            {guitar.history &&
                guitar.history.map((item) => (
                    <Text style={Styles.detailsItemText} key={item.id}>
                        {item.date} {item.item} {item.cost} {item.description}
                    </Text>
                ))}

            <View>
                <Button
                    style={(Styles.modalFooter, Styles.modalButton)}
                    title="Go back"
                    onPress={() => navigation.goBack()}
                />
                <Button
                    style={(Styles.modalFooter, Styles.modalButton)}
                    title="Delete guitar"
                    onPress={() => {
                        guitar.setRemove(true);
                        navigation.navigate("Collection");
                    }}
                />
                <Button
                    style={(Styles.modalFooter, Styles.modalButton)}
                    title="Add entry"
                    onPress={() => {
                        handleAddEntry();
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default DetailsPage;
