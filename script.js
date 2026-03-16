function searchMovie(){

let input = document.getElementById("search").value.toLowerCase();

let movies = document.getElementsByClassName("movie");

for(let i=0;i<movies.length;i++){

let title = movies[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

if(title.includes(input)){
movies[i].style.display="";
}
else{
movies[i].style.display="none";
}

}

}

function openTrailer(link){
window.open(link);
}