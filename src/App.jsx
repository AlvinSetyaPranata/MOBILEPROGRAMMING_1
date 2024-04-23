import {StyleSheet, Text, View, Alert, FlatList} from 'react-native';
import React from 'react';
import Kotak from './Kotak';
import Tombol from './Tombol';

const Data = [          
  {id: 1, lable: 'Click'},
  {id: 2, lable: 'Cancel'},
  {id: 3, lable: 'Save'}, 
];

const App = () => {
  return (
    <View>
      <Text style={styles.tulisan}>App</Text>
      <Kotak />
      <Tombol 
        lable={'Klik'}
        onPress={() => Alert.alert('Info' ,'Hai keren kan!')}
        />
        <Tombol lable={'Save'} onPress={() => Alert.alert('Info','Haloo')} /> 
        <FlatList
          data={Data}
          renderItem={({item}) => <Tombol lable={item.lable} />}
          keyExtractor={item => item.id}
          horizontal={true}
         />
      </View>
    )
};


export default App

const styles = StyleSheet.create({})