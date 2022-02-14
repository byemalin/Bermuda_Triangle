let shared;

let me;

// let tick_sound;

// let wipe;



function preload() {
  partyConnect(
    "wss://deepstream-server-1.herokuapp.com",
    "Bermuda_Triangle",
    "main"
  );
  shared = partyLoadShared("globals");
  me = partyLoadMyShared();
  participants = partyLoadParticipantShareds();
}



function setup() {
  createCanvas(600, 300);

  // tick_sound = loadSound('../Assets/audio/tick.mp3');

  // wipe = loadSound('../Assets/audio/wipe.mp3');

  // tick_sound.setVolume(0.1);

  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  partyToggleInfo(false);

  

  //team 1 variables

  //goal triangle:
  shared.x1 = 200;
shared.y1 = 50;
shared.x2 = 100;
shared.y2 = 250;
shared.x3 = 300;
shared.y3 = 250;

//user triangle:
shared.a1 = 150;
shared.b1 = 50;
shared.a2 = 50;
shared.b2 = 250;
shared.a3 = 250;
shared.b3 = 250;

// team 2 variables

shared.c1 = 450;
shared.d1 = 50;
shared.c2 = 350;
shared.d2 = 250;
shared.c3 = 550;
shared.d3 = 250;

//user triangle:
shared.e1 = 400;
shared.f1 = 50;
shared.e2 = 300;
shared.f2 = 250;
shared.e3 = 500;
shared.f3 = 250;

shared.teamAScore = "";
shared.teamBScore = "";

shared.clicksA = 0;
shared.clicksB = 0;

me.x = 300;
me.y = 150;


  
}


  

function mouseMoved(e) {
  // update this participants cursor position
  me.x = mouseX;
  me.y = mouseY;

}

function mousePressed() {

  // tick_sound.play();

  // if (song.isPlaying()) {
  //   // .isPlaying() returns a boolean
  //   song.stop();
  //   background(255, 0, 0);
  // } else {
  //   song.play();
  //   background(0, 255, 0);
  // }

  

  if (mouseX<300 && mouseY>0 && mouseY<300 && mouseX>0){
    shared.clicksA ++
    if (dist(shared.x1, shared.y1, shared.a1, shared.b1) > 10) {
      
      shared.x1= random(100,200);
      shared.y1= random(0,100);
      
    } else {
      shared.x1 = shared.a1;
      shared.y1 = shared.b1;
      shared.teamAScore = ("¯\_( ͠• 👅͠• )_/¯")
     
    }
    
      if (dist(shared.x2, shared.y2, shared.a2, shared.b2) > 10) {

      shared.x2= random(0,100);
      shared.y2= random(200,300);
      
    } else {
      shared.x2 = shared.a2;
      shared.y2 = shared.b2;
      shared.teamAScore = ("¯\_( ͠• ͜ʖ͠• )_/¯")
    }
    
    if (dist(shared.x3, shared.y3, shared.a3, shared.b3) > 10) {

      shared.x3= random(200,300);
      shared.y3= random(200,300)
      
    } else {
      shared.x3 = shared.a3;
      shared.y3 = shared.b3;
      shared.teamAScore = ("( ͡❛ ₃ ͡❛)")
    }
  } else if (mouseX>300 && mouseY>0 && mouseY<300 && mouseX<600){

    shared.clicksB ++
    
    //2nd team triangle
    if (dist(shared.e1, shared.f1, shared.c1, shared.d1) > 10) {
      
      shared.e1= random(400,500);
      shared.f1= random(0,100);
      
    } else {
      shared.e1 = shared.c1;
      shared.f1 = shared.d1;
      shared.teamBScore = ("( ͡👁️ ͜ʖ ͡👁️)")
    }
    
      if (dist(shared.e2, shared.f2, shared.c2, shared.d2) > 10) {

      shared.e2= random(300,400);
      shared.f2= random(200,300);
      
    } else {
      shared.e2 = shared.c2;
      shared.f2 = shared.d2;
      shared.teamBScore = ("( ❛︠ ͜ʖ ︡❛))")
    }
    
    if (dist(shared.e3, shared.f3, shared.c3, shared.d3) > 10) {

      shared.e3= random(500,600);
      shared.f3= random(200,300)
      
    } else {
      shared.e3 = shared.c3;
      shared.f3 = shared.d3;
      shared.teamBScore = ("( ❛︠ ͜ʖ ︡❛)👌")
    }

  }
}

function draw() {
  background("#403D39");
  // background(220);

  // triangle(random(100,200), random(0,100),random(0,100),random(200,300),random(200,300), random(200,300))


  // GOAL TRIANGLES
  fill(color(37, 36, 34));
  triangle(shared.a1, shared.b1, shared.a2, shared.b2, shared.a3, shared.b3);
  triangle(shared.c1, shared.d1, shared.c2, shared.d2, shared.c3, shared.d3);

  

  
  
  
  
  

  //user triangles
  // fill(color(120, 170, 120, 200));
  fill(color(204, 197, 185, 200));
  triangle(shared.x1, shared.y1, shared.x2, shared.y2, shared.x3, shared.y3);
  triangle(shared.e1, shared.f1, shared.e2, shared.f2, shared.e3, shared.f3);

 

  
  //TEXT
  textSize(15);
  
  fill(255, 252, 242);
  text(shared.teamAScore, 150,280)
  text(shared.teamBScore, 450,280)

  fill(235, 94, 40);
  text(shared.clicksA, 20, 25)
  text(shared.clicksB, 580, 25)
  

  //CURSORS
  fill("#EB5E28");
  ellipse(me.x, me.y, 5, 5);

  for (const p of participants) {
    if (typeof p.x !== "undefined") {
      fill("#1B98E0");
      ellipse(p.x, p.y, 5, 5);
    }
  }

  //ALL 3 POINTS IN PLACE:

  if (dist(shared.x1, shared.y1, shared.a1, shared.b1) < 5 && dist(shared.x2, shared.y2, shared.a2, shared.b2) < 5 && dist(shared.x3, shared.y3, shared.a3, shared.b3) < 5) {
    fill(color(235, 94, 40));
    triangle(shared.a1, shared.b1, shared.a2, shared.b2, shared.a3, shared.b3);

  
    
  } else if (dist(shared.e1, shared.f1, shared.c1, shared.d1) < 5 && dist(shared.e2, shared.f2, shared.c2, shared.d2) < 5 && dist(shared.e3, shared.f3, shared.c3, shared.d3) < 5) {
    fill(color(235, 94, 40));
    triangle(shared.c1, shared.d1, shared.c2, shared.d2, shared.c3, shared.d3);

  }
  

  // line(100, 300, 100, 0);
  // line(200, 300, 200, 0);
  // line(0, 100, 300, 100);
  // line(0, 200, 300, 200);

  // line(400, 300, 400, 0);
  // line(500, 300, 500, 0);
  // line(300, 100, 600, 100);
  // line(300, 200, 600, 200);

  
  
}

function keyPressed(){
  
  if (key == ' '){ 

    // wipe.play();

    shared.scoreA=0;
    shared.teamAScore = "";
    shared.teamBScore = "";
    shared.clicksA = 0;
    shared.clicksB = 0;

    shared.a1= random(100,200);
  shared.b1= random(0,100);
  shared.a2= random(0,100);
  shared.b2= random(200,300);
  shared.a3= random(200,300);
  shared.b3= random(200,300);

  shared.c1= shared.a1 + 300
  shared.d1=  shared.b1
  shared.c2= shared.a2 + 300
  shared.d2=  shared.b2
  shared.c3= shared.a3 + 300
  shared.d3=  shared.b3


  }
}



//Steps to upgrade the game:

// Add triangles for a second team

window.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM fully loaded and parsed');

  const inst = document.getElementById("instructions")

const popup = document.getElementById("popup")



console.log("hi");
console.log(popup);
console.log("why"+inst);



inst.addEventListener("mouseover", respondMouseOver);
inst.addEventListener("mouseout", respondMouseOut);

function respondMouseOver(event) {
  popup.classList.add('show');
}
function respondMouseOut(event) {
  popup.classList.remove('show');
}

});