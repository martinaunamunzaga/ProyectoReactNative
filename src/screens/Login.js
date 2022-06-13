import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../firebase/config";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password:"",
            

        }
    }

    login(mail, pass){
        console.log(this.state)
        auth.signInWithEmailAndPassword(mail, pass)
           .then(response => console.log(response))
           .catch(error => console.log(error))
    }

    render(){
        console.log(this.state.email);
        console.log(this.state.password);
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                
                <TextInput
                    style={styles.field}
                    keyboardType="default"
                    placeholder="Email"
                    onChangeText={ text => this.setState({ email: text})}
                />
                <TextInput
                    style={styles.field}
                    keyboardType="default"
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={ text => this.setState({ password: text})}
                />
                <TouchableOpacity onPress={()=>this.login(this.state.email, this.state.password)}>
                    <Text>Loguearme</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Register") }>
                    <Text>No tengo cuenta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop: 10
    },
    title:{
        marginBottom:20
    },
    field:{
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 2,
        padding:3,
        marginBottom:8

    }
})

export default Login;