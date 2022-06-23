import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../firebase/config";

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password:"",
            nombreDeUsuario:"",

        }
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
                <TouchableOpacity onPress={()=>this.props.route.params.register(this.state.email, this.state.password)}>
                    <Text style={styles.subtitulos}>Registrarme</Text>
                    
                </TouchableOpacity>
        <Text style={styles.subtitulos}>El error es: {this.props.errores}</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
                    <Text style={styles.subtitulos}>Ya tengo cuenta </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop: 10,
        backgroundColor:'#8f0fd9',
        height:730
    },
    title:{
        marginBottom:20,
        fontSize:55,
        fontWeight:500,
        paddingLeft:250
    },
    field:{
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 2,
        padding:3,
        marginBottom:8,
        fontWeight:500,
    },
    subtitulos:{
        fontWeight:400,
        fontSize:25,
        padding:10,
    },
})

export default Register;