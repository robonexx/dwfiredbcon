
db.collection('articles').get().then((snapshot) => {
      // the data 
    
    snapshot.docs.forEach((doc => {
    console.log(doc.data())
    }))
}).catch(err => {
    console.log(err)
})
  
