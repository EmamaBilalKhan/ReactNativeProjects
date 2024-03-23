import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar(props) {
  const [showText, setShowText] = useState(false);

  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => setShowText(true)}>
        <Feather name="search" style={styles.iconStyle} />
      </TouchableOpacity>
      {showText && <TextInput style={styles.input} placeholder='Search'
       value={props.term}
       onChangeText={()=>props.onTermChange()}
       onSubmitEditing={()=>props.onTermSubmit()}
       />}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#CCCCCC',
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 16,
    padding:20,
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    fontSize:16,
},
});
