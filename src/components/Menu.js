import React, { Component } from "react";


import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import AddPost from "../screens/AddPost";

const Tab = createBottomTabNavigator();


class Menu extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={ Home }/>
                    <Tab.Screen name="Profile" component={ Profile } initialParams={{logout:()=>this.props.route.params.logout()}}/>
                    <Tab.Screen name="Add Post" component={ AddPost }/>
                    
                </Tab.Navigator>
            


        )
    }
}

export default Menu;