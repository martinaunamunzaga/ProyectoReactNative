import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from "../screens/Login";
import Register from "../screens/Register";
import Menu from "../components/Menu";
import Comments from "../screens/Comments";


class MainNavigation extends Component{
    constructor(props){
        super(props)
        this.state={
            loggedIn: false,
        }
    }

    componentDidMount(){

    }

    login(){

    }

    register(){

    }

    logout(){

    }

    render(){
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
                        component={ Login }
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Register"
                        component={ Register }
                        options={{headerShown: false}}
                    />
                    </Stack.Group>

                     }

                </Stack.Navigator>

                 

            </NavigationContainer>
        )
    }

}


export default MainNavigation;
