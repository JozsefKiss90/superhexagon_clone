import  drawBackgorund  from "./background.js"
import {drawCenter, drawController} from "./draw.js"
import {keyDownHandler, keyUpHandler, rightPressed, leftPressed} from "./handlers.js"
import {coordinates, parameters, moveCoordiantes, drawCoordinates} from './coordinates.js'
import {doesLineInterceptCircle, handleCollisons} from "./collision.js"
import {startTimer} from "./timer.js"   

export const a = 2 * Math.PI / 6
export const c = 2 * Math.PI / 180
export const circleCenter = {x : 0, y : 0}
export let angle = -10

const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")

let color
let n = 0

let Interval
(function () {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
})()

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

let errors = document.getElementById("countErrors")
errors.innerHTML = -1
let previousState = false

function animate(){
  requestAnimationFrame(animate)
  moveCoordiantes()
  if(rightPressed) {
    n += 2
  }
  else if(leftPressed) {
    n -= 2
  }
  let gapped 
  angle += -1
  const intersects = doesLineInterceptCircle(circleCenter, 21)
  color = intersects ? "red" : "white"
  let currentState = intersects
  previousState == false && currentState == true ? errors.innerHTML ++ : errors.innerHTML
  intersects == true ? previousState = true : previousState = false
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.save()
  ctx.translate(400, 250)
  ctx.globalCompositeOperation = "source-over"
  drawBackgorund(angle)
  drawCoordinates()
  drawCenter(70, angle)
  drawController(n, color)
  ctx.restore()
  handleCollisons(coordinates, gapped, parameters)
}
requestAnimationFrame(animate)