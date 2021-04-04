function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
} 

let mode = 'UNIVERSE';
function draw() {
    background(0);
    stroke(100);
    randomSeed(0);
        let a = map(mouseX, 0, windowWidth, 100, 255);
        for(let i=0;i<windowWidth;i++){
          stroke(a, i, i/2);
          line(i,0,i,height);
        }

  let x, y, r;
  let di = map(mouseX, 0, windowWidth/4, 10,100);
  for (y=0; y<windowHeight; y+=di) {
    for (x=0; x<windowWidth; x+=di) {
      r = random(0, 1);
      if (r < 0.5) {
        fill(255, 255, 255, random(0, 255));
        switch(mode) {
          case 'UNIVERSE': 
          noStroke();
          ellipse(x, y, di/4, di/4);
          stroke(255,255,255,random(0,255));
          strokeWeight(5);
          line(x, y, x+di, y+di);
          noStroke();
          stars();
          break;
          
          case 'RAIN':
          stroke(255,255,255,random(0,255));
          strokeWeight(5);
          line(x,y, x, y+di);
          stars();
          break;
          
          case 'BROKE':
          stroke(255);
          let a = random(1,4);
          let x1 = x+random(-di, di);
          let y1 = di*a;
          line(x,0,x,y1);
          line(x,y1,x1,y1);
          let x2 = x1+random(-di, di);
          let y2 = y1+di*a;
          line(x1,y1,x1,y2);
          line(x1, y2, x2, y2);
          let x3 = x2+random(-di, di);
          let y3 = y2+di*a;
          line(x2, y2, x2, y3);
          line(x2, y3, x3, y3);
          let x4 = x3+random(-di, di);
          let y4 = y3+di*a;
          line(x3, y3, x3, y4);
          line(x3, y4, x4, y4);
          let x5 = x4+random(-di, di);
          let y5 = y4+di*a;
          line(x4, y4, x4, y5);
          line(x4, y5, x5, y5);
          let x6 = x5+random(-di, di);
          let y6 = y5+di*a;
          line(x5, y5, x5, y6);
          line(x5, y6, x6, y6);
          stars2();
          break;
        }
      }
    }
  }
}

  

//background stars
function stars(){
  let sizes = random(1,5);
  for(let i = 0; i<10; i++){
    let x3 = random(0, width);
    let y3 = random(0, height);
    fill(255, 255, 255);
    ellipse(x3, y3, sizes, sizes);
  }
}

function stars2(){
  let sizes = random(1,5);
  for(let i = 0; i<10; i++){
    let x3 = random(0, width);
    let y3 = random(0, height);
    fill(255, 255, 255);
    square(x3, y3, sizes);
  }
}

function keyPressed(){
  switch(key) {
    case '1' : mode = 'UNIVERSE';
    break;
    case '2' : mode = 'RAIN';
    break;
    case '3' : mode = 'BROKE';
    break;
  }
}
