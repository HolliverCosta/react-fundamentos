import React, {useState } from 'react';
import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';
import { Title } from './styles';


export default function App(){

    const [post, setPost] = useState([
        { id:Math.random(), title: 'Titulo 1', subtitle: 'subtitulo 1', likes: 20, read: false, removed: false },
        { id:Math.random(), title: 'Titulo 2', subtitle: 'subtitulo 2', likes: 40 , read: true, removed: true },
        { id:Math.random(), title: 'Titulo 3', subtitle: 'subtitulo 3', likes: 60 , read: false, removed: true },
    
    ]);

    

    function handleRefresh(){
       
        setPost((prevState) => [
            ...prevState, 
            {
            id:Math.random(), 
            title: `Title ${prevState.length + 1}`, 
            subtitle: `subtitulo ${prevState.length + 1}`, 
            likes: 20
         },
        ]);
     
    }
    function handleRemovePost(postId){
        setPost((prevState)=>
            prevState.map(
                post => post.id === postId 
                ? {...post, removed: true}
                : post
            )
        );
    }
    return( 
        <ThemeProvider>
            <Header> 
            <Title as="h2">
                Componente App
                <button onClick={handleRefresh}> Atualizar</button>
            </Title>
            
            </Header>

            <hr/>

            {post.map(post => (
                <Post
                    key={post.id}
                    onRemove={handleRemovePost}
                    post={post}
                />
            ))}
            
        </ ThemeProvider>
    );
}