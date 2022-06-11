import React, { Component } from "react";


import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Tab = createBottomTabNavigator();


class Menu extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={ Home }/>
                    <Tab.Screen name="Login" component={ Login }/>
                    <Tab.Screen name="Register" component={ Register }/>
                </Tab.Navigator>
            </NavigationContainer>


        )
    }
}

export default Menu;