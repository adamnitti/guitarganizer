import React from 'react';
import { FlatList, View, Image } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function Collection(props) {

    const navigation = useNavigation();

    console.log(props.guitars.image);
    
    const renderCollectionItem = ({item}) => {

        return (
            <View>
                <ListItem
                    title = {item.brand}
                    subtitle = {item.model}
                    
                    onPress={() => 
                        navigation.navigate('Details', {item})
                    }
                    
                />                
            </View>
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