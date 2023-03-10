import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

 const PrivateMessage = ({navigation}) => {

  return (
    <View style={styles.container}>
        <View style={styles.vertical}>
            <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/>
            <Button
                title="Logout"
                onPress={() =>
                    navigation.navigate('Login')}
            />
        </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vertical: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  }
});


export default PrivateMessage;