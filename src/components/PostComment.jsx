import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {  postComment, getCommentsById } from '../utils/api';



export default function PostComment() {
    const [author, setAuthor] = useState("tickle122");
    const [body , setBody] = useState("")
    const {article_id} = useParams();
    const [toggle, setToggle] = useState(false)
    
   

    const handleBody = (event) => {
      const value = event.target.value;
      console.log(value)
      setBody(value)
     }
  
    const handleSubmit = (event) => {
      event.preventDefault();

      postComment(article_id, author, body).then((res) => { 
          return res;
        })
        setToggle(true)
        setBody("");
    } 

    
    return (
        <div>
            <br></br>
            <br></br>
      <form onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <br></br>
        <label>Enter your comment:
          <input 
            type="text" 
            name="body" 
            value={body} 
            onChange={handleBody}
            id="textboxid"
          />
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
      </form>
      {toggle && <p>comment posted</p>}
      
      </div>
    )
}

