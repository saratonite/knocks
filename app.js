var q = document.getElementById('theQ');
q.textContent  = getRandom();

function getRandom(){
  var random_pick = Math.floor((Math.random()*quotes.length));
  return quotes[random_pick];
}
