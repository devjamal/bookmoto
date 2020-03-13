import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator,Image, View, Text,TouchableOpacity, Alert } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';







export default function Register({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const register = async() => {
        setShowLoading(true);
        try {
            const doRegister = await auth().createUserWithEmailAndPassword(email, password);
            setShowLoading(false);
            if(doRegister.user) {
                navigation.navigate('Home');
            }
        } catch (e) {
            setShowLoading(false);
            Alert.alert(
                e.message
            );
        }
    };

    return (
        <View style={styles.container}>
             <Text
            style={{
              backgroundColor: 'transparent',
              textAlign: 'center',
              fontSize: 30,
            }}>
            Namaste!
          </Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              textAlign: 'center',
              fontSize: 20,
            }}>
            #1 BookMoto in India{' '}
          </Text>
          <Image
          style={{ height: 100, width: 102, justifyContent:'center',marginTop:30}}
          source={require('../../assets/images/logo.png')}
        />
            <View style={styles.formContainer}>
              
                <View style={styles.subContainer}>
                    <Input
                        style={styles.textInput}
                        placeholder='    Your Email'
                        leftIcon={
                            <Icon
                            name='mail'
                            size={24}
                            />
                        }
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Input
                        style={styles.textInput}
                        placeholder='     Your Password'
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            />
                        }
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              alert('Registration Successful');
            }}>
                <View style={styles.subContainer}    >
                    <Button     buttonStyle={{
         backgroundColor: "#F0D014",borderRadius:20,
      }}
                        style={styles.textInput}
                        icon={
                            <Icon
                                name="check-circle"
                                size={18}
                                color="black"
                            />
                        }
                        title="Register"
                        onPress={() => register()} />
                </View>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Already a user?</Text>
                </View>
            
                <View style={styles.subContainer}>
                    <Button
                        buttonStyle={{
                            backgroundColor: "#0B2EF4",borderRadius:20,
                         }}
                        icon={
                            <Icon
                                name="input"
                                size={18}
                                color="white"
                            />
                        }
                        title="Login"
                        onPress={() => {
                            navigation.navigate('Login');
                        }} />
                </View>
                {showLoading &&
                    <View style={styles.activity}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }
            </View>
        </View>
    );
}

Register.navigationOptions = ({ navigation }) => ({
    title: 'Register',
    headerShown: false,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        height: 400,
        width:400,
        padding: 20
    },
    subContainer: {
        marginBottom: 20,
        padding: 5,
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18,
        margin: 5,
        width: 200,
    },
})