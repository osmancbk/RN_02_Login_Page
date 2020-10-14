import React from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';

const Button = ({text}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#82ada9',
        padding: 20,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 10,
        
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
    
})
export {Button}

