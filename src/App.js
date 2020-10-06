import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBox}>
        <Image style={styles.img} source={require('./image/bsk.png')} />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="E-posta giriniz"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre giriniz"
          keyboardType="visible-password"
        />
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.buttonIn}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonIn}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonBoxBottom}>
        <Button title="<<" color="#546E7A" />
        <Button title=">>" color="#546E7A" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1000,
    backgroundColor: '#80CBC4',
  },
  imageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputBox: {
    flex: 1,
  },

  buttonBox: {
    flex: 1.3,
  },

  buttonIn: {
    backgroundColor: '#546E7A',
    paddingHorizontal: 50,
    marginHorizontal: 100,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    color: 'white',
  },

  buttonText: {
    color: 'white',
    fontSize: 15,
  },

  buttonBoxBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  img: {
    width: 150,
    height: 150,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
});
