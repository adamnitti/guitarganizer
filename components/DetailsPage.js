import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TabRouter, useNavigation } from '@react-navigation/native';



function DetailsPage({navigation, route}) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{route.params.item.year} {route.params.item.brand} {route.params.item.model}</Text>
          <Text>{route.params.item.description}</Text>
          <Text>{route.params.item.history}</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );

      
}

export default DetailsPage;
