import { Link } from 'react-router-dom'
import { useState } from "react";

const NavBar = () => {


return (
            <div>
        <nav>
            <Link to="/" ><button>Home</button>  </Link>
            <Link to="/articles" > <button>Articles</button> </Link>
            <Link to="/users" > <button>Users</button> </Link>
            
            
            <Link to="/articles/topics/coding"> <button>Coding</button> </Link>

            <Link to="/articles/topics/football"><button>Football</button> </Link>

            <Link to="/articles/topics/cooking"><button>Cooking</button></Link> 
        </nav>


</div>
        )
}


export default NavBar;