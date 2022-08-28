import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import Login  from './components/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

export default function App() {
  var [gridView, setGridView] = useState("false");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home}  options={{title:"Noted!", gestureEnabled: false, 
          headerStyle: {
            backgroundColor: "#6699CC"
          },
          headerBackVisible: false,
          headerTintColor: "#fff",        
          headerLeft: ()=> {
            return (
              <TouchableOpacity style={{ paddingRight: 8 }}>
                <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()}/>
              </TouchableOpacity>  
            )          
          },
          headerRight: () => {
    return (
        <>
        <TouchableOpacity style={{ paddingRight: 8 }}> 
         <Icon name={gridView ? "grid" : "grid-off"} size={24} color="white" onPress={() => {
              setGridView(!gridView);
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingRight: 8 }}>
          <Icon name="plus" size={24} color="white"
            onPress={() => {
              
            }}
          />
        </TouchableOpacity>
        </>
    );
  },
          }}/>
        {/* <Stack.Screen name="Detail" component={Details} options={{title:"Note Detail"}}  />       */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
