let query = document.querySelector('.query');
let searchbtn = document.querySelector('.searchbtn');

searchbtn.onclick = function(){
    let url  = 'https://www.google.com/search?q=' + query.value;
    window.open(url,'_self');
}