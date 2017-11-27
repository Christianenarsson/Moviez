function renderMovie(movie){
  document.querySelector("h2").innerText = movie.title;
  document.querySelector("p").innerText = movie.synopsis;
  document.querySelector("img").setAttribute("src", movie.poster)
  
    let actorList = "";
  for(let i=0; i<movie.actors.length; i++){
    actorList += "<li>" + movie.actors[i] + "</li>";
}
	document.querySelector("ul").innerHTML = actorList;
};

renderMovie(movieData);