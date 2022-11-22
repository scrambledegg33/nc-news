import { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import ErrorComponent from "./ErrorComponent";


const ArticlesList = () => {

const [articles, setArticles] = useState([]);
const { topic, sort } = useParams();
const [currSort, setCurrSort] = useState("created_at");
const [currOrder, setCurrOrder] = useState("desc")
const [error, setError] = useState(null);


useEffect(() => {
    axios.get(`https://news-app-backend123.herokuapp.com/api/articles`, {params: {topic , sort_by: currSort, order: currOrder}}).then(({data}) => {
        setArticles(data.articles);
    
    })
    .catch((err) => {
      setError({ err });
    });
    }, [topic, currSort, currOrder])

const handleSortChange = (event) => {
setCurrSort(event.target.value)
}

const handleOrderChange = (event) => {
  setCurrOrder(event.target.value);
}


if (error) {
  return <ErrorComponent />;
}

 return (
      <div>
      <h1>Articles List</h1>
       <select onChange={handleSortChange}>
        <option value={"created_at"}>date</option>
        <option value={"votes"}>votes</option>
      </select> 
      <select onChange={handleOrderChange}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <ul id="otis">
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
