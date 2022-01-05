const express = require('express');
const NewsAPI = require('newsapi');

const app = express();
app.listen(3333);

app.get("/news",(request,response) =>{
    
    const newsapi = new NewsAPI('94dcb758a5204f9fb10a3a10a64c66eb');

    newsapi.v2.topHeadlines({
        country: 'br'
      }).then(resp => {

        return response.json(resp);
        
      });
});

app.get("/news/:search",(request,response) =>{
    const { search } = request.params;
    const newsapi = new NewsAPI('94dcb758a5204f9fb10a3a10a64c66eb');

    newsapi.v2.everything({
        language: 'br',
        qInTitle: search,
        sortBy: "publishedAt"
      }).then(resp => {

        return response.json(resp);
        
      });
});