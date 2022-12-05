import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OnePost(){
    const {id} = useParams();
    const [thispost, setthispost] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/3")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            console.log(data.id);
            setthispost(data);
        }, []);
    })
    return(
        <div>
            <h1>
                One Post id - {thispost}
            </h1>
        </div>
    );
}
export default OnePost;