import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {auth, db} from '../firebase/config';
import firebase from 'firebase';
import reactDom from 'react-dom';

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
           cantidadDeLikes:this.props.dataPost.data.likes.length,
           myLike:false,
        }
    }

    componentDidMount(){
        if(this.props.dataPost.data.likes.includes(auth.currentUser.email)){
            this.setState({
                myLike: true,
            })
        }
    }

    like(){
        db.collection('posts')
            .doc(this.props.dataPost.id)
            .update({
                likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
            })
            .then(()=> this.setState({
                cantidadDeLikes: this.props.dataPost.data.likes.length,
                myLike: true,
            }))
            .catch(error => console.log(error))

    }

    unLike(){
        db.collection('posts')
            .doc(this.props.dataPost.id)
            .update({
                likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
            })
            .then(()=> this.setState({
                cantidadDeLikes: this.props.dataPost.data.likes.length, 
                myLike: false
            }))
            .catch(error => console.log(error))
    }


    render(){
        // console.log(this.props);
        return(
                <View style={styles.separator}>
                    <Text style={styles.texto} >Post de: {this.props.dataPost.data.owner}</Text>
                    <Text  style={styles.subtitulos} >Texto del Post: {this.props.dataPost.data.description}</Text>
                     <Text style={styles.subtitulos}>Cantidad de likes: {this.state.cantidadDeLikes}</Text>
                    {
                        this.state.myLike ?
                        <TouchableOpacity onPress={()=> this.unLike()}>
                            <Text  style={styles.texto} >Quitar Like</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={()=> this.like()}>
                            <Text  style={styles.texto} >Like</Text>
                        </TouchableOpacity>                
                    }
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Comments', { id: this.props.dataPost.id})} > 
                        <Text style={styles.subtitulos}>Ver comentarios</Text>
                    </TouchableOpacity>   
                    
                </View>
        )
    }

}

const styles = StyleSheet.create({
    separator:{
        borderBottomColor: '#ddd',
        borderBottomWidth: 10,
        paddingBottom: 10,
        paddingHorizontal:20,
        backgroundColor:'#a93ce8',
        borderRadius:5,
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop:10,
    },
    texto:{
        fontWeight:600,
        fontSize:20,
    },
    subtitulos:{
        fontWeight:400,
        fontSize:15,
    },
    
    
})

export default Post;