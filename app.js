const articlesList = document.querySelector('.articlesList')
const titlePost = document.querySelector('.writeTitle')
const authorPost = document.querySelector('.writeAuthor')
const textPost = document.querySelector('.writeText')
const form = document.querySelector('form')

const addArticle = (article, id) => {

   /*  const dateTime = article["created.at"].toDate() */
    
    let html = `
    <li class="article" data-id="${id}">
                <h2 class="articleTitle">Title: <b>${article.title}</b> Author: <b>${article.author}</b></h2>
                <div class="articleBody">${article.body}</div>
                <button class="deleteBtn">Delete</button>
               
    </li>
    `;
    /* <span class="time">${dateTime}</span> */

    articlesList.innerHTML += html
}

db.collection('articles').get().then((snapshot) => {
      // the data 
    
    snapshot.docs.forEach(doc => {
        addArticle(doc.data(), doc.id);
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
articlesList.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id')
        console.log(id)
        db.collection('articles').doc(id).delete().then(() => {
            console.log('article deleted')
        });
    }
});