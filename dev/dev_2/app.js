//Find a API we have not used in this class (so Andrew's hangman and JSON placeholder) 
//implement an the API call using async await or promises and handle the result of the API by 
//presenting the data in a user focused way in the browser (user focused means make it look  nice).
//You need to add functionality related to the content you retrieve.

getArticle().then((data) => {
    document.getElementById("false").checked = true;
    renderUnfeaturedArticles(data);
    console.log(data);
}).catch((err) => {
    console.log(err);
});

document.querySelector('#input').addEventListener('change', (e) => {
    
    if (e.target.value === 'true') {
        getArticle().then((data) => {
            renderFeaturedArticles(data);
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    } else if (e.target.value === 'false') {
        getArticle().then((data) => {
            renderUnfeaturedArticles(data);
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    } else if (e.target.value === 'seo') {
        getArticle().then((data) => {
            renderSeoArticles(data);
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    } else if (e.target.value === 'desc') {
        getArticle().then((data) => {
            renderSeoDescription(data);
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    };
});
