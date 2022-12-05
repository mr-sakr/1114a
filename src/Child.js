
function Child({posts, deletePost}){

    return(
        <div>
            <ul>
                {posts.map((post)=>
                    <li key={post.id}>
                        <h1>{post.id}</h1>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button className="btn btn-danger" onClick={()=>{deletePost(post.id)}}>Delete</button>
                        <hr></hr>
                    </li>
                    )}
            </ul>
        </div>
    );
}

export default Child;