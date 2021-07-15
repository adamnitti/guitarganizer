import React from 'react';
import { View, Text } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TabRouter, useNavigation } from '@react-navigation/native';
import styles from "./Styles";

const DetailsPage = ({ guitar, hideDetails, onDelete }) => {

    console.log(guitar);

    return (
        <View >
          <Text>{guitar.year} {guitar.brand} {guitar.model}</Text>
          <Text>{guitar.description}</Text>
          {guitar.history.map(item => 
            <Text 
              key={item.id}
              item={item}
            >{item.date} {item.item} {item.cost}</Text>
          )}
            <View style={styles.fixToText}>
              <Button title="Go back" onPress={() => hideDetails()} />
              <Button title="Delete guitar"  onPress={() => onDelete(guitar)}/>
            </View>
        </View>
    );  
}

export default DetailsPage;
