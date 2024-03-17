import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

export default function SearchBar() {

const [Enable, setEnable] = useState(false);

const updateEnable=()=>{
setEnable(!Enable);
}

    return(
  <View style={styles.background}>
    <Feather name="search" style={styles.iconStyle} onPress={()=>updateEnable()} />
    <TextInput
    placeholder='Search'
    editable = {Enable}
    />
  </View>
    );
    }
const styles = StyleSheet.create({
background:{
backgroundColor:'#CCCCCC',
flexDirection:'row',
borderRadius:15
},
iconStyle:{
fontSize: 35,
marginHorizontal:20,
alignSelf:'center'
}

});