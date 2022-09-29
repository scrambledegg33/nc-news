import { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'



const ArticlesList = (props) => {

const [articles, setArticles] = useState([]);
const { topic } = useParams();



useEffect(() => {
    axios.get(`https://news-app-backend123.herokuapp.com/api/articles`, {params: {topic}}).then(({data}) => {
      
        setArticles(data.articles);
    })
   
}, [topic])

 return (
      <div>
      <h1>Articles List</h1>
    
    
      <ul>
        {articles.map((article) => {
        return (
            <li key={article.article_id}>
        <h2>Article Title: {article.title}</h2>
        <h3>Article Author: {article.author}</h3>
        <h3>Topic: {article.topic}</h3>
        <h3>Comments: {article.comment_count}</h3>
        <h3>Votes: {article.votes}</h3>
        <Link key={article.article_id} to={`/articles/${article.article_id}`}><button>Select</button></Link>
        </li>
        )
        })}
      </ul>
    </div>

    );
  };

export default ArticlesList;
