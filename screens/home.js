import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const HelloWorldApp = ({navigation}) => {
  var test;
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const takePicture = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image);
      test = image.path;
      uploadImage();
    });
  };

  const selectFile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      console.log(image);
      setImage(image);
      test = image.path;
      uploadImage();
    });
  };

  const uploadImage = async () => {
    const uri = test;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = uri;

    setUploading(true);
    setTransferred(0);

    const task = storage().ref(filename).putFile(uploadUri);

    //set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
      );
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    setUploading(false);

    Alert.alert(
      'Photo uploaded!',
      'your photo has been uploaded to firebase coloud storage!',
    );

    setImage(null);
  };
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Facial Editor</Text>
      <View style={styles.space1} />

      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <View style={styles.row}>
          <Text style={styles.buttonText}>Take Picture</Text>
          <Image
            source={require('../img/camera.png')}
            style={styles.cameraIcon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={selectFile}>
        <View style={styles.row}>
          <Text style={styles.buttonText}>Select File</Text>
          <Image
            source={require('../img/document.png')}
            style={styles.docIcon}
          />
        </View>
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
    height: 100,
  },
  buttonText: {
    marginLeft: 30,
    marginTop: 26,
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    marginRight: 30,
    marginTop: 30,
    width: 65,
    height: 40,
  },
  docIcon: {
    marginRight: 40,
    marginTop: 24,
    width: 40,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space1: {
    width: 1,
    height: 200,
  },
});

export default HelloWorldApp;
