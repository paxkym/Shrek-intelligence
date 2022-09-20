
document.getElementById("0").style.position = "absolute"
const box = document.getElementById("0")
box.draggable = false
var down = false
var clicked =  null
var firstx = 0;
var firsty = 0;
document.getElementById('0').addEventListener('mouseup', function(){
down = false
  });
  document.getElementById('0').addEventListener('mousedown', function(event){
      firsty = (event.clientY)-(box.style.top.split('p')[0])
      firstx = (event.clientX)-(box.style.left.split('p')[0])
    console.log(firstx, firsty, event.clientX, event.clientY, box.style.left, box.style.top)
down = true
  });
  document.addEventListener('mousemove', function(event) {
    if(down){
    box.style.top = (event.clientY-firsty) + 'px'
    box.style.left = (event.clientX-firstx) + 'px'
    }
  });

  var c = document.getElementById("screen")
  var ctx = c.getContext("2d")
  c.height = screen.availHeight
  c.width = screen.availWidth
ctx.rect(20, 20, 150, 100);
ctx.fillStyle = "red";