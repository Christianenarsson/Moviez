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

function changeStarRating(grade){
  for (var i=1; i<=grade; i++){
  	document.getElementById("s" + i).classList.add("filled");
  	document.getElementById("s" + i).classList.remove("empty");
  }
  for (var j=grade+1; j<=5; j++){
  	document.getElementById("s" + j).classList.add("empty");
  	document.getElementById("s" + j).classList.remove("filled");
  }
}

	for (let x=1; x<=5; x++) {
		document.getElementById("s" + x).addEventListener("click", function(){ changeStarRating(x); });
	}


renderMovie(movieData);