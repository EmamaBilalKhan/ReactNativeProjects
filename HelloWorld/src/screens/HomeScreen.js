import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
     <TouchableOpacity style={styles.viewStyle}
        onPress={()=>navigation.navigate('Image')}>
        <Text style={styles.textStyle}>Go to Image Screen</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.viewStyle}
         onPress={()=>navigation.navigate('Counter')}>
         <Text style={styles.textStyle}>Go to Counter Screen</Text>
     </TouchableOpacity>
      <TouchableOpacity style={styles.viewStyle}
         onPress={()=>navigation.navigate('Text')}>
         <Text style={styles.textStyle}>Go to Text Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewStyle}
          onPress={()=>navigation.navigate('Flat')}>
          <Text style={styles.textStyle}>Go to Flat Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewStyle}
           onPress={()=>navigation.navigate('Color')}>
           <Text style={styles.textStyle}>Go to Color Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewStyle}
           onPress={()=>navigation.navigate('Square')}>
           <Text style={styles.textStyle}>Go to Square Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewStyle}
            onPress={()=>navigation.navigate('Search')}>
            <Text style={styles.textStyle}>Go to Search Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewStyle}
             onPress={()=>navigation.navigate('Information')}>
             <Text style={styles.textStyle}>Go to Information Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle:{
  backgroundColor:'blue',
  borderRadius: 40,
  padding:12,
  margin:10
  },
  textStyle:{
  fontSize: 15,
  color:'white',
  fontWeight:'bold',
  alignSelf:'center'
  }

    });

{/*
The status bar is a small area at the top of a mobile device's screen that displays various system information, such as the time, battery level, network connection status, and notifications. In React Native, the StatusBar component is provided to control the appearance of this status bar within your application.

The HomeScreen function accepts a navigation prop because it needs to navigate to other screens within the application.

  TouchableOpacity:

  TouchableOpacity is a component provided by React Native that wraps its children and provides touchable feedback when pressed.
  It's a flexible component that allows you to customize its appearance using styles.
  TouchableOpacity does not have any predefined visual appearance; you need to define the styles for the touchable area and its children.
  It's commonly used when you need custom touchable elements with more flexibility in styling.

  Button:

  Button is a built-in component provided by React Native that renders a standard system button.
  It has a predefined appearance that depends on the platform (iOS or Android) and follows the platform's UI guidelines.
  Button does not offer as much customization as TouchableOpacity; its appearance is determined by the platform's default button styles.
  It's commonly used for basic actions or interactions where the standard system button appearance is sufficient.
  Here are some key differences between TouchableOpacity and Button:

  Customization: TouchableOpacity allows for more customization of appearance using styles, whereas Button has a fixed appearance based on the platform's UI guidelines.

  Feedback: TouchableOpacity provides touchable feedback by changing its opacity when pressed, while Button typically provides feedback through visual changes like color or elevation.

  Usage: TouchableOpacity is often used when you need custom touchable elements or when you want to control the appearance of the touchable area and its children. Button is used for standard system buttons that follow platform conventions.
*/}