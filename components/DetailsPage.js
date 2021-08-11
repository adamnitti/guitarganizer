import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { GuitarContext } from "./GuitarContext";
import EntryModal from "./EntryModal";

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
    };

    // Open Add Entry Modal
    const closeEntryModal = () => {
        setShowAddEntry(true);
    };

    // Close Add Entry Modal
    const onCloseModal = (state) => {
        setShowAddEntry(state);
    };

    return (
        <View>
            {showAddEntry && (
                <EntryModal onAdd={addEntry} onCloseModal={closeEntryModal} />
            )}
            <Text>
                {guitar.year} {guitar.brand} {guitar.model}
            </Text>
            <Text>S/N: {guitar.sn}</Text>
            <Text>Description: {guitar.description}</Text>
            {guitar.history &&
                guitar.history.map((item) => (
                    <Text key={item.id}>
                        {item.date} {item.item}
                        {item.cost}
                    </Text>
                ))}

            <View>
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Button
                    title="Delete guitar"
                    onPress={() => {
                        guitar.setRemove(true);
                        navigation.navigate("Collection");
                    }}
                />
                <Button
                    title="Add entry"
                    onPress={() => {
                        handleAddEntry();
                    }}
                />
            </View>
        </View>
    );
};

export default DetailsPage;
