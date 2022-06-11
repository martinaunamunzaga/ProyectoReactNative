import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password:"",
            nombreDeUsuario:"",

        }
    }

    onSubmit(){
        console.log(this.state)
    }

    render(){
        console.log(this.state.email);
        console.log(this.state.password);
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
                <TextInput
                    style={styles.field}
                    keyboardType="default"
                    placeholder="Nombre de usuario"
                    onChangeText={ text => this.setState({ nombreDeUsuario: text})}
                />
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
                <TouchableOpacity onPress={()=>this.onSubmit()}>
                    <Text>Registrarme</Text>
                    
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

export default Register;