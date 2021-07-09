import React, { useState } from 'react';
//import { GUITARS } from '../shared/guitars';
import styles from './Styles';
import { Button, FlatList, View, Text, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GuitarModal from './GuitarModal';
//import { StyleSheet } from 'react-native';

const Collection = () => {

    const navigation = useNavigation();

    const [showAddGuitar, setShowAddGuitar] = useState(false);

    const [gtrlist, setGtrlist] = useState([
        {
            id: 1,
            brand: "Ibanez",
            model: "ANB205",
            year: 2019,
            sn: "001",
            favorite: false,
            description: "Ash body, Red Trans, Maple board",
            image: '../public/assets/fenderjazz2.png',
            history: []
        },
        {
            id: 2,
            brand: "Yamaha",
            model: "TRB/P-II",
            year: 2000,
            sn: "1233",
            favorite: false,
            description: "Natural",
            image: '../public/assets/fenderjazz1.png',
            history: []
        }
    ]);

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
            <View
            onAdd={() => setShowAddGuitar(!showAddGuitar)}
            showAdd={showAddGuitar}
            >
                {showAddGuitar && <GuitarModal onAdd={addGuitar}/>}
                {(gtrlist.length > 0) ? (
                <FlatList
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
                ) : <p>Collection empty</p>
                }
                <View>
                    <Button
                        title='Add New Guitar'
                        style={[styles.footer, styles.button, styles.buttonOpen]}
                        onPress={() => 
                            {showAddGuitar && <GuitarModal onAdd={addGuitar} />
                        }}
                    >
                    </Button>
                </View>
            </View>
        )

};
export default Collection;