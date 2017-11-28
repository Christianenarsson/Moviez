let $ = require ("jquery");

function renderMovie(movie){
  $("h2").text(movie.title);
  $("p").text(movie.synopsis);
  $("img").attr("src", movie.poster);
  
    let actorList = "";
  for(let i=0; i<movie.actors.length; i++){
    actorList += "<li>" + movie.actors[i] + "</li>";
}
	$("ul").html(actorList);
};

function changeStarRating(grade){
  for (var i=1; i<=grade; i++){
  	$("#s" + i).addClass("filled");
  	$("#s" + i).removeClass("empty");
  }
  for (var j=grade+1; j<=5; j++){
  	$("#s" + j).addClass("empty");
  	$("#s" + j).removeClass("filled");
  }
}

let movieData = require("./data");
renderMovie(movieData);


for (let x=1; x<=5; x++) {
  $("#s" + x).click(function(){changeStarRating(x);});
  }











