import React, { useState } from 'react';
import {FlatList, View} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Buy milk', key: '1'},
    {text: 'Buy meat', key: '2'},
    {text: 'Buy froot', key: '3'},
    {text: 'Buy pottato', key: '4'},
  ])

  const addHandler = (text)=> {
    setListOfItems([{key: listOfItems.length, text}, ...listOfItems])
  }

  const deleteHandler = (key)=> {
    const newArray = listOfItems.filter(item => item.key !== key);
    setListOfItems(newArray);
  }

  const editHandler = (key, text)=> {
    const newArray = listOfItems.map(item => {
     if(item.key === key) item.text = text;
     return item
    });
    setListOfItems(newArray);
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({item})=> (
          <ListItem element={item} deleteHandler={deleteHandler} editHandler={editHandler} />
        )}/>
      </View>
    </View>
  );
}
