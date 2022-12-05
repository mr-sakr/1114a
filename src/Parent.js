import { useEffect, useState } from "react";
import Child from "./Child";

function Parent(){
    const [posts, setposts] = useState([
        {
        id: 96,
        title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
        body: "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
        },
        {
        id: 97,
        title: "quas fugiat ut perspiciatis vero provident",
        body: "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
        },
        {
        id: 98,
        title: "laboriosam dolor voluptates",
        body: "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
        },
    ]);

    const deletePost = (id)=>{
        const updatedPosts = posts.filter(post=> post.id !== id);
        setposts(updatedPosts);
    }
    useEffect(()=>{
        console.log(posts);
    });

    return (
        <Child posts={posts} deletePost={deletePost}/>
    );
}

export default Parent;