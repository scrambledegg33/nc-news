import { Link } from 'react-router-dom'
import { useState } from "react";

const NavBar = () => {

const [topic, setTopic] = useState("");

return (
            <div>
        <nav>
            <Link to="/" ><button>Home</button>  </Link>
            <Link to="/articles" > <button onClick={() => setTopic("")}>Articles</button> </Link>
            <Link to="/users" > <button>Users</button> </Link>
            
            
            <Link to="/articles/topics/coding"> <button onClick={() => setTopic('coding')}>Coding</button> </Link>

            <Link to="/articles/topics/football"><button onClick={() => setTopic('football') }>Football</button> </Link>

            <Link to="/articles/topics/cooking"><button onClick={() => setTopic('cooking') }>Cooking</button></Link> 
        </nav>


</div>
        )
}


export default NavBar;