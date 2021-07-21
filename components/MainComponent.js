import React, { useState } from "react";
import { View, Button, SafeAreaView, Text } from "react-native";
import styles from "./Styles";

const Main = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Main Screen</Text>
                <Button
                    title={"Collection"}
                    onPress={() => navigation.navigate("Collection")}
                ></Button>
            </View>
        </View>
    );
};

export default Main;
