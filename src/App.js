import React from 'react';
import Post from './Post';
import Header from './Header';

const post = [
    { title: 'Titulo 1', subtitle: 'subtitul 1', likes: 20 },
    { title: 'Titulo 2', subtitle: 'subtitul 2', likes: 40 },
    { title: 'Titulo 3', subtitle: 'subtitul 3', likes: 60 },

]

export default function App(){
    return( 
        <>
            <Header
            > 
            <h2>Componente App</h2>
            
            </Header>

            <hr/>

            {post.map(post => (
                <Post
                    key={post.title}
                    likes={post.likes}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle,
                       
                    }}
                />
            ))}
            
        </>
    );
}