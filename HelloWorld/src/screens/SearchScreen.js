import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import SearchBar from '../components/SearchBar.js'
import yelp from "../API/yelp.js"

export default function SearchScreen() {
    const [term,setTerm] = useState('');
    const [results,setResults] = useState([]);
    const searchAPI=async()=>{
        const response = await yelp.get("/search",
        {params : {
            limit:50,
            term,
            location: 'Newyork'
        } });

        setResults(response.data.businesses);
    };

    return(
    <View>
   <SearchBar
    term={term}
    onTermChange={newTerm=>setTerm(newTerm)}
    onTermSubmit={()=>searchAPI()}
   />
   <Text>We have found {results.length} results</Text>
    </View>
    );
    }
const styles = StyleSheet.create({

});

