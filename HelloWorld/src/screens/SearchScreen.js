import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import SearchBar from '../components/SearchBar.js'

export default function SearchScreen() {

    return(
    <View>
   <Text>Welcome to Search Screen</Text>
   <SearchBar/>
    </View>
    );
    }
const styles = StyleSheet.create({

});

