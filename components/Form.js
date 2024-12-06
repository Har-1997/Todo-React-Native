import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default function Form({addHandler}) {
  const [text, setText] = useState('')

  const onChange = (value)=> {
    setText(value)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="write products ..."
      />
      <Button
        style={styles.button}
        title='Add product'
        onPress={()=> addHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  },
  button: {
    backgroundColor: 'red',
    color: 'red',
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: 'solid'
  }
});






