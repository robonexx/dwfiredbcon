const articlesList = document.querySelector('.articlesList')
const titlePost = document.querySelector('.writeTitle')
const authorPost = document.querySelector('.writeAuthor')
const textPost = document.querySelector('.writeText')
const form = document.querySelector('form')

const addArticle = (article) => {

   /*  const dateTime = article["created.at"].toDate() */
    
    let html = `
    <div class="article">
                <h2 class="articleTitle">Title: <b>${article.title}</b> Author: <b>${article.author}</b></h2>
                <div class="articleBody">${article.body}</div>
                <button class="deleteBtn">Delete</button>
               
    </div>
    `;
    /* <span class="time">${dateTime}</span> */

    articlesList.innerHTML += html
}

db.collection('articles').get().then((snapshot) => {
      // the data 
    
    snapshot.docs.forEach(doc => {
        addArticle(doc.data());
        console.log(doc.data()) 
    })

}).catch(err => {
    console.log(err)
})

 
form.addEventListener('submit', e => {
    e.preventDefault()

    const article = {
        title: form.title.value,
        author: form.author.value,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        body: form.textBody.value
    }; 
    db.collection('articles').add(article).then(() => {
        console.log('article added to db')
    }).catch(err => {
        console.log(err)
    })

    form.reset()
}) 
  
  //delete
