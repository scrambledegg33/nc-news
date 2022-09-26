import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import {Navbar} from './components/NavBar';
import {ArticlesList} from './components/ArticlesList';

function App() {
  
  
  return (
    <div className="App">
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/articles/:article_id" element={<Article />} /> 
      <Route path="/users" element={<SellItem />} />
    </Routes>
  </div>
  );
}

export default App;
