import React, { useState } from 'react';
import { GUITARS } from '../shared/guitars';
import styles from './Styles';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { StyleSheet } from 'react-native';

const Collection = () => {

    const navigation = useNavigation();

    const [gtrlist, setGtrlist] = useState({ GUITARS });

    // Add Guitar
    const addGuitar = () => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newGuitar = {id, ...guitar};
        setGtrlist([...gtrlist, newGuitar]);
        console.log(gtrlist);
    }

    /* // Delete Guitar
    const deleteGuitar = (id) => {
        //setCollection(collection.filter(guitar => guitar.id !== id));
        //console.log(collection); 
    } */

    
        return (
            <View>
                <FlatList
                    onAdd={addGuitar}
                    data={gtrlist}
                    keyExtractor={item => item.id.toString()}
                
                    renderItem={({item}) => 
                        <Text 
                            style={styles.item}
                            onPress={() => 
                                navigation.navigate('Details', {item})
                            }
                            >
                            {item.year} {item.brand} {item.model}
                        </Text>
                    } 
                    
                />
            </View>
        )

}

export default Collection;