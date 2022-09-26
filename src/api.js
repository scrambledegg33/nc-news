import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://news-app-backend123.herokuapp.com/api"
})

export const getArticles = () => {
    return newsApi
    .get("/articles")
    .then((res) => {
        return res.data;
    })
}

export const getUsers = () => {
    return newsApi
    .get("/users")
    .then((res) => {
        return res.data;
    })
}