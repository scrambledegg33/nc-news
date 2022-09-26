import { Link } from 'react-router-dom'
const NavBar = () => {
        return (
        <nav>
            <Link to="/" ><button>Home</button>  </Link>
            <Link to="/articles" > <button>Articles</button> </Link>
            <Link to="/users" > <button>Users</button> </Link>
        </nav>
        )
}


export default NavBar;