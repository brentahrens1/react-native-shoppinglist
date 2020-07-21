import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, StyleSheet, Alert } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [ items, setItems ] = useState([
    { id: 1, textValue: 'Milk' },
    { id: 2, textValue: 'Eggs'},
    { id: 3, textValue: 'Steak'},
    { id: 4, textValue: 'Veggies'}
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (textValue) => {
    if (!textValue) {
      Alert.alert('Error', 'Please enter an item', {text: 'OK'})
    } else {
      setItems(prevItems => {
        return [{id: Math.floor(Math.random() * 1000) + 1, textValue}, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} /> } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App

