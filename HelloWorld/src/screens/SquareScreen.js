import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import ColorChanger from '../components/ColorChanger.js';

export default function SquareScreen() {
    const [colors, setColors] = useState([0,0,0]);
    const colorIncrement = 15;

    const setColor =(index, change)=>{
        const newColors = [...colors];
        newColors[index]+= change;
        newColors[index] = Math.min(255,Math.max(0, newColors[index]));
        setColors(newColors);
    };

    return (
        <View>
            <Text>SQ screen</Text>
            <ColorChanger
                color='red'
                onIncrease={() => setColor(0, colorIncrement)}
                onDecrease={() => setColor(0, -colorIncrement)}
            />
            <ColorChanger
                color='green'
                onIncrease={() => setColor(1, colorIncrement)}
                onDecrease={() => setColor(1, -colorIncrement)}
            />
            <ColorChanger
                color='blue'
                onIncrease={() => setColor(2, colorIncrement)}
                onDecrease={() => setColor(2, -colorIncrement)}
            />
            <View style={{marginTop:10, height: 100, width: 100, backgroundColor: `rgb(${colors[0]},${colors[1]},${colors[2]})`, alignSelf:'centre'}}></View>
        </View>
    );
}
