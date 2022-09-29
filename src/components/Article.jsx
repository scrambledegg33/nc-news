import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { getArticlesById, patchArticles } from '../utils/api';
import CommentsList from './CommentsList';
import PostComment from './PostComment';

export default function Article() {
    const {article_id} = useParams();
    const [currArticle, setCurrArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [toggle, setToggle] = useState(false)
    
    
    useEffect(() => {
        getArticlesById(article_id)
        .then((response) => {
            return response;
        })
        .then((data) => {
            setCurrArticle(data.article);
            setIsLoading(false)
        });
    }, [article_id]);

    const handleVote = (article_id, vote) => {
            setCurrArticle({...currArticle, votes: currArticle.votes + vote})
       
       patchArticles(article_id, vote)
       .then((res) => {

           return res;
})
   }
    

  
    if (isLoading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2>Title: {currArticle.title}</h2>
            <p>{currArticle.body}</p>
            <p> Article ID: {currArticle.article_id}</p>
            <p>Author: {currArticle.author}</p>
            <p>Topic: {currArticle.topic}</p>
            <p>Comment Count: {currArticle.comment_count}</p>
            <p>Votes: {currArticle.votes}</p>
            <button onClick={() => handleVote(article_id, 1)}className="greenButton">upVote</button>
            <button onClick={() => handleVote(article_id, -1)} className="redButton">downVote</button>
           <button onClick={() => setToggle(true)}>Add Comment</button>
            {toggle && <PostComment />}
            <CommentsList />
        </div>
    )
}