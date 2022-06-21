import React, { Component } from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from "../screens/Login";
import Register from "../screens/Register";
import Menu from "../components/Menu";
import Comments from "../screens/Comments";
import { auth, db } from "../firebase/config";


class MainNavigation extends Component{
    constructor(props){
        super(props)
        this.state={
            loggedIn: false,
            registerError: "",
            loginError:"",
        }
    }

    componentDidMount(){
       auth.onAuthStateChanged(user => {
        if(user){
            this.setState({
                loggedIn:true
            })
        }
    })

    }

    login(mail, pass){
        auth.signInWithEmailAndPassword(mail,pass)
        .then(response => this.setState({
            loggedIn:true})) 

        .catch( error => {
                console.log(error);
                this.setState({
                     loginError: error.message
                })
            })      
    

    }

    register(mail, pass, userName){
        auth.createUserWithEmailAndPassword(mail, pass)
        .then( responseRegister => {
            console.log(responseRegister);
            db.collection('users').add({
                email: mail,
                userName: userName,
                createdAt: Date.now(),
            })
            .then( responseUsers => this.setState({
                loggedIn:true,
            }))
            .catch(error => console.log(error))
        })
        .catch( error => {
            console.log(error);
            this.setState({
                 registerError: error.message
            })
        })      

    }

    logout(){
        auth.signOut()
            .then(response => this.setState({
                loggedIn: false
            }))
            .catch( error => console.log(error))

    }

    render(){
        console.log('En el render del menu: ' + this.state.registerError);
        console.log('En el render del menu: ' + this.state.loginError);

        return(
            <NavigationContainer>
                
                <Stack.Navigator>

                    {
                        this.state.loggedIn ? 
                        <Stack.Group >
                             <Stack.Screen
                        name="Menu"
                        component={ Menu }
                        options={{headerShown: false}}
                        initialParams = {{ logout: ()=> this.logout()}}
                    />
                    <Stack.Screen 
                    name="Comments"
                    component={ Comments }
                     />
                        </Stack.Group>
                    :
                   <Stack.Group>
                   <Stack.Screen
                        name="Login"
                        
                        options={{headerShown: false}}
                        initialParams = {
                            {   login: (mail, pass)=>this.login(mail, pass),
                                
                            }}
                            children = {(navigationProps)=><Login errores={this.state.loginError} {...navigationProps}/>}

                    />
                    <Stack.Screen
                        name="Register"
                        options={{headerShown: false}}
                        initialParams = {{register: (mail, pass, userName)=>this.register(mail, pass, userName)}}
                        children = {(navigationProps)=><Register errores={this.state.registerError} {...navigationProps}/>}
                    />
                    </Stack.Group>

                     }

                </Stack.Navigator>

                 

            </NavigationContainer>
        )
    }

}


export default MainNavigation;
