import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNav from './navigation/signedIn/TabNav';
import StartApp from './StartApp';
import './config/firebase';
import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StartApp/>
      </ThemeProvider>
    </SafeAreaProvider>    
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
