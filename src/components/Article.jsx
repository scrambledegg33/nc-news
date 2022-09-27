import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function Article() {
    const {article_id} = useParams();
    const [currArticle, setCurrArticle] = useState({});

    useEffect(() => {
        fetch(`https://news-app-backend123.herokuapp.com/api/articles/${article_id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setCurrArticle(data.article);
        });
    }, [article_id]);

console.log(currArticle)
    return (
        <div>
            <h2>Title: {currArticle.title}</h2>
            <p>{currArticle.body}</p>
            <p> Article ID: {currArticle.article_id}</p>
            <p>Author: {currArticle.author}</p>
            <p>Topic: {currArticle.topic}</p>
            <p>Votes: {currArticle.votes}</p>
            <p>Comment Count: {currArticle.comment_count}</p>
        </div>
    )
}