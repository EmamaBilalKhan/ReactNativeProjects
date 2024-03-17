import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';
import {useState} from 'react';

export default function CounterScreen() {
    const button1text= "Increase";
    const button2text= "decrease";
    const [counter,setCounter] = useState(0); //inside the use state func is variable's initial value

    return (
    <View style={styles.viewStyle}>
    <Button title={button1text}
    onPress={()=>setCounter(counter+1)}
    />
    <Button title={button2text}
    onPress={()=>setCounter(counter-1)}
    />
    <Text>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({


    });
