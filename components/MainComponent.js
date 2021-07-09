import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './Styles';
import Collection from './CollectionComponent';
//import { GUITARS } from '../shared/guitars';
import GuitarModal from './GuitarModal';

const Main = () => {
    
    //const [guitars, setGuitars] = useState({ GUITARS })


    
    return (
        
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                <Collection /> 
            </View>
            
        </View>
    );
    
};

export default Main;