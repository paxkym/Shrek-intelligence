
document.getElementById("0").style.position = "absolute"
const box = document.getElementById("0")
box.draggable = false
var down = false
var clicked =  null
document.getElementById('0').addEventListener('mouseup', function(){
down = false
  });
  document.getElementById('0').addEventListener('mousedown', function(){
down = true
  });
  document.getElementById('0').addEventListener('mousemove', function(event) {
    if(down){
    box.style.top = event.clientY-100 + 'px';
    box.style.left = event.clientX-160 + 'px';
    }
  });