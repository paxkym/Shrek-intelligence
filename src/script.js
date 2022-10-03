var tabs = []
// Start of interface
var c = document.getElementById("screen")
var ctx = c.getContext("2d")
var box;
ctx.strokeStyle = 'red'
ctx.lineWidth = 5
c.height = screen.availHeight
c.width = screen.availWidth
ctx.beginPath()
ctx.moveTo(0,0)
ctx.lineTo(500, 500)
ctx.stroke()
var down = false
var clicked =  null
var firstx = 0
var firsty = 0
var firstxn = 0
var firstyn = 0
var control = false
var mousex = 0
var mousey = 0
var keyp = null
const offsetx = 0
const offsety = 0
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

  document.addEventListener('mousemove', function(event) {
    mousex = event.clientX
 mousey = event.clientY
    if(down){
      if(control){
      ctx.clearRect(0, 0, c.width, c.height)
      ctx.beginPath()
      ctx.moveTo(firstxn -offsetx,firstyn -offsety)
      ctx.lineTo(event.clientX -offsetx, event.clientY -offsety)
      ctx.stroke()
          console.log('e2')
      }else{
    box.style.top = (event.clientY-(firsty)) + 'px'
    box.style.left = (event.clientX-(firstx)) + 'px'
      }
    }
  });

  function add(){
    ctx.beginPath()
ctx.moveTo(0,0)
ctx.lineTo(500, 500)
ctx.stroke()
console.log(c)

  }
function addBlock(type, subtype){
  //Backend
  var prototype = [type, subtype, []]
  if(type == 0){
    if(subtype == 0){

    }
  }else if(type == 1){

    }else if(type == 2){

      }else if(type == 3){

        }
        tabs.push(prototype)
  // Frontend
  const added = tabs.length-1
  const core = '<img draggable="false" src="http://letsrunmoore.com/wp-content/uploads/2015/06/coconut.jpg" width="300"/>'
  const doc =   '  <div onclick= "addlisteners(this.id)" id="' + added + '"draggable="false" style="border-style: solid;border-radius: 5px; display: inline-block;"><div draggable="false" id="' + added + 'iD1"style="width:10px;height:10px;border:1px solid #0000ED;"></div><div id="' + added + 'oD1" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;margin-left: 300px;margin-top: -12px;"></div>' + core + '      <div height="10" width="10" style="border-style: solid;"></div><div id="' + added + 'iD0" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;"></div><div id="' + added + 'oD0" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;margin-left: 300px;margin-top: -12px;"></div></div>'
  document.getElementById('tabs').innerHTML += doc
  console.log(document.getElementById(String(added)), String(added), document.getElementById('1'), tabs)
  document.getElementById(String(added)).style.position = "absolute"
  const box1 = document.getElementById(String(added))
    box = document.getElementById(String(parseInt(String(box1.id))));
   box.draggable = false
  down = false
  addlisteners(added)
console.log(box.id)
firsty = (mousey)-(box.style.top.split('p')[0])
firstx = (mousex)-(box.style.left.split('p')[0])
    console.log(firstx, firsty, box.style.left, box.style.top, box)
    box.style.top = (mousex-(firsty)) + 'px'
    box.style.left = (mousex-(firstx)) + 'px'
}

function addlisteners(tab){
  const added = tabs.length-1
    box = document.getElementById(String(parseInt(String(tab))));
    box.addEventListener('mouseup', function(){
down = false
  })
  console.log(document.getElementById(String(added) + "oD1"), String(added) + "oD1")
  document.getElementById(String(added) + "oD1").addEventListener('mouseup', function(){
    if(control){
      console.log(box.id, "connected to", this.parentElement.id)
      }
  })
  box.addEventListener('mousedown', function(event){
    if(!control){
box = this
console.log(box.id)
      firsty = (event.clientY)-(box.style.top.split('p')[0])
      firstx = (event.clientX)-(box.style.left.split('p')[0])
    console.log(firstx, firsty, event.clientX, event.clientY, box.style.left, box.style.top, box)
    }else{
      
    }
    down = true
  })
  document.getElementById(tab + 'iD0').addEventListener('click', function(event){
  control = true
  console.log('e')
    })
}
// End of interface



