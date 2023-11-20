import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style ={styles.test}>Open up App.js to start working on your app!</Text>
      <Button title='Click me '/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test : {
    backgroundColor : '#3cb371'
  }

});