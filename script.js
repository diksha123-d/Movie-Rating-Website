function rate(n, star){

let stars = star.parentElement.children;

for(let i=0;i<stars.length;i++){
stars[i].classList.remove("active");
}

for(let i=0;i<n;i++){
stars[i].classList.add("active");
}

}