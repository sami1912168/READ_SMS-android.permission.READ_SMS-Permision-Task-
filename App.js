import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from 'react-native';

const App = () => {
  const proceed = () => {
    alert('You can  Read Sms');
  };

  const onPress = async () => {
    // We need to ask permission for Android only
    if (Platform.OS === 'android') {
      // Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'Example App READ_SMS Permission',
          message: 'Example App needs access to your READ_SMS',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        proceed();
      } else {
        // Permission Denied
        alert('READ_SMS Permission Denied');
      }
    } else {
      proceed();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}>
            <Text style={styles.textStyle}>
              Ask Permission for READ SMS
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
         
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
  },
});

export default App;