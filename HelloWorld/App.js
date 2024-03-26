import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen'
import TextScreen from './src/screens/TextScreen'
import FlatScreen from './src/screens/FlatScreen'
import ColorScreen from './src/screens/ColorScreen'
import SquareScreen from './src/screens/SquareScreen'
import SearchScreen from './src/screens/SearchScreen2'
import InformationScreen from './src/screens/InformationScreen'
import WeatherScreen from './src/screens/WeatherScreen'
const Stack = createNativeStackNavigator();

function App(){
    return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Image" component={ImageScreen}/>
    <Stack.Screen name="Counter" component={CounterScreen}/>
    <Stack.Screen name="Text" component={TextScreen}/>
    <Stack.Screen name="Flat" component={FlatScreen}/>
    <Stack.Screen name="Color" component={ColorScreen}/>
    <Stack.Screen name="Square" component={SquareScreen}/>
    <Stack.Screen name="Search" component={SearchScreen}/>
    <Stack.Screen name="Information" component={InformationScreen}/>
    <Stack.Screen name="Weather" component={WeatherScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;

//In React Native, the App component typically represents the root component of the application. It's the top-level component that wraps all other components, providing the entry point for the application's UI. By exporting App as the default export, you make it accessible for other parts of your application or other files to import and use it.
//When you define export default App;, you're saying that when another file imports from this file using import App from './App';, it will import the App component.

//NavigationContainer:
// The NavigationContainer is a fundamental component provided by the React Navigation library.
//  It wraps the entire application and provides a context for all the navigation-related functionality.
//  This container is responsible for managing the navigation state of the application and providing it to its child components.
//  It's essential for initializing the navigation system and enabling navigation functionality throughout the app.

//Stack Navigator:
//The stack navigator, created using createNativeStackNavigator, is a specific type of navigator provided by React Navigation.
//It manages navigation between screens using a stack-based approach, where screens are pushed onto and popped off of a navigation stack.
//Stack navigators are useful for managing hierarchical navigation structures, where screens are stacked on top of each other, and users can navigate back through the stack.
//The stack navigator manages screens using a Last In, First Out (LIFO) approach, similar to a stack data structure.
//When you navigate from one screen to another, the new screen is pushed onto the top of the stack. If you navigate back, the current screen is popped off the stack, and the previous screen becomes active again.
//Therefore, the order in which you define screens within the stack navigator determines the navigation flow of your application. The first screen defined will be the initial screen shown when the stack navigator is first rendered. Subsequent screens will be pushed onto the stack as users navigate deeper into your app, and popped off as users navigate back.