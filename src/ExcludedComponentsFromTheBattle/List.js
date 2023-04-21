import React, { useState, useEffect } from 'react';
import Post from "./Post";

export const List = () => {
    const [posts, setPosts] = useState([]);

    const updateData = (resObject, e) => {
        let updateItem = {
            id: resObject.id,
            title: resObject.title,
            body: resObject.body,
            userId: resObject.userId
        };
        let index = posts.findIndex((element) => {
            return element.id === resObject.id;
        });
        let updatedPosts = [...posts];
        updatedPosts[index] = updateItem;
        setPosts(updatedPosts);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setPosts(data);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    const addNewPost = () => {
        let id = Date.now().valueOf();
        let newPost = {
            id: id,
            title: '',
            body: '',
            userId: ''
        };
        setPosts([newPost, ...posts]);
    };

    const deletePost = (id, e) => {
        let newPosts = posts.filter((element) => {
            return element.id !== id;
        });
        setPosts(newPosts);
    };

    return (
        <div className='centered-div'>
            <button onClick={addNewPost}>Добавить новый</button>
            <ul>
                {posts != null
                    ? posts.map((item, index) =>
                        index < 50 ? (
                            <Post
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                body={item.body}
                                userId={item.userId}
                                onClick={updateData}
                                onDelete={deletePost}
                            >
                            </Post>
                        ) : '')
                    : null}
            </ul>
        </div>
    );
};