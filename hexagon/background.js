var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

function drawQuadrantOne() {
    ctx.beginPath()
    ctx.moveTo(400 , 250 )
    ctx.lineTo(-250, 250)
    ctx.moveTo(410, 250)
    ctx.lineTo(110, -250)
    ctx.lineTo(-250, 250)
    ctx.strokeStyle = "#6d6d6e"
    ctx.fillStyle = "#6d6d6e"
    ctx.fill()
    ctx.stroke()
  }

function drawQuadrantTwo() {
    ctx.beginPath()
    ctx.moveTo(400, 248)
    ctx.lineTo( 700, -250)
    ctx.lineTo(110, -250)
    ctx.strokeStyle = "#9d9d9e"
    ctx.fillStyle = "#9d9d9e"
    ctx.fill()
    ctx.stroke()
  }

function drawQuadrantThree() {
    ctx.beginPath()
    ctx.moveTo(400, 250)
    ctx.lineTo( 1020, 252);
    ctx.lineTo( 690, -250)
    ctx.strokeStyle = "#6d6d6e"
    ctx.fillStyle = '#6d6d6e'
    ctx.fill();
    ctx.stroke();
  }

function drawQuadrantFour() {
    ctx.beginPath()
    ctx.moveTo(398, 250)
    ctx.lineTo( 690, 750);
    ctx.lineTo( 1000, 250);
    ctx.strokeStyle = "#9d9d9e"
    ctx.fillStyle = "#9d9d9e"
    ctx.fill()
    ctx.stroke();
  }

function drawQuadrantFive() {
    ctx.beginPath()
    ctx.moveTo(400, 250)
    ctx.lineTo( 100, 750);
    ctx.lineTo( 690, 750);
    ctx.strokeStyle = "#6d6d6e"
    ctx.fillStyle = '#6d6d6e'
    ctx.fill();
    ctx.stroke();
  }

function drawQuadrantSix() {
    ctx.beginPath()
    ctx.moveTo(400, 250)
    ctx.lineTo( 110, 750);
    ctx.lineTo(-250, 250)
    ctx.strokeStyle = "#9d9d9e"
    ctx.fillStyle = '#9d9d9e'
    ctx.fill()
    ctx.stroke();
  }

  export default  function drawBackgorund(angle) {
    angle *= Math.PI / 180
    ctx.save()
    ctx.translate(-400, -250)
    ctx.translate(canvas.width/2, canvas.height/2); 
    ctx.rotate(angle); 
    ctx.translate(-(canvas.width/2), -(canvas.height/2));
    drawQuadrantOne()
    drawQuadrantTwo()
    drawQuadrantThree()
    drawQuadrantFour()
    drawQuadrantFive()
    drawQuadrantSix()
    ctx.restore()
  }


export { drawQuadrantOne, drawQuadrantTwo, drawQuadrantThree, drawQuadrantFour, drawQuadrantFive, drawQuadrantSix};