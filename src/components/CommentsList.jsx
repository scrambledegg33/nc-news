import { useEffect, useState} from "react";
import { getCommentsById } from "../utils/api";
import {useParams} from 'react-router-dom';
import { deleteCommentById } from "../utils/api";

const CommentsList = ({setComments, comments, user}) => {
  const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleted, setIsDeleted] = useState(false)
    const [commentId, SetCommentId] = useState(0)
    
    
    useEffect(() => {
      getCommentsById(article_id)
      .then((response) => {
          return response;
      })
      .then((data) => {
        setComments(data.comments);
          setIsLoading(false)
          
      });
  }, [article_id, isDeleted]);

    useEffect(() => {
      if (commentId != 0){
      deleteCommentById(commentId)
      .then(() => {
        setIsDeleted(true);
      });
    }
    }, [commentId])

  const handleDelete = (id) => {
    SetCommentId(id)
      setIsDeleted(false);
    } 
    
     return (
          <div>
          <h1>Comments</h1>
          <ul id="otis">
            {comments.map((comment) => {
            return (
                <li key={comment.comment_id}><br></br>
            <p>Comment: {comment.body}</p>
            <p>Comment Author: {comment.author}</p>
            <p>votes: {comment.votes}</p>
            {comment.author === user[0]?
            <button key={comment.comment_id} onClick={() => handleDelete(comment.comment_id)}>delete</button>:null}
            </li>
            )
            })}
          </ul>
        </div>
    
        );
      };
    
    export default CommentsList;