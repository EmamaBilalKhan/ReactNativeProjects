import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ImageDetail from "../components/ImageDetail"

export default function ImageScreen() {
  return (
    <View style={styles.viewStyle}>
    <Text>Images</Text>
      <ImageDetail imageSource={require('../../assets/mountain.jpeg')}
      title="mountain"
      />
    <ImageDetail imageSource={require('../../assets/beach.jpeg')}
    title="beach"
           />
    <ImageDetail imageSource={require('../../assets/forest.jpeg')}
    title="forest"
          />
  
    </View>
  );
}

const styles = StyleSheet.create({


    });
