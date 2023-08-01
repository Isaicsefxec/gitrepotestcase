import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import database from '@react-native-firebase/database';

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyDkkP-lbfjHNFGaQhpNvxSlv5G-8NU2vHI",
  authDomain: "myapp-e541f.firebaseapp.com",
  databaseURL: "https://myapp-e541f-default-rtdb.firebaseio.com",
  projectId: "myapp-e541f",
  storageBucket: "myapp-e541f.appspot.com",
  messagingSenderId: "58400767785",
  appId: "1:58400767785:web:3d80f62fd1b89d702a0138",
  measurementId: "G-WD8L2QKQCL"
};

if (!database.apps.length) {
  database.initializeApp(firebaseConfig);
}
const SimpleMessageApp = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = database().ref('messages');
    messagesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.values(data);
        setMessages(messageList);
      }
    });
  }, []);

  const handleSendMessage = () => {
    const newMessage = {
      text: message,
      timestamp: Date.now(),
    };
    const messagesRef = database().ref('messages');
    messagesRef.push(newMessage);
    setMessage('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item) => item.timestamp.toString()}
      />
      <TextInput
        value={message}
        onChangeText={(text) => setMessage(text)}
        placeholder="Type your message"
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Button onPress={handleSendMessage} title="Send" />
    </View>
  );
};

export default SimpleMessageApp;

