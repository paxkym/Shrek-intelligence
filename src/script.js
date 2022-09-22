var tabs = []
// Start of interface
document.getElementById("0").style.position = "absolute"
const box = document.getElementById("0")
var c = document.getElementById("screen")
var ctx = c.getContext("2d")
ctx.strokeStyle = 'red'
ctx.lineWidth = 5
c.height = screen.availHeight
c.width = screen.availWidth
ctx.beginPath()
box.draggable = false
var down = false
var clicked =  null
var firstx = 0
var firsty = 0
var firstxn = 0
var firstyn = 0
var control = false
var keyp = null
document.getElementById('0iD0').addEventListener('click', function(event){
  control = true
  console.log('e')
    })
    document.addEventListener('mousedown', function(event){
      if(control){
        firstyn = event.clientY
        firstxn = event.clientX
      }
        })
        document.addEventListener('mouseup', function(event){
          if(control){
            control = false
          }
            })
document.getElementById('0').addEventListener('mouseup', function(event){
down = false
ctx.clearRect(0, 0, c.width, c.height)
  })
  document.getElementById('0').addEventListener('mousedown', function(event){
      firsty = (event.clientY)-(box.style.top.split('p')[0])
      firstx = (event.clientX)-(box.style.left.split('p')[0])
    console.log(firstx, firsty, event.clientX, event.clientY, box.style.left, box.style.top)
down = true
  });
  document.addEventListener('mousemove', function(event) {
    if(down){
      if(control){
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath()
      ctx.moveTo(firstxn,firstyn)
      ctx.lineTo(event.clientX, event.clientY)
      ctx.stroke()
      }else{
    box.style.top = (event.clientY-firsty) + 'px'
    box.style.left = (event.clientX-firstx) + 'px'
      }
    }
  });
// End of interface