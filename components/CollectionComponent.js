import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function Collection(props) {

    const navigation = useNavigation();

    const renderCollectionItem = ({item}) => {
        return (
            
            <ListItem
                title={item.brand}
                subtitle={item.model}
                leftAvatar={{ source: require('../assets/favicon.png')}}
                onPress={() => { navigation.navigate('Details') }}
            />
                
            
        );
    };

    return (
        <FlatList
            data={props.guitars}
            renderItem={renderCollectionItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Collection;