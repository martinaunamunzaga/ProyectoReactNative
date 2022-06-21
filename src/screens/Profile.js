import React, { Component } from "react";
import { Text, View, TouchableOpacity, Touchable} from "react-native";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View>
                <Text> Mi perfil </Text>
                <TouchableOpacity onPress={()=>this.props.route.params.logout()}><Text>Log out</Text></TouchableOpacity>

            </View>
          
          
        )
    }
}

export default Profile;