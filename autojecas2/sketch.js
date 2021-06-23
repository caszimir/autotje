let walls = [];
let ray;
let particle;
let car;
let move;
let draai = 10;
let movex = 500;
let movey = 150;
let newx;
let newy;
let draaigrade = 0.0;
let cosinusx;
let cosinusy;
let n;
let n2;
let speed = 3;

function setup() {
    createCanvas(displayWidth * 0.85, displayHeight * 0.85);


    car = new Car(0, 0);



    walls[0] = new Boundary(100, 100, 900, 100);
    walls[1] = new Boundary(900, 100, 1100, 200);
    walls[2] = new Boundary(1100, 200, 1100, 400);
    walls[3] = new Boundary(1100, 400, 900, 800);
    walls[4] = new Boundary(900, 800, 300, 400);
    walls[5] = new Boundary(300, 400, 100, 400);
    walls[6] = new Boundary(100, 400, 100, 100);
    walls[7] = new Boundary(200, 200, 850, 200);
    walls[8] = new Boundary(850, 200, 1000, 250);
    walls[9] = new Boundary(1000, 250, 975, 400);
    walls[10] = new Boundary(975, 400, 850, 650);
    walls[11] = new Boundary(850, 650, 300, 300);
    walls[12] = new Boundary(300, 300, 250, 300);
    walls[13] = new Boundary(250, 300, 200, 200);
    particle = new Particle();
    hoekenreken();
}

function draw() {
    background(0);
    push();
    translate(movex, movey);
    if (keyIsDown(UP_ARROW)) {
        draaigrade = draaigrade - 3;
        console.log(draaigrade);
        if (draaigrade < -360){
          draaigrade = draaigrade + 360;
        }
        if (draaigrade < -180){
          draaigrade = draaigrade*-1 -(180 +draaigrade);
        }
        hoekenreken()
    }

    if (keyIsDown(DOWN_ARROW)) {
        draaigrade = draaigrade + 3;
        if (draaigrade > 360){
          draaigrade = draaigrade - 360;
        }
        if (draaigrade > 180){
          draaigrade = draaigrade*-1 +(180 -draaigrade);
        }
        console.log(draaigrade);
        hoekenreken();
    }



    angleMode(DEGREES);
    rotate(draaigrade);

    if (keyIsDown(LEFT_ARROW)) {
        movex = movex - cosinusx*speed;
        movey = movey - cosinusy*speed;
        newx = car.x - 1;
        console.log("movex: " + movex.toString() + " movey: " + movey.toString());
    }
    if (keyIsDown(RIGHT_ARROW)) {
        movex = movex + cosinusx*speed;
        movey = movey + cosinusy*speed;       
        newx = car.x + 1;
        console.log("movex: " + movex.toString() + " movey: " + movey.toString());

    }
    fill(255);
    // ellipse(this.pos.x, this.pos.y, 20);
    rect(0 - 10, 0 - 5, 20, 10);
    pop();
    particle.update(movex, movey);
    particle.show();
  
    particle.look(walls);
    for (let wall of walls) {
       wall.show();
    }
}





function toDegrees (angle) {
    return angle * (180 / Math.PI);

}
function toRadians (angle) {
    return angle * (Math.PI / 180);
}
function hoekenreken() {
    if (draaigrade > 90){
        console.log("linkssonder");
        cosinusx = -1*Math.cos(toRadians(180-draaigrade));
        n2 = cosinusx.toString();
        console.log("x = "+n2);
        cosinusy = 1*Math.cos(toRadians(draaigrade -90));
        n = cosinusy.toString();  
        console.log("y = "+n);
        
    } else if(draaigrade> 0){
        console.log("Rechtsonder");
        cosinusx = 1*Math.cos(toRadians(draaigrade));
        n = cosinusx.toString();  
        console.log("x = "+n);
        cosinusy = 1*Math.cos(toRadians(90-draaigrade));
        n2 = cosinusy.toString();
        console.log("y = "+n2);
        
        
    } else if(draaigrade< -90){
        console.log("linksboven");   
        cosinusx = 1*Math.cos(toRadians(draaigrade));
        n = cosinusx.toString();  
        console.log("x = "+n);
        cosinusy = 1*Math.cos(toRadians(90-draaigrade));
        n2 = cosinusy.toString();
        console.log("y = "+n2);
        
         
    } else if(draaigrade< 0){
        console.log("Rechtsboven");    
        cosinusx = 1*Math.cos(toRadians(draaigrade));
        n = cosinusx.toString();  
        console.log("x = "+n);
        cosinusy = 1*Math.cos(toRadians(90-draaigrade));
        n2 = cosinusy.toString();
        console.log("y = "+n2);
    } else if (draaigrade == 0){
        cosinusx = 1;
        cosinusy = 0;
        console.log("rechtvooruit")
    }
}