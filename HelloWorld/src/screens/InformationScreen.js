import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function InformationScreen() {
    const [Info, setInfo] = useState([]);
    const [Name, setName] = useState('');
    const [FatherName, setFatherName] = useState('');
    const [RollNumber, setRollNumber] = useState('');

    const CheckInfo=()=>{
        const isDuplicate = Info.some(info => info.Name === Name && info.FatherName === FatherName && info.RollNumber === RollNumber);
        if (!isDuplicate){
            setInfo([...Info, { Name, FatherName, RollNumber}]);
            setName('');
            setFatherName('');
            setRollNumber('');
        }
        else{
            alert('This information already exists');
        }
    };

    return (
        <View>
            <Text>Name: </Text>
            <TextInput
                style={styles.Input}
                value={Name}
                placeholder="Enter Name"
                onChangeText={newValue => setName(newValue)}/>

            <Text>Father Name: </Text>
            <TextInput
                style={styles.Input}
                value={FatherName}
                placeholder="Enter Father Name"
                onChangeText={newValue => setFatherName(newValue)}/>

            <Text>Roll Number:</Text>
            <TextInput
                style={styles.Input}
                placeholder="Enter Roll Number"
                value={RollNumber}
                onChangeText={newValue => setRollNumber(newValue)}/>

            <Button title='Add Information' onPress={CheckInfo}/>

            <FlatList
                data={Info}
                renderItem={({item})=>{
                    return(
                        <Text style={styles.textStyle}>
                            Name: {item.Name} Father Name: {item.FatherName} Roll Number: {item.RollNumber}
                        </Text>
                    );
                }}
                />

        </View>
    );
}

const styles = StyleSheet.create({
    Input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 2
    },
    textStyle: {
        margin: 5,
        fontSize: 15,
        color: 'black'
    }
});
