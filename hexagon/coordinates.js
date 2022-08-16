import {drawSolidWall, drawGappedWall} from "./draw.js"  
import {angle} from './hexagon.js'

let coordinates = {
    x : 230,
    y : 460,
    z : 690
  }
  
function randInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let parameters = {
    rndInt : randInt(5, 10),
    rndInt2 : randInt(5, 10),
    rndInt3 : randInt(5, 10),

    rotate : randInt(4, 5),
    rotate_2 : randInt(4, 5),
    rotate_3 : randInt(4, 5),
    
    gappedOrNot : randInt(0, 5),
    gappedOrNot2 : randInt(0, 5),
    gappedOrNot3 : randInt(0, 5)
  }

function moveCoordiantes() {
      coordinates.x == 30 ? coordinates.x = 690 : coordinates.x-= 1
      coordinates.x == 30 ? parameters.rndInt = randInt(5, 10) : parameters.rndInt 
      coordinates.x == 30 ? parameters.rotate = randInt(4, 5) : parameters.rotate
      coordinates.x == 30 ? parameters.gappedOrNot = randInt(0, 5) : parameters.gappedOrNot
    
      coordinates.y == 30 ? coordinates.y = 690 : coordinates.y-= 1
      coordinates.y == 30 ? parameters.rndInt2 = randInt(5, 10) : parameters.rndInt2 
      coordinates.y == 30 ? parameters.rotate_2 = randInt(4, 5) : parameters.rotate_2
      coordinates.y == 30 ? parameters.gappedOrNot2 = randInt(0, 5) : parameters.gappedOrNot2
      
      coordinates.z == 30 ? coordinates.z = 690 : coordinates.z-= 1
      coordinates.z == 30 ? parameters.rndInt3 = randInt(5, 10) : parameters.rndInt3 
      coordinates.z == 30 ? parameters.rotate_3 = randInt(4, 5) : parameters.rotate_3
      coordinates.z == 30 ? parameters.gappedOrNot3 = randInt(0, 5) : parameters.gappedOrNot3
}

function drawCoordinates() {
    parameters.gappedOrNot > 1 ? drawSolidWall(coordinates.x, angle, parameters.rndInt, parameters.rotate, coordinates.x2) : drawGappedWall(coordinates.x, angle)
    parameters.gappedOrNot2 > 1 ? drawSolidWall(coordinates.y, angle, parameters.rndInt2, parameters.rotate_2) : drawGappedWall(coordinates.y, angle)
    parameters.gappedOrNot3 > 1 ? drawSolidWall(coordinates.z, angle, parameters.rndInt3, parameters.rotate_3) : drawGappedWall(coordinates.z, angle)
}

export {coordinates, parameters, angle, moveCoordiantes, drawCoordinates}