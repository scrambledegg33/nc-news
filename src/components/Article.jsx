import {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import { patchArticles } from '../utils/api';

export default function Article() {
    const {article_id} = useParams();
    const [currArticle, setCurrArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    
    useEffect(() => {
        fetch(`https://news-app-backend123.herokuapp.com/api/articles/${article_id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setCurrArticle(data.article);
            setIsLoading(false)
        });
    }, [article_id]);

    const handleVote = (article_id, vote) => {
        if(vote === 1){
            setCurrArticle({...currArticle, votes: currArticle.votes + 1})
        }
        if (vote === -1){
        setCurrArticle({...currArticle, votes: currArticle.votes - 1})
        }
       patchArticles(article_id, vote)
       .then((res) => {

           currArticle.votes = (res.article.votes)
})
   }
    

  
    if (isLoading){
        return <p>Loading...</p>
    }

    
   
console.log(currArticle)
    return (
        <div>
            <h2>Title: {currArticle.title}</h2>
            <p>{currArticle.body}</p>
            <p> Article ID: {currArticle.article_id}</p>
            <p>Author: {currArticle.author}</p>
            <p>Topic: {currArticle.topic}</p>
            <p>Comment Count: {currArticle.comment_count}</p>
            <p>Votes: {currArticle.votes}</p>
            <button onClick={() => handleVote(article_id, 1)}>upVote</button>
            <button onClick={() => handleVote(article_id, -1)}>downVote</button>
        </div>
    )
}