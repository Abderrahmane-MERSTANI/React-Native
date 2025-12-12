import axios from 'axios';
import { useEffect, useState, useRef, useMemo } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    const a = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            a.current.focus();
        }, 500);
    }, []);
    const zdt = useMemo(()=>{
        let nbr=1;
        for(let i=0;i<100;i++){
            nbr+=1;
        }
        return nbr;
    }, []);
    console.log(zdt);
    

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nom" ref={a}/>
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
