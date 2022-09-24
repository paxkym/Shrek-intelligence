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
  addBlock()
addBlock()
addBlock()
function addBlock(){
  tabs.push([])
  const added = tabs.length-1
  const core = '<img draggable="false" src="http://letsrunmoore.com/wp-content/uploads/2015/06/coconut.jpg" width="300"/>'
  const doc =   '  <div onclick= "addlisteners(this.id)" id="' + added + '"draggable="false" style="border-style: solid;border-radius: 5px; display: inline-block;"><div draggable="false" id="' + added + 'iD1"style="width:10px;height:10px;border:1px solid #0000ED;"></div><div id="' + added + 'oD1" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;margin-left: 300px;margin-top: -12px;"></div>' + core + '      <div height="10" width="10" style="border-style: solid;"></div><div id="' + added + 'iD0" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;"></div><div id="' + added + 'oD0" draggable="false" style="width:10px;height:10px;border:1px solid #0000ED;margin-left: 300px;margin-top: -12px;"></div></div>'
  document.body.innerHTML += doc
  console.log(document.getElementById(String(added)), String(added), document.getElementById('1'), tabs)
  document.getElementById(String(added)).style.position = "absolute"
  const box1 = document.getElementById(String(added))
    box = document.getElementById(String(parseInt(String(box1.id))));
   box.draggable = false
  addlisteners(added)
  box.top = 100
  box.right = 100
  down = false
  box = null
  firstx = 
}
function addlisteners(tab){
    box = document.getElementById(String(parseInt(String(tab))));
    box.addEventListener('mouseup', function(){
      ctx.clearRect(0, 0, c.width, c.height)
down = false
  })
  console.log('listen2', document.getElementById(tab))
  box.addEventListener('mousedown', function(event){
box = this
console.log(box.id)
      firsty = (event.clientY)-(box.style.top.split('p')[0])
      firstx = (event.clientX)-(box.style.left.split('p')[0])
    console.log(firstx, firsty, event.clientX, event.clientY, box.style.left, box.style.top, box)
down = true
  })
  console.log('listen', document.getElementById(tab))
  document.getElementById(tab + 'iD0').addEventListener('click', function(event){
  control = true
  console.log('e')
    })
}
// End of interface





// // Start of interface
// document.getElementById("0").style.position = "absolute"
// const box = document.getElementById("0")
// var firstyn = 0
// var control = false
// var keyp = null
// document.getElementById('0iD0').addEventListener('click', function(event){
//   control = true
//   console.log('e')
//     })
//     document.addEventListener('mousedown', function(event){
//       if(control){
//         firstyn = event.clientY
//         firstxn = event.clientX
//       }
//         })
//         document.addEventListener('mouseup', function(event){
//           if(control){
//             control = false
//           }
//             })
// document.getElementById('0').addEventListener('mouseup', function(event){
// down = false
// ctx.clearRect(0, 0, c.width, c.height)
//   })
//   document.getElementById('0').addEventListener('mousedown', function(event){
//       firsty = (event.clientY)-(box.style.top.split('p')[0])
//       firstx = (event.clientX)-(box.style.left.split('p')[0])
//     console.log(firstx, firsty, event.clientX, event.clientY, box.style.left, box.style.top)
// down = true
//   });
//   document.addEventListener('mousemove', function(event) {
//     if(down){
//       if(control){
//       ctx.clearRect(0, 0, c.width, c.height);
//       ctx.beginPath()
//       ctx.moveTo(firstxn,firstyn)
//       ctx.lineTo(event.clientX, event.clientY)
//       ctx.stroke()
//       }else{
//     box.style.top = (event.clientY-firsty) + 'px'
//     box.style.left = (event.clientX-firstx) + 'px'
//       }
//     }
//   });
// // End of interface