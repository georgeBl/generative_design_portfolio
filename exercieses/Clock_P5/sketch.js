'use strict'
// theory
// for(gridy){ - i=0; i<number of tiles; i++
//   for(gridx){ - i=0; i<number of tiles; i++
//     draw rectangle at gridx * tile width and gridy * tile width
//   }
// }
//Math.floor(random(-1,2)) - yes no maybe

// let actStrokeCap;
//
// function setup(){
//   // frameRate(1);
//   createCanvas(500,500);
//   actStrokeCap = ROUND;
// }
// function draw(){
//
//   randomSeed(100);
//   background(255);
//   strokeCap(actStrokeCap);
//   const numberOfTiles = 25, // in 1 dirrection  total number will be numberOfTiles^2
//         tileWidth = width/numberOfTiles;
//   for(let gridY = 0; gridY<numberOfTiles; gridY++){
//     for(let gridX = 0; gridX<numberOfTiles; gridX++){
//       // ellipseMode(CORNER);
//
//       fill("RED");
//       angleMode(DEGREES);
//
//       // rectMode(CENTER);
//       push();
//       translate(gridX*tileWidth+tileWidth/2,gridY*tileWidth+tileWidth/2);
//       // translate(gridX*tileWidth, gridY*tileWidth);
//       // random()>0.5 ? rotate(90) : rotate(0);
//       // scale();
//       // rect(0,0,tileWidth,tileWidth);
//       // line(0,tileWidth,tileWidth,0);
//       strokeWeight(5);
//       random()>0.5 ? line(-tileWidth/2,tileWidth/2,tileWidth/2,-tileWidth/2)
//        : line(-tileWidth/2,-tileWidth/2,tileWidth/2,tileWidth/2)
//       pop();
//     }
//   }
// }

function setup(){
  createCanvas(600,600);

}

function draw(){
  background("grey");
  strokeCap(SQUARE);
  const radius = 250,
        hourThick = 40,
        secondThick = 20,
        thickGap = 10;



  //clock bg
  push();
  noStroke()
  translate(width/2,height/2);
  ellipse(0,0,radius*2,radius*2);
  fill(0);
  pop();

  //clock ticks
  for(let i=0;i<60; i++){
    push();

    angleMode(DEGREES); // work with degrees no radians
    translate(width/2,height/2);
    rotate(map(i,0,60,0,360));
    if(i===0 || i%5===0) {//check if its an hour
      strokeWeight(10);
      line(0,radius-hourThick,0,radius-thickGap);
    }
    else {
      strokeWeight(4);
      line(0,radius-secondThick,0,radius-thickGap);
    }
    pop();
  }

  //variables for the time indicators, you know those lines that move
  let hr = hour(),
      mn = minute(),
      sc = second();

  let secondAngle = map(sc, 0, 60, 0, 360),
      minuteAngle = map(mn, 0, 60, 0, 360),
      hourAngle = map(hr, 0, 12, 0, 360);
  //draw time indicatiors

  //hours
  push();
  translate(width/2,height/2);
  rotate(hourAngle+270);
  fill(0);
  strokeWeight(13);
  line(-50, 0, radius-70, 0);
  pop();

  //minutes
  push();
  translate(width/2,height/2);
  rotate(minuteAngle+270);
  fill(0);
  strokeWeight(10);
  line(-50, 0, radius-thickGap-5, 0);
  pop();

  //seconds line
  push();
  translate(width/2,height/2);
  rotate(secondAngle+270);
  strokeWeight(5);
  stroke("red");
  line(-50, 0, radius-70, 0);
  fill("red");
  ellipse(0,0,10,10);
  ellipse(radius-70,0,30,30);
  pop();

  //numbers cause why not?! probbly gonan look ugly but imagine they not there
  // push();
  // textSize(32);
  // textAlign(CENTER, BOTTOM);
  // fill("black");
  // translate(width/2,50);
  // text("12",0,0);
  // pop();

  // for()

}



function keyReleased(){
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}