import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const takePicture = () => {};
const selectFile = () => {};

const HelloWorldApp = () => {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Facial Editor</Text>
      <View style={styles.space1} />

      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={selectFile}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    textAlign: 'center',
    width: '90%',
    margin: 10,
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    color: '#000000',
  },
  button: {
    backgroundColor: '#51BAC9',
    marginTop: 10,
    marginBottom: 10,
    height: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
  space1: {
    width: 1,
    height: 200,
  },
});
export default HelloWorldApp;
