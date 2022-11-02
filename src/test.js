
function fillInStories(){
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019")
      .then((response) => {
        return response.json()}) // without {} the value will be the succes return
      .then((data) => {
        return createStoryPageContent(data.items)}
        )
      .then((contentHtml)=>{
        $("#app > div.row").append(contentHtml)
      }
      )
  }


  fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019")
      .then(
        (e) => {
        console.log(e)})
        .then((e)=>{
            return e.json()
        })
        .then((e)=>{
          console.log(e)
        })
    

// helpers
fun1(){
    return Promise
}

a=fetch(...)

b=a.then(processFetchResult)
c=b.then(createTag)
finalResult=fetch(...)



function processFetchResult(a){
    return a+3
}

