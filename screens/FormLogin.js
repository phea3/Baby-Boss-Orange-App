import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const FormLogin = ({navigation}) => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image 
      style={styles.image} 
      source={require("../assets/secret.png")}
      contentFit= 'none'
      transition={1000}
      /> 
      <Text style={styles.text_title}>
        Welcome back baby girl
      </Text>
      <Text style={styles.text_text}>
        Sign in to continue
      </Text>
      <View style={styles.inputView}>
        <Image 
            style={styles.icon}
            source={require("../assets/envelope.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
      <Image 
            style={styles.icon}
            source={require("../assets/lock.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "80%",
        }}
      >
        <View style={styles.remember}>
            <Image 
                style={styles.check}
                source={require("../assets/check-circle.png")}
            />
            <Text style={styles.remember_me}>
                Remember me
            </Text>
        </View>

        <TouchableOpacity>
            <View>
                <Text style={styles.forgot_button}>Forgot Password?</Text> 
            </View>
        </TouchableOpacity> 
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate('Menu') }>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 50,
    },
    inputView: {
      backgroundColor: "#D2E6EE",
      borderRadius: 30,
      width: "70%",
      height: 50,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: "flex-start",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
    },
    forgot_button: {
        color: '#ff0000',
        fontSize: 15,
        height: 50,
        paddingVertical: 10,
        fontWeight: '500',
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#0081CF",
    },
    loginText:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text_title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0081CF',
        marginBottom: 20,
    },
    text_text: {
        fontSize:18,
        fontWeight: '500',
        color: '#000000',
        marginBottom: 25,
    },
    icon: {
        marginLeft: 20,
        marginTop: 15,
        width: 20,
        height: 20,
    },
    remember:{
        flexDirection: 'row',
    },
    remember_me: {
        fontSize: 15,
        height: 50,
        padding: 10,
        fontWeight: '500',
    },
    check: {
        marginTop: 10,
        width: 20,
        height: 20,
    }
  });
export default FormLogin