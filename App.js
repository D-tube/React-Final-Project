import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Button } from 'react-bootstrap';

const takePicture = () => {};
const selectFile = () => {};

const HelloWorldApp = () => {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Facial Editor</Text>
      <View style={styles.space1} />
      <Button
        style={styles.button}
        onPress={takePicture}
        title="Take Picture"
      />
      <View style={styles.space2} />
      <Button style={styles.button} onPress={selectFile} title="Select File" />
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
    color: '#51BAC9',
    marginTop: 20,
    marginBottom: 20,
    height: 100,
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
  space2: {
    width: 1,
    height: 20,
  },
});
export default HelloWorldApp;
