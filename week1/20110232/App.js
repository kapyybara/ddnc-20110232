import {  Text, View,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import  { useEffect } from 'react';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 10000);

    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View>
      <Text>Trần Diệp Phưong Vy</Text>
      <Text>20110232</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Profile'>
        <Stack.Screen
          name="Home"
          component={HomeScreen} 
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" options={{title: 'Profile'}} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;