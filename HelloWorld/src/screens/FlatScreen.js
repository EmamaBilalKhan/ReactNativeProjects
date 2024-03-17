import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
export default function FlatScreen() {
const friends = [
{name:'Hamza', age:15},{name:'Hassan', age:16},{name:'Burhan', age:15},
]; //array of objects
    return(
    <FlatList
    data={friends}
    renderItem={({item})=>{
    return(
    <Text style={styles.textStyle}>
    {item.name} and {item.age}
    </Text>
    );
    }}
    />
    );
    }
const styles = StyleSheet.create({
textStyle:{
margin:20,
fontSize:20,
color: 'rgb(100,20,50)'
}
});