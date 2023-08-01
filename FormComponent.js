import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView,StyleSheet,Image } from 'react-native';
 

const AddData= () => {
  const [crno, setCrno] = useState(""); // State variable for crno input value
  const [Law, setLaw] = useState("");
  const [name, setname] = useState("");
  const [error, setError] = useState(""); // State variable for error message

  const handlePress = () => {
    // Validate if crno is not empty
    if (!crno || !Law || !name) {
      setError("This feild  is required!");
    }
    else {
      setError(""); // Reset error state variable
      // Call dataAddon function to add data to Firebase database
      dataAddon();
    }
  };

  const dataAddon = () => {
    set(ref(db, "mydata/" + crno), {
      crno: crno,
      Law:Law,
      name:name,
     
    });
    setCrno("");
    setLaw("");
    setname("");
   
  };
  return (

       <ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}>----Please type N/A if it not Applicable </Text>
      <Text style={styles.header}>Add ** If the data is not sure ---- </Text>
      <TextInput
        value={crno}
        onChangeText={(text) => setCrno(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="CRNO"
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={Law}
        onChangeText={(text) => setLaw(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Selection of Law * "
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={name}
        onChangeText={(text) => setname(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Name * "
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <Button title="Submit" onPress={handlePress} />
    </View>
    </ScrollView>
  );
  };

  
export default AddData;
const styles = StyleSheet.create({
  container: {
   
    
    
  },
  header: {
    fontSize: 15,
    textAlign: "center",
  },

  input: {
    
  },
  output:{
   height:100,
   width:100,
   alignItems:'center'

  }
  
  
});
