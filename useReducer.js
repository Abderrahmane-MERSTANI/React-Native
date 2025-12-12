import axios from 'axios';
import { useEffect, useState, useRef, useMemo, useReducer } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
    const [nbr, dispatchnbr] = useReducer((reducer, 0);
    function reducer(currentNbr, action){
        switch(action){
            case '+': return currentNbr + 1;
            case '-': return currentNbr - 1;
            case 'RAZ': return 0;
        }
    }
    

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', gap:10}}>
            <Button title="+" onPress={()=>dispatchnbr('+')} />
            <Button title="-" onPress={()=>dispatchnbr('-')} />
            <Button title="RAZ" onPress={()=>dispatchnbr('RAZ')} />
        </View>
        <Text>{nbr}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error:{
    color:"rgba(253, 251, 251, 1)",
    marginBottom:10,
    backgroundColor:"rgba(241, 12, 12, 1)",
    padding:5,
  },
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 200,
    marginBottom: 15,
    borderRadius: 5,
  },
});
