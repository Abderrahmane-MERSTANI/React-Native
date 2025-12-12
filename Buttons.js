import { View, Button } from 'react-native';

export default function Buttons(args) {
  return (
    <View style={{ flexDirection: "row", gap: 10}}>
      <Button title={args.title1} />
      <Button title={args.title2} />
    </View>
  );
}


