import { StyleSheet,View, Text } from "react-native";
import React, { useState, createContext } from "react";
import NewButtons from "./Components/NewButtons";

export const myContext = createContext(null);

export default function App() {

    const [cpt, setCpt] = useState(0);
    

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        <myContext.Provider value={{myTitle:"Titre de mon button",cpt,setCpt}}>

            <NewButtons />

            <Text style={{ fontSize: 26, fontWeight: "bold", marginTop: 20, color: "#333" }}>{cpt}</Text>

        </myContext.Provider>
    </View>
  );
}
