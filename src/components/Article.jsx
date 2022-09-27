import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function Article() {
    const {article_id} = useParams();
    const [currArticle, setCurrArticle] = useState({});

    useEffect(() => {
        fetch(`https://northcoders-marketplace-333.herokuapp.com/api/articles/${article_id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setCurrArticle(data.article);
        });
    }, [article_id]);

    return (
        <div>
            <h2>Title: {currArticle.title}, Article ID: {currArticle.article_id}</h2>
            <p>Author: {currArticle.author}</p>
            <p>Topic: {currArticle.topic}</p>
            <p>Votes: {currArticle.votes}</p>
            <p>Comment Count: {currArticle.comment_count}</p>
        </div>
    )
}