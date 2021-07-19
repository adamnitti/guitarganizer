import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { TabRouter, useNavigation } from "@react-navigation/native";
import styles from "./Styles";

const DetailsPage = ({ route, navigation }) => {
    const { id, year, brand, model, sn, description, history, onDelete } =
        route.params;

    return (
        <View>
            <Text>
                {year} {brand} {model}
            </Text>
            <Text>S/N: {sn}</Text>
            <Text>Description: {description}</Text>
            {history &&
                history.map((item) => (
                    <Text key={item.id}>
                        {item.date} {item.item} {item.cost}
                    </Text>
                ))}
            <View>
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Button
                    title="Delete guitar"
                    onPress={() => {
                        onDelete(id);
                    }}
                />
            </View>
        </View>
    );
};

export default DetailsPage;
