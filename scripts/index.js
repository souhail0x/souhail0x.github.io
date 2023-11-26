function toSearch() {
    window.location.href = 'pages/search-page.html'
}
function deletMostvisitedContainer() {
}
function displayMostvisitedContainer() {
    document.querySelector('#most-visited-under-search-bar').style.display = 'block';
    document.querySelector('#hook').style.display = 'block';
}
const input = document.querySelector("#search-bar");


input.addEventListener("input", (e) => {
    document.querySelector('#most-visited-under-search-bar').style.display = 'none';
    document.querySelector('#hook').style.display = 'none';

  
});


function showFilter(){
    document.querySelector('.search-filter-container').style.visibility ='visible'
}
function hideFilter(){
    document.querySelector('.search-filter-container').style.visibility ='hidden'
}
function toProfile(){
    window.location.href = 'pages/profile.html'

}