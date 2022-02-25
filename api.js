function btnShrt() {
let link = document.getElementById('link');
let link1 = link.value;
let linkToShorten1 = 'https://api.shrtco.de/v2/shorten?url='+link1;
let linkToShorten = linkToShorten1.toString();
fetch(linkToShorten)
 .then(function(response){
     return response.json();
 })
 .then(function(posts){
    alert('your shorten link:'+posts.result.short_link)
})
 .catch(function(err){
     alert('co loi');
})}

function btn9qr() {
    let link = document.getElementById('link');
    let link1 = link.value;
    let linkToShorten1 = 'https://api.shrtco.de/v2/shorten?url='+link1;
    let linkToShorten = linkToShorten1.toString();
    fetch(linkToShorten)
     .then(function(response){
         return response.json();
     })
     .then(function(posts){
         alert('your shorten link:'+posts.result.short_link2)
    })
     .catch(function(err){
         alert('co loi');
    })}

    function btnShiny() {
        let link = document.getElementById('link');
        let link1 = link.value;
        let linkToShorten1 = 'https://api.shrtco.de/v2/shorten?url='+link1;
        let linkToShorten = linkToShorten1.toString();
        fetch(linkToShorten)
         .then(function(response){
             return response.json();
         })
         .then(function(posts){
            alert('your shorten link:' + posts.result.short_link3)
        })
         .catch(function(err){
             alert('co loi');
        })}    