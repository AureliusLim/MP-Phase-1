
function checker(event){
  var result = confirm('Are you sure? This cannot be undone');
  if(result == false){
    event.preventDefault();
  }
  else{
      location.href = "/delete-profile";
  }
}

function goHomeFromPfp(){
    $.get("/home", function(){
  });
}
function logout(){
    $.get("/log-out", function(){
  });
}
function viewprof(){
    $.get("/view-profile", function(){
  });
}

function getGame(game){
  $.get('/get-game', {word:game }, function(){})
  location.href="/game-direct";
}

function loadFile(event){
  var output = document.getElementById('displaypic');
  output.src = URL.createObjectURL(event.target.files[0])
}
function loadFile2(event){
  var output = document.getElementById('coverpic');
  output.src = URL.createObjectURL(event.target.files[0])
}
