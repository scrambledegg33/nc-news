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

export const getArticlesById = (article_id) => {
    return newsApi
    .get(`/articles/${article_id}`)
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

export const getTopics = () => {
    return newsApi
    .get("/topics")
    .then((res) => {
        return res.data;
    })
}

export const patchArticles =(articleId, vote) => {
    return newsApi

    .patch(`/articles/${articleId}`, {votes: vote})
    .then((res) => {
        return res.data;
    })
}

