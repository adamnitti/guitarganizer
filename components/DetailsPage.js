import React from 'react';
import { View, Text } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TabRouter, useNavigation } from '@react-navigation/native';



const DetailsPage = ({ route, navigation }) => {

  const { item } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{item.year} {item.brand} {item.model}</Text>
          <Text>{item.description}</Text>
          {item.history.map(item => 
            <Text 
              key={item.id}
              item={item}
            >{item.date} {item.item} {item.cost}</Text>
          )}
          
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );

      
}

export default DetailsPage;
