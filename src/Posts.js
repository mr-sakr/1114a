import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts(){
    const [posts, setposts] = useState(null);

    useEffect(function(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
            setposts(data);
        })
    }, []);

    const deletePost = (id)=>{
        const updatedPosts = posts.filter(post=>post.id !== id)
        setposts(updatedPosts)
    }

    return(
        <div className="container">
            <h1>Posts</h1>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {posts && posts.map((post)=>
                    <tr key={post.id} className="">
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td className="row p-3">
                            <button className="btn btn-danger" onClick={()=>{deletePost(post.id)}}>Delete</button>
                            <Link className="btn btn-info" to={"/posts/"+post.id}>More</Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </div>
    );
}

export default Posts;