import React,{useContext} from 'react';
// import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'expo';
import MainTabNavigation from './navigations/maintab';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import DiaryScreen from './screens/DiaryScreen'
import breakfast from './screens/breakfast'
import { StoreProvider } from "./src/stores/mestore"
import { StoreContext } from "./src/stores/mestore";
const Stack = createStackNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE";
const FIRST_STATE_KEY = "FIRST_STATE";


const App = () => {
  const {LoadingCompleteState,NavigationState}=useContext(StoreContext);
  const [isLoadingComplete, setLoadingComplete]=LoadingCompleteState;
  const [initialNavigationState, setInitialNavigationState]=NavigationState;
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
        console.log(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
        
      }
    }
    loadResourcesAndDataAsync();
  }, []);


  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
     
        <NavigationContainer
          initialState={initialNavigationState}
          onStateChange={(state) =>{
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
            
            
            
          }
          }
        >
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="FirstScreen" component={FirstScreen} />
        <Stack.Screen options={{headerShown: false}} name="SecondScreen" component={SecondScreen} />
        <Stack.Screen options={{headerShown: false}} name="ThirdScreen" component={MainTabNavigation} />      
      
        <Stack.Screen options={{headerShown: false}} name="diary" component={DiaryScreen} />
        <Stack.Screen  options={{headerShown: false}} name="breakfast" component={breakfast} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
export default  () => {
  return (
   <StoreProvider>
     <App />
   </StoreProvider>
  )};

