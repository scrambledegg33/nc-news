import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {  postComment, getCommentsById } from '../utils/api';
import username from './LoginStatus';


export default function PostComment() {
    const [author, setAuthor] = useState("");
    const [body , setBody] = useState("")
    const {article_id} = useParams();
    const [pass, setPass] = useState("");
    const password = "swordfish"

    const handleAuthor = (event) => {
      const value = event.target.value;
      setAuthor(value)
     }

    const handleBody = (event) => {
      const value = event.target.value;
      setBody(value)
     }

    const handlePassword = (event) => {
      const value = event.target.value;
      setPass(value)
     }
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (pass == password){
      postComment(article_id, author, body).then((res) => {
        console.log(res)
        return res;
      })
    } else{
        alert("incorrect password")
    }

    }
      
    
    
      
    
  
    return (
        <div>
            <br></br>
            <br></br>
      <form onSubmit={handleSubmit}>
        <label>Enter your username:
        <input 
          type="text" 
          name="author" 
          value={author} 
          onChange={handleAuthor}
        />
        </label>
        <br></br>
        <label>Enter your password:
        <input 
          type="password" 
          name="password" 
          value={pass} 
          onChange={handlePassword}
        />
        </label>
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
          <input type="submit" />
      </form>
      </div>
    )
}

