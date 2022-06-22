import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import {auth, db} from '../firebase/config';
import firebase from 'firebase';


class Comments extends Component{
    constructor(props){
        super(props)
        this.state={
            comments:[],
            commentText:''
        }
    }

    componentDidMount(){
        //Obtener todos los comentarios de un posteo para renderizarlos. Hay que usar el id que recibimos por parámetro.
        db.collection('posts')
        .doc(this.props.route.params.id)
        .onSnapshot( doc => {
                this.setState({
                    comments:doc.data().comments
                })
            }
        )
    }

    //Agregar comentario tiene que agregar un comentario dentro de un posteo. Puntualmente dentro de un array de comentarios.
    agregarComentarios(){
        //actualizar una colleción.
        db.collection('posts')
        .doc(this.props.route.params.id) //Cual es el posteo en donde voy a poner un nuevo comentario.
        .update({
            comments:firebase.firestore.FieldValue.arrayUnion({
                owner: auth.currentUser.email,
                text:this.state.commentText,
                createdAt: Date.now()
            })
        })
        .then( () => {
            this.setState({
                commentText: ''
            })
        })
    }

    render(){
        // console.log(this.props);
        return(
                <View>
                    <Text style={styles.title}> Comentarios</Text>
                    {/* Renderizar la lista de comentarios del posteo */}
                    {this.state.comments.length===0?
                    <Text style={styles.subtitulos} >Aún no hay comentarios</Text>:null}
                    <FlatList 
                        data={this.state.comments}
                        keyExtractor={ post => post.createdAt}
        renderItem = { ({item}) => <Text style={styles.subtitulos}>{item.owner}: {item.text}</Text> }
                    />
                    {/* Un formulario para cargar un comentario */}
                    <TextInput 
                    style={styles.field}
                    keyboardType='default'
                    placeholder='Agregar un comentario'
                    onChangeText={text => this.setState({ commentText: text})}
                    value={this.state.commentText}
                />
                <TouchableOpacity style={styles.button} onPress={()=>this.agregarComentarios()}>
                    <Text style={ styles.buttonText}>Comentar</Text>
                </TouchableOpacity>   
                </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop: 10,
        backgroundColor:'#C13584',
        height:730
    },
    title:{
        marginBottom:20,
        fontSize:55,
        fontWeight:500,
        paddingLeft:260,
    },
    field:{
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 2,
        padding:3,
        marginBottom:8,
    },
    button: {
        borderRadius: 2,
        padding:3,
        backgroundColor: 'green',
        height:40,
    },
    buttonText:{
        color: '#fff',
        paddingTop:10,
    },
    subtitulos:{
        fontWeight:400,
        fontSize:25,
        padding:10,
    },
})

export default Comments;