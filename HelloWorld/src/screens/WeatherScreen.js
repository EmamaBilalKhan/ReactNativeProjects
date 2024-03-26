import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image} from 'react-native';
import axios from "axios";

export default function WeatherScreen() {
const [city, setCity] = useState('');
const [Weather, setWeather] = useState('');
const API_Key = "7ba8031e9eff62740b6f7c7d6eeecf1e";


const getData = async () =>{
try {
const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`);
const data = response.data;
setWeather({
temperature: data.main.temp,
feelsLike: data.main.feels_like,
humidity: data.main.humidity
});

}
catch(error){
console.error("not found",error);
}
};

    return(
    <View style={styles.container}>
    <Image
        style={styles.image}
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/024/533/991/non_2x/sun-with-clouds-denoting-concept-of-weather-in-trendy-style-premium-icon-vector.jpg' }}
    />
    <TextInput
    style={styles.inputStyle}
    placeholder="Enter City Name"
    value= {city}
    onChangeText={setCity}
    />

     <TouchableOpacity style={styles.btnStyle} onPress={() => getData()}>
          <Text style={styles.textStyle}>Get Weather</Text>
          </TouchableOpacity>

    {Weather && (
    <View style={styles.itemStyle}>
    <Text style={styles.listStyle}>Temperature: {Weather.temperature} C</Text>
    <Text style={styles.listStyle}>Feel Like: {Weather.feelsLike} C</Text>
    <Text style={styles.listStyle}>Humidity: {Weather.humidity} %</Text>
    </View>
    )}
    </View>
    );
    };
const styles = StyleSheet.create({
container:{
backgroundColor:"#fff",
flex:1,
justifyContent:'center'
},


inputStyle:{
backgroundColor:"#ffffff",
padding:20,
margin:20,
borderWidth:0.5,
borderRadius:8,
},

btnStyle:{
padding:20,
backgroundColor:'#0099ff',
alignSelf:'center',
borderRadius:16,
},
textStyle:{
color:'#fff',
fontWeight:'bold'
},
itemStyle:{
alignSelf:'center',
backgroundColor:'white',
padding:30,
borderRadius:10,
marginTop:20
},
listStyle:{
fontWeight:"bold",
margin:5,
fontSize:20,

},
image:{
        height:100,
        width:100,
        alignSelf:'center'
    }


});