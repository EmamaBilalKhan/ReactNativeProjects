import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, Image} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import {Feather} from '@expo/vector-icons';
import yelp from '../API/yelp.js';

const SearchScreen2 =()=>{
	const [term, setTerm]=useState('');
	const [results,setResults]=useState([]);
	
	const searchApi=async()=>{
	const response = await yelp.get('/search',
	{
		params:
		{
		limit:50,
		term,
		location: 'Newyork'	
		}
	}
	);
		setResults(response.data.businesses);
	};
	const filterByPrice=(price)=>{
		return results.filter(
		result=>{
			return result.price=price;
		}
		);
	}
	return(
		<View>
	<View style={styles.background}>
	<Feather style={styles.iconStyle} name="search"/>
	
	
	<TextInput
	placeholder="Search"
	value={term}
	onChangeText={newTerm=>setTerm(newTerm)}
	onSubmitEditing={()=>searchApi()}
	/>
	</View>
	<Text>We have found {results.length} restaurants</Text>
	<Text>Cost Effective</Text>
	<FlatList
	horizontal
	data={results}
	renderItem={({item})=>
		{
			return(
			<View>	
			<Text>{item.name} and {item.price} || </Text>
			<Image style={styles.imageSize} src={item.image_url}/>
			</View>
			)

		}
		
	}
	/>

	<Text>Bit Pricier</Text>
	<FlatList
	horizontal
	data={results}
	renderItem={({item})=>
		{
			return(
				<View>	
				<Text>{item.name} and {item.price} || </Text>
				<Image style={styles.imageSize} src={item.image_url}/>
				</View>
				)
		}
		
	}
	/>
	
	<Text>Big Spender</Text>
	<FlatList
	horizontal
	data={results}
	renderItem={({item})=>
		{
			return(
				<View>	
				<Text>{item.name} and {item.price} || </Text>
				<Image style={styles.imageSize} src={item.image_url}/>
				</View>
				)
		}
		
	}
	/>
	<Text>Burger Bachay</Text>
	<FlatList
	horizontal
	data={(results)}
	renderItem={({item})=>
		{
			return <Text>{item.name} and {item.price} || </Text>
		}
		
	}
	/>
	
	</View>
	);
};
const styles = StyleSheet.create({
	background:{
		backgroundColor:'#CCCCCC',
		flexDirection: 'row',
		borderRadius: 15
	},
	iconStyle:
	{
		fontSize:35,
		marginHorizontal:20,
		alignSelf:'center'
	},
	imageSize:{
		height:100,
		width:100
	}
});

export default SearchScreen2;