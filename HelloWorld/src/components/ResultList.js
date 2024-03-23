import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity,FlatList ,Text} from 'react-native';


export default function ResultList(props) {
  

  return (
    <View>
        <Text style={styles.headingText}>{props.title}</Text>
        <FlatList
        data={props.result}
        renderItem={({item})=>{
            return <Text>{item.name} -- </Text>

        }
        }
        
        
        
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  headingText:{
    fontWeight:"bold",
    fontSize:15,
    backgroundColor:"#BE7B72",
    width:100,
    borderRadius:5
}

});
