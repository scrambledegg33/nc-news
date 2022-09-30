import { useEffect, useState} from "react";
import { getCommentsById } from "../utils/api";
import {useParams} from 'react-router-dom';

const CommentsList = () => {
  const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    
    useEffect(() => {
      getCommentsById(article_id)
      .then((response) => {
          return response;
      })
      .then((data) => {
        setComments(data.comments);
          setIsLoading(false)
      });
  }, [article_id]);
    
     return (
          <div>
          <h1>Comments</h1>
          <ul>
            {comments.map((comment) => {
            return (
                <li key={comment.comment_id}><br></br>
            <p>Comment: {comment.body}</p>
            <p>Comment Author: {comment.author}</p>
            <p>votes: {comment.votes}</p>
            </li>
            )
            })}
          </ul>
        </div>
    
        );
      };
    
    export default CommentsList;