import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';


const Tombol = ({ lable, onPress}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
        <Text style={styles.lable}>{lable}</Text>
    </TouchableOpacity> 
  );
};

export default Tombol;

const styles = StyleSheet.create({
    box: {
        margin: 10,
        padding: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        borderRadius: 10,
        width: 100,
    },
    lable: {
        fontSize: 20,
        fontWeight:'bold',
    },
});