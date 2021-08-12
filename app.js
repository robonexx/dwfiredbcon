const articlesList = document.querySelector('.articlesList')
const titlePost = document.querySelector('.writeTitle')
const authorPost = document.querySelector('.writeAuthor')
const textPost = document.querySelector('.writeText')

const addArticle = (article) => {

    let dateTime = article["created.at"].toDate()
    
    let html = `
    <div class="article">
                <h2 class="articleTitle">Title: <b>${article.title}</b> Author: <b>${article.author}</b></h2>
                <div class="articleBody">${article.body}</div>
               <span class="time">${dateTime}</span>
    </div>
    `;

    articlesList.innerHTML += html
}

db.collection('articles').get().then((snapshot) => {
      // the data 
    
    snapshot.docs.forEach(doc => {
        addArticle(doc.data());
       /*  console.log(doc.data()) */
    })

}).catch(err => {
    console.log(err)
})

/* created: firebase.database.ServerValue.TIMESTAMP */
  
