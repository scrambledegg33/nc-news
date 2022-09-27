import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ArticlesList = () => {

const [articles, setArticles] = useState([]);
const [topic, setTopic] = useState("");

useEffect(() => {
    fetch(`https://news-app-backend123.herokuapp.com/api/articles?topic=${topic}`).then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        setArticles(data.articles)

    })
}, [topic])

 return (
      <div>
      <h1>Articles List</h1>
      
       <h3>Click Button to Filter by Topic</h3>
      <button onClick={() => setTopic('coding') }>Coding</button>
      <button onClick={() => setTopic('football') }>Football</button>
      <button onClick={() => setTopic('cooking') }>Cooking</button>
      <button onClick={() => setTopic("") }>All Topics</button>
      
          
      <ul>
        {articles.map((article) => {
        return (
            <li key={article.article_id}>
        <h2>Article Title: {article.title}</h2>
        <h3>Article Author: {article.author}</h3>
        <h3>Topic: {article.topic}</h3>
        <h3>Votes: {article.votes}</h3>
        <h3>Comments: {article.comment_count}</h3>
        <Link key={article.article_id} to={`/articles/${article.article_id}`}><button>Select</button></Link>
        </li>
        )
        })}
      </ul>
    </div>

    );
  };

export default ArticlesList;
