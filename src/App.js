import {useContext} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticlesList from './components/ArticlesList';
import LoginStatus from './components/LoginStatus';
import StaticPage from './components/Home';
import UsersList from './components/UsersList';
import Article from './components/Article';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from './contexts/User';

function App() {
  //const value = useContext(UserContext);
  
  return (
    <BrowserRouter>
    <div className="App">
     <Header />
    <NavBar /> 
    <Routes>
       <Route path="/" element={<StaticPage />} />
      <Route path="/articles" element={<ArticlesList />} /> 
       <Route path="/articles/:article_id" element={<Article />} /> 
      <Route path="/users" element={<UsersList />} /> 
      <Route path="/articles/topics/:topic" element={<ArticlesList />} />
    </Routes> 
    <footer>
     <LoginStatus /> 
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
