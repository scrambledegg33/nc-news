import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import {getTopics} from "../utils/api.js"

const NavBar = () => {

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
        <nav>
            <Link to="/" ><button>Home</button>  </Link>
            <Link to="/articles" > <button>Articles</button> </Link>
            <Link to="/users" > <button>Users</button> </Link>
            
            
            <Link to="/articles/topics/coding"> <button onClick={() => setTopic('coding')}>Coding</button> </Link>

            <Link to="/articles/topics/football"><button onClick={() => setTopic('football') }>Football</button> </Link>

            <Link to="/articles/topics/cooking"><button onClick={() => setTopic('cooking') }>Cooking</button></Link> 
        </nav>


</div>
        )
}


export default NavBar;