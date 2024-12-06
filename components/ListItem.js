import React, {useState} from 'react';
import { Text, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';

export default function ListItem({ element, deleteHandler, editHandler }) {
  const [itemEdit, setItemEdit] = useState(false);
  const [text, setText] = useState('');

  const itemChange = ()=> {
    if(itemEdit) {
      editHandler(element.key, text);
    }
    setItemEdit(!itemEdit);
  }

  return (
    <View style={styles.main}>
      {
        itemEdit ? <>
          <TextInput
            style={styles.valueItem}
            defaultValue={element.text}
            onChangeText={(value) => {
              setText(value);
            }}
            onBlur={itemChange}
          />
          <TouchableOpacity onPress={()=> itemChange()}> 
            <Text  style={[{backgroundColor: 'green'}, styles.edit, styles.buttons]}>
              Save
            </Text>
          </TouchableOpacity>
        </> : <>
          <Text style={[styles.valueItem, styles.text]}>{element.text}</Text>
          <TouchableOpacity onPress={()=> itemChange()}> 
            <Text  style={[{backgroundColor: 'dodgerblue'}, styles.edit, styles.buttons]}>
              Edit
            </Text>
          </TouchableOpacity>
        </>
      }
      <TouchableOpacity onPress={()=> deleteHandler(element.key)}> 
        <Text style={[styles.del, styles.buttons]}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginTop: 20,
  },
  valueItem: {
    width: '45%',
    height: 50,
    textAlign: 'center',
    backgroundColor: '#fafafa',
    borderWidth: 1.5,
    marginLeft: '20%',
  },
  text: {
    lineHeight: 50,
  },
  buttons: {
    width: 40,
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    fontWeight: 600,
    color: 'white',
  },
  del: {
    backgroundColor: 'red',
    fontSize: 30,
  },
  edit: {
    fontSize: 15,
  }
});
