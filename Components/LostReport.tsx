import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Home from './Home';



 const LostReport = ({navigation}) => {
  return (
    <View>
        <Text>Create Lost Item Report</Text>
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
});


export default LostReport;