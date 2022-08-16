import {drawGappedHex, drawWall, drawHexagon} from "./walls.js";
import { c, circleCenter } from "./hexagon.js";

const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

function drawCenter(r, radianAngle){
    ctx.save();
    drawHexagon(r, radianAngle)
    ctx.restore();
}

function drawSolidWall(r, radianAngle, num, rot, r2){
    ctx.save();
    drawWall(r, num, rot, radianAngle, r2);
    ctx.restore();
}

function drawGappedWall(r, radianAngle){
    ctx.save();
    drawGappedHex(r, radianAngle)
    ctx.restore();
}

function drawController(n, col) {
    ctx.save()
    ctx.beginPath();
    circleCenter.x = 110 * Math.cos(c * n)
    circleCenter.y = 110 * Math.sin(c * n)
    ctx.arc(110 * Math.cos(c * n), 110 * Math.sin(c * n), 10, 0, 2 * Math.PI)
    ctx.fillStyle = col;
    ctx.fill();
    ctx.stroke();
    ctx.restore()
  }

export{drawSolidWall, drawGappedWall, drawCenter, drawController}