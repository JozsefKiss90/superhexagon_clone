import {a} from './hexagon.js'
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

function drawHexagon(r, angle) {
  angle *= Math.PI / 180
  ctx.beginPath();
  for (var i = 0; i <= 6; i++) {
    ctx.lineTo( r * Math.cos(a * i + angle),  r * Math.sin(a * i + angle));
  }
  ctx.lineWidth = 10
  ctx.strokeStyle = "#e6e6e8"
  ctx.fillStyle = '#6d6d6e'
  ctx.fill();
  ctx.closePath()
  ctx.stroke();
} 

function drawWall(r, num, rot, angle) {
  let r2 = r+15
  angle *= Math.PI / 180
  num == 5 ? i = 5 - rot : num == 6 ? i = 6 - rot :
  num == 7 ? i = 7 - rot : num == 8 ? i = 8 - rot :
  num == 9 ? i = 9 - rot : num == 10 ? i = 10 - rot
  : i = rot
  let innerWall = rot == 4 ? num - 4 : num - 5
  ctx.beginPath();
  for (var i; i <= num; i++) {
    ctx.lineTo((r-15) * Math.cos(a * i + angle), (r-15) * Math.sin(a * i + angle));
  }
  for (var j = num; j >= innerWall; j--) {
    ctx.lineTo( r2 * Math.cos( a * j + angle),  r2 * Math.sin( a * j + angle));
  }

  ctx.strokeStyle = "#e6e6e8"
  ctx.fillStyle = '#e6e6e8'
  ctx.fill();
  ctx.stroke();
 }

function drawGapped(r, angle) {
  let r2 = r+15
  ctx.beginPath();
  for (var i = 0; i <= 1; i++) {
    ctx.lineTo( (r-15) * Math.cos(a * i + angle),  (r-15) * Math.sin(a * i + angle));
  }
  for (var j = 1; j >= 0; j--) {
    ctx.lineTo( r2 * Math.cos(a * j + angle),  r2 * Math.sin(a * j + angle));
  }
  ctx.closePath()
  ctx.strokeStyle = "#e6e6e8"
  ctx.fillStyle = '#e6e6e8'
  ctx.fill()
  ctx.stroke()
  }
  
function drawGapped2(r, angle) {
  let r2 = r+15
  ctx.beginPath();
  for (var i = 2; i <= 5; i++) {      
    ctx.lineTo( (r-15) * Math.cos(a * i + angle),  (r-15) * Math.sin(a * i + angle));
  }
  for (var j = 5; j >= 2; j--) {
    ctx.lineTo( r2 * Math.cos(a * j + angle),  r2 * Math.sin(a * j + angle));
  }
  ctx.closePath()
  ctx.strokeStyle = "#e6e6e8"
  ctx.fillStyle = '#e6e6e8'
  ctx.fill()
  ctx.stroke()
}

function drawGappedHex(r, angle) {
  angle *= Math.PI / 180
  drawGapped(r, angle)
  drawGapped2(r, angle)
}


export {drawGappedHex, drawWall, drawHexagon}