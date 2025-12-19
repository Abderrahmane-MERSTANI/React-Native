import React, { useContext } from "react";
import { View, Button } from "react-native";
import { myContext } from "../App";

export default function NewButtons() {
  const { myTitle, cpt, setCpt } = useContext(myContext);

  

  return (
    <View style={{ margin: 10 }}>

      <Button title={myTitle} onPress={() => setCpt(cpt + 1)} />

    </View>
  );
}
