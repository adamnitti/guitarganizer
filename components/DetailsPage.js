import React from 'react';
import { View, Text } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TabRouter, useNavigation } from '@react-navigation/native';
import styles from "./Styles";

const DetailsPage = ({ guitar, hideDetails }) => {

    console.log(guitar);

    return (
        <View style={styles.container}>
          <Text>{guitar.year} {guitar.brand} {guitar.model}</Text>
          <Text>{guitar.description}</Text>
          {guitar.history.map(item => 
            <Text 
              key={item.id}
              item={item}
            >{item.date} {item.item} {item.cost}</Text>
          )}
          
          <Button title="Go back" onPress={() => hideDetails()} />
          <Button title="Delete guitar"  />
        </View>
    );  
}

export default DetailsPage;
