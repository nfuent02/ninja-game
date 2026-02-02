
function Enemy(x,y,vx,range,size) {
    this.pos = [x,y];
    this.vel = [vx,0];
	this.range = [x-range,x+range];
    this.size = size;
    this.color = color(random(255),random(255),random(255));
    this.isDead = false;
}

function updateEnemy(t_enemy) {
	let centerX = 1/2 * (t_enemy.range[0] + t_enemy.range[1]);
	t_enemy.pos[0] += t_enemy.vel[0]
	if (t_enemy.pos[0] <  1/2 * (centerX + t_enemy.range[0]) || t_enemy.pos[0] >  1/2 * (centerX + t_enemy.range[1])) {
		t_enemy.vel[0] += 0.2*(centerX - t_enemy.pos[0]) / (t_enemy.range[1] - t_enemy.range[0]);
	}

	// / (t_enemy.range[1] - t_enemy.range[0])
}


function drawEnemy(enemyObject) {

	push();
	translate(enemyObject.pos[0], enemyObject.pos[1]);

	// Body
	fill(enemyObject.color);
	noStroke();
	ellipse(0, -2.5 * enemyObject.size, 2.1 * enemyObject.size);
	rect(-1.05 * enemyObject.size, -2.5 * enemyObject.size, 2.1 * enemyObject.size, 2.1 * enemyObject.size);

	// Feet
	ellipse(-0.7 * enemyObject.size, -0.4 * enemyObject.size, 0.7 * enemyObject.size);
	ellipse(0, -0.4 * enemyObject.size, 0.7 * enemyObject.size);
	ellipse(0.7 * enemyObject.size, -0.4 * enemyObject.size, 0.7 * enemyObject.size);

	// Eyeballs
	fill(255);
	ellipse(-0.5 * enemyObject.size, -2.5 * enemyObject.size, 0.5 * enemyObject.size);
	ellipse(0.5 * enemyObject.size, -2.5 * enemyObject.size, 0.5 * enemyObject.size);

	// Eyebrows
	stroke(0);
	strokeWeight(0.2 * enemyObject.size);
	line(-0.7 * enemyObject.size, -2.8 * enemyObject.size, -0.2 * enemyObject.size, -2.6 * enemyObject.size);
	line(0.7 * enemyObject.size, -2.8 * enemyObject.size, 0.2 * enemyObject.size, -2.6 * enemyObject.size);

	// Eyes
	strokeWeight(0.25 * enemyObject.size);

	if (enemyObject.vel[0] > 0) {
		point(-0.4 * enemyObject.size, -2.5 * enemyObject.size);
		point(0.6 * enemyObject.size, -2.5 * enemyObject.size);

	} else if (enemyObject.vel[0] < 0) {
		point(-0.6 * enemyObject.size, -2.5 * enemyObject.size);
		point(0.4 * enemyObject.size, -2.5 * enemyObject.size);

	} else {
		point(-0.5 * enemyObject.size, -2.5 * enemyObject.size);
		point(0.5 * enemyObject.size, -2.5 * enemyObject.size);
	}

	pop();

}

function checkEnemy(t_enemy) {

    // We're basically trying to cover our character with circles to check collision more accurately
	let d1 = dist(gameChar.pos[0], gameChar.pos[1] - 1*gameChar.size, t_enemy.pos[0], t_enemy.pos[1] - 2.3*t_enemy.size);
	let d2 = dist(gameChar.pos[0], gameChar.pos[1] - 3*gameChar.size, t_enemy.pos[0], t_enemy.pos[1] - 2.3*t_enemy.size);
	let d3 = dist(gameChar.pos[0], gameChar.pos[1] - 5*gameChar.size, t_enemy.pos[0], t_enemy.pos[1] - 2.3*t_enemy.size);
	let d4 = dist(gameChar.pos[0], gameChar.pos[1] - 7*gameChar.size, t_enemy.pos[0], t_enemy.pos[1] - 2.3*t_enemy.size);
	let r = t_enemy.size + gameChar.size;

	if ((d1 < r || d2 < r || d3 < r || d4 < r) && !t_enemy.isDead && flagpole) {
        if(lives > 1) {
            dyingSound.play();
            startGame();
        } else if (lives == 1) {
			time = millis();
			bgMusic.stop();
			wastedSound.play(0,1,1,1.2,8);
			cr7Sound.play(8);
        }
		lives -=1;
	}

}
