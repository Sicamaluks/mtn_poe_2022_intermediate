import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View , TouchableOpacity,} from 'react-native';
import { Login, Home, NoteDetail, Registration }  from './components/screens/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import app from './config/firebase'

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  var [gridView, setGridView] = useState(false);
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  if (loading) {
  return <></>
  }

  useEffect(() => {
    const usersRef = app.firestore().collection('users');
    app.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  
  return (  
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#6699CC" }, headerTintColor: "#fff"}}>
        {
          user ? (
          <>
            <Stack.Screen name="Home" options={({navigation})=>({title:"Noted!", headerBackVisible: false,       
            headerLeft: ()=> {
              return (
                <TouchableOpacity style={{ paddingRight: 8 }}>
                  <Icon name="menu" size={24} color="white" onPress={() => {}}/>
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
                    <Icon name="logout" 
                      size={40} color="orange" 
                      onPress={() => {
                        app.auth().signOut().then(() => setUser(!user));                        
                      }}
                    />
                  </TouchableOpacity>
                </>
              ); }, })}>
                 {props => <Home {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name='NoteDetail' component={NoteDetail}/>
          </>
          ): (
          <>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
          </>  
          )
        }        
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
