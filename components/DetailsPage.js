import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { GuitarContext } from "./GuitarContext";

const DetailsPage = ({ navigation }) => {
    const guitar = useContext(GuitarContext);

    return (
        <View>
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
            </View>
        </View>
    );
};

export default DetailsPage;
