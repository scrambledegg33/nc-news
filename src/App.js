import {useContext} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticlesList from './components/ArticlesList';
import LoginStatus from './components/LoginStatus';
import Home from './components/Home';
import UsersList from './components/UsersList';
import Article from './components/Article';
import { BrowserRouter } from 'react-router-dom';
import PostComment from './components/PostComment';

function App() {
  //const value = useContext(UserContext);
  
  return (
    <BrowserRouter>
    <div className="App">
     <Header />
    <NavBar /> 
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesList />} /> 
       <Route path="/articles/:article_id" element={<Article/>} /> 
      <Route path="/users" element={<UsersList />} /> 
      <Route path="/articles/topics/:topic" element={<ArticlesList />} />
      <Route path="/artices/sortByDate" element={<ArticlesList/>} />
      <Route path="/articles/:article_id/comments/addComment" element={<PostComment />} />
    </Routes> 
    <footer>
     <LoginStatus /> 
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
