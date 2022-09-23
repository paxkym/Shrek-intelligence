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
var down = false
var clicked =  null
var firstx = 0
var firsty = 0
var firstxn = 0
var firstyn = 0
var control = false
var keyp = null
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
function addBlock(){
  tabs.push([])
  const added = tabs.length-1
  const core = '<img draggable="false" src="http://letsrunmoore.com/wp-content/uploads/2015/06/coconut.jpg" width="300"/>'
  const doc =   '  <div id="' + added + '"draggable="false" style="border-style: solid;border-radius: 5px; display: inline-block;"><div draggable="false" id="' + added + 'iD1"style="width:10px;height:10px;border:1px solid #0000ED;"></div><div id="' + added + 'oD1" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;margin-left: 300px;margin-top: -12px;"></div>' + core + '      <div height="10" width="10" style="border-style: solid;"></div><div id="' + added + 'iD0" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;"></div>          <div id="' + added + 'oD0" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;margin-left: 300px;margin-top: -12px;"></div></div>'
  console.log(doc, added, document.getElementById(String(added)))
  document += doc
  document.getElementById(String(added)).style.position = "absolute"
   box = document.getElementById(String(added))
   document.getElementById(String(added)).draggable = false
  document.getElementById(String(added)).addEventListener('mouseup', function(event){
down = false
ctx.clearRect(0, 0, c.width, c.height)
  })
  document.getElementById(added).addEventListener('mousedown', function(event){
console.log(EventSource)
    box = document.getElementById('0')
      firsty = (event.clientY)-(box.style.top.split('p')[0])
      firstx = (event.clientX)-(box.style.left.split('p')[0])
    console.log(firstx, firsty, event.clientX, event.clientY, box.style.left, box.style.top, box)
down = true
  });
  document.getElementById(added + 'iD0').addEventListener('click', function(event){
  control = true
  console.log('e')
    })
}
addBlock()
addBlock()
// End of interface