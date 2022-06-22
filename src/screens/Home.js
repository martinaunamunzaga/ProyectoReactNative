import React, {Component} from 'react';
import { db, auth } from '../firebase/config';
import { View,
         Text,
         TouchableOpacity, 
         StyleSheet, 
         ActivityIndicator,
         FlatList, 
         Image } from 'react-native';
import Post from '../components/Post';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    
    componentDidMount(){
        db.collection('posts').orderBy('createdAt', 'desc').onSnapshot(
            docs => {
                let posts = [];
                docs.forEach( oneDoc => {
                    posts.push({
                        id: oneDoc.id,
                        data: oneDoc.data()
                    })
                })

                this.setState({
                    posts: posts
                })
            }
        )

        
    }


    render(){
        // console.log(this.state);
        return(
                <View style={styles.container}>
                    <Text style={styles.texto}>Posteos</Text>
                    <FlatList 
                        data={this.state.posts}
                        keyExtractor={post => post.id}
                        renderItem = { ({item}) => <Post dataPost={item} navigation={this.props.navigation}
                        {...this.props} />}
                    />
                    
                </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#C13584',
    },
    texto:{
        fontWeight:600,
        fontSize:20,
        paddingLeft:325,
    },
})

export default Home;