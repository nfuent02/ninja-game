
function checkPlayerDie() {
    if (gameChar.isPlummeting && gameChar.pos[1] >= 2*height ) {
            
            if(lives > 1) {
                dyingSound.play();
                startGame();
            } else if (lives == 1) {
                time = millis();
                bgMusic.stop();
                wastedSound.play(0, 1, 1, 1.2, 8); 
                
                cr7Sound.play(8);
            }
            
            lives -= 1;
    }
}

// Function to draw the game character.

function drawGameChar()
{
	push();
	translate(gameChar.pos[0], gameChar.pos[1]);

	if (!gameChar.isFalling) {

		// Walking left
		if (gameChar.isLeft && !gameChar.isRight) {
			// Head
			fill(0);
			ellipse(0, -7 * gameChar.size, 3 * gameChar.size);

			// Body
			beginShape();
			vertex(-gameChar.size, -5.5 * gameChar.size);
			vertex(-0.4 * gameChar.size, -5.2 * gameChar.size);
			vertex(gameChar.size, -5.5 * gameChar.size);
			vertex(0.7 * gameChar.size, -2.55 * gameChar.size);
			vertex(0.1 * gameChar.size, -2.45 * gameChar.size);
			vertex(-gameChar.size, -5.5 * gameChar.size);
			endShape();

			// Left leg
			beginShape();
			vertex(0.12 * gameChar.size, -2.39 * gameChar.size);
			vertex(0.68 * gameChar.size, -2.47 * gameChar.size);
			vertex(-0.35 * gameChar.size, -1.5 * gameChar.size);
			vertex(-0.8 * gameChar.size, -0.1 * gameChar.size);
			vertex(-1.02 * gameChar.size, -0.13 * gameChar.size);
			vertex(-0.6 * gameChar.size, -1.7 * gameChar.size);
			vertex(0.12 * gameChar.size, -2.39 * gameChar.size);
			endShape();

			// Right leg
			beginShape();
			vertex(0.12 * gameChar.size, -2.39 * gameChar.size);
			vertex(0.68 * gameChar.size, -2.47 * gameChar.size);
			vertex(0.25 * gameChar.size, -1.35 * gameChar.size);
			vertex(0.7 * gameChar.size, -0.12 * gameChar.size);
			vertex(0.5 * gameChar.size, -0.1 * gameChar.size);
			vertex(-0.1 * gameChar.size, -1.4 * gameChar.size);
			vertex(0.12 * gameChar.size, -2.39 * gameChar.size);
			endShape();


			// Left arm
			fill(0);
			beginShape();
			vertex(-0.4 * gameChar.size, -5.2 * gameChar.size);
			vertex(-1.2 * gameChar.size, -3.7 * gameChar.size);
			vertex(-2.5 * gameChar.size, -4.2 * gameChar.size);
			vertex(-2.55 * gameChar.size, -4 * gameChar.size);
			vertex(-1.1 * gameChar.size, -3.25 * gameChar.size);
			vertex(0.3 * gameChar.size, -5.35 * gameChar.size);
			vertex(-0.4 * gameChar.size, -5.2 * gameChar.size);
			endShape();

			// Right arm
			beginShape();
			vertex(-0.4 * gameChar.size, -5.2 * gameChar.size);
			vertex(-0.4 * gameChar.size, -4.2 * gameChar.size);
			vertex(-1.2 * gameChar.size, -4.3 * gameChar.size);
			vertex(-1.25 * gameChar.size, -4.15 * gameChar.size);
			vertex(0 * gameChar.size, -3.8 * gameChar.size);
			vertex(0.3 * gameChar.size, -5.35 * gameChar.size);
			vertex(-0.4 * gameChar.size, -5.2 * gameChar.size);
			endShape();

			// Face
			fill(251, 219, 208);
			beginShape();
			vertex(-1.49 * gameChar.size, -6.8 * gameChar.size);
			quadraticVertex(gameChar.size, -7.2 * gameChar.size, -1.45 * gameChar.size, -7.4 * gameChar.size);
			endShape();
			stroke(0);

			// Eyes
			strokeWeight(0.25 * gameChar.size);
			point(-1.15 * gameChar.size, -7.1 * gameChar.size);

			// Eyebrows
			strokeWeight(0.15 * gameChar.size);
			line(-1.1 * gameChar.size, -7.25 * gameChar.size, -1.3 * gameChar.size, -7.1 * gameChar.size);

			// Front of the face
			noStroke();
			fill(251, 219, 208);
			arc(0, -7 * gameChar.size, 3 * gameChar.size, 3 * gameChar.size, PI - 0.15 * QUARTER_PI, PI + 0.35 * QUARTER_PI, OPEN);

			// Headband
			fill(0);
			beginShape();
			vertex(1.5 * gameChar.size, -7 * gameChar.size);
			vertex(2.5 * gameChar.size, -7.3 * gameChar.size);
			vertex(2.55 * gameChar.size, -7.1 * gameChar.size);
			vertex(1.5 * gameChar.size, -7 * gameChar.size);
			vertex(2.2 * gameChar.size, -6.9 * gameChar.size);
			vertex(2.1 * gameChar.size, -6.7 * gameChar.size);
			vertex(1.5 * gameChar.size, -7 * gameChar.size);
			endShape();
		}

		// Walking right
		else if (gameChar.isRight && !gameChar.isLeft) {
			fill(0);

			//head
			ellipse(0, -7 * gameChar.size, 3 * gameChar.size);

			//body
			beginShape();
			vertex(gameChar.size, -5.5 * gameChar.size);
			vertex(0.4 * gameChar.size, -5.2 * gameChar.size);
			vertex(-gameChar.size, -5.5 * gameChar.size);
			vertex(-0.7 * gameChar.size, -2.55 * gameChar.size);
			vertex(-0.1 * gameChar.size, -2.45 * gameChar.size);
			vertex(gameChar.size, -5.5 * gameChar.size);
			endShape();

			//legs
			beginShape();
			vertex(-0.12 * gameChar.size, -2.39 * gameChar.size);
			vertex(-0.68 * gameChar.size, -2.47 * gameChar.size);
			vertex(0.35 * gameChar.size, -1.5 * gameChar.size);
			vertex(0.8 * gameChar.size, -0.1 * gameChar.size);
			vertex(1.02 * gameChar.size, -0.13 * gameChar.size);
			vertex(0.6 * gameChar.size, -1.7 * gameChar.size);
			vertex(-0.12 * gameChar.size, -2.39 * gameChar.size);
			endShape();

			beginShape();
			vertex(-0.12 * gameChar.size, -2.39 * gameChar.size);
			vertex(-0.68 * gameChar.size, -2.47 * gameChar.size);
			vertex(-0.25 * gameChar.size, -1.35 * gameChar.size);
			vertex(-0.7 * gameChar.size, -0.12 * gameChar.size);
			vertex(-0.5 * gameChar.size, -0.1 * gameChar.size);
			vertex(0.1 * gameChar.size, -1.4 * gameChar.size);
			vertex(-0.12 * gameChar.size, -2.39 * gameChar.size);
			endShape();


			//arms
			fill(0);
			beginShape();
			vertex(0.4 * gameChar.size, -5.2 * gameChar.size);
			vertex(1.2 * gameChar.size, -3.7 * gameChar.size);
			vertex(2.5 * gameChar.size, -4.2 * gameChar.size);
			vertex(2.55 * gameChar.size, -4 * gameChar.size);
			vertex(1.1 * gameChar.size, -3.25 * gameChar.size);
			vertex(-0.3 * gameChar.size, -5.35 * gameChar.size);
			vertex(0.4 * gameChar.size, -5.2 * gameChar.size);
			endShape();

			beginShape();
			vertex(0.4 * gameChar.size, -5.2 * gameChar.size);
			vertex(0.4 * gameChar.size, -4.2 * gameChar.size);
			vertex(1.2 * gameChar.size, -4.3 * gameChar.size);
			vertex(1.25 * gameChar.size, -4.15 * gameChar.size);
			vertex(0, -3.8 * gameChar.size);
			vertex(-0.3 * gameChar.size, -5.35 * gameChar.size);
			vertex(0.4 * gameChar.size, -5.2 * gameChar.size);
			endShape();

			//face
			fill(251, 219, 208);
			beginShape();
			vertex(1.49 * gameChar.size, -6.8 * gameChar.size);
			quadraticVertex(-gameChar.size, -7.2 * gameChar.size, 1.45 * gameChar.size, -7.4 * gameChar.size);
			endShape();
			stroke(0);
			strokeWeight(0.25 * gameChar.size);

			point(1.15 * gameChar.size, -7.1 * gameChar.size);

			strokeWeight(0.15 * gameChar.size);

			line(1.1 * gameChar.size, -7.25 * gameChar.size, 1.3 * gameChar.size, -7.1 * gameChar.size);

			noStroke();
			fill(251, 219, 208);
			arc(0, -7 * gameChar.size, 3 * gameChar.size, 3 * gameChar.size, -0.35 * QUARTER_PI, 0.15 * QUARTER_PI, OPEN);

			// Headband
			fill(0);
			beginShape();
			vertex(-1.5 * gameChar.size, -7 * gameChar.size);
			vertex(-2.5 * gameChar.size, -7.3 * gameChar.size);
			vertex(-2.55 * gameChar.size, -7.1 * gameChar.size);
			vertex(-1.5 * gameChar.size, -7 * gameChar.size);
			vertex(-2.2 * gameChar.size, -6.9 * gameChar.size);
			vertex(-2.1 * gameChar.size, -6.7 * gameChar.size);
			vertex(-1.5 * gameChar.size, -7 * gameChar.size);
			endShape();
		} 

		// Standing
		else {
			// Swords
			stroke(0);

			strokeWeight(0.2 * gameChar.size);
			line(-3 * gameChar.size, -6 * gameChar.size, -1.8 * gameChar.size, -5.4 * gameChar.size)
			line(3 * gameChar.size, -6 * gameChar.size, 1.8 * gameChar.size, -5.4 * gameChar.size)

			strokeWeight(0.12 * gameChar.size);
			line(-1.86 * gameChar.size, -5.18 * gameChar.size, -1.66 * gameChar.size, -5.58 * gameChar.size);
			line(1.86 * gameChar.size, -5.18 * gameChar.size, 1.66 * gameChar.size, -5.58 * gameChar.size);

			strokeWeight(0.01 * gameChar.size);

			fill(230);
			triangle(-1.7 * gameChar.size, -5.35 * gameChar.size, -1.65 * gameChar.size, -5.45 * gameChar.size, 0.2 * gameChar.size, -4.4 * gameChar.size);
			triangle(1.7 * gameChar.size, -5.35 * gameChar.size, 1.65 * gameChar.size, -5.45 * gameChar.size, -0.2 * gameChar.size, -4.4 * gameChar.size);

			fill(200);
			triangle(-1.75 * gameChar.size, -5.25 * gameChar.size, -1.7 * gameChar.size, -5.35 * gameChar.size, 0.2 * gameChar.size, -4.4 * gameChar.size);
			triangle(1.75 * gameChar.size, -5.25 * gameChar.size, 1.7 * gameChar.size, -5.35 * gameChar.size, -0.2 * gameChar.size, -4.4 * gameChar.size);

			// Head
			fill(0);
			ellipse(0, -7 * gameChar.size, 3 * gameChar.size);

			// Body
			beginShape();
			vertex(-gameChar.size, -5.5 * gameChar.size);
			vertex(0, -5 * gameChar.size);
			vertex(gameChar.size, -5.5 * gameChar.size);
			vertex(0.5 * gameChar.size, -2.45 * gameChar.size);
			vertex(-0.5 * gameChar.size, -2.45 * gameChar.size);
			vertex(-gameChar.size, -5.5 * gameChar.size);
			endShape();

			// Left leg
			beginShape();
			vertex(-0.5 * gameChar.size, -2.4 * gameChar.size);
			vertex(-0.7 * gameChar.size, -0.1 * gameChar.size);
			vertex(-0.45 * gameChar.size, -0.1 * gameChar.size);
			vertex(-0.05 * gameChar.size, -2.4 * gameChar.size);
			vertex(-0.5 * gameChar.size, -2.4 * gameChar.size);
			endShape();

			// Right leg
			beginShape();
			vertex(0.5 * gameChar.size, -2.4 * gameChar.size);
			vertex(0.7 * gameChar.size, -0.1 * gameChar.size);
			vertex(0.45 * gameChar.size, -0.1 * gameChar.size);
			vertex(0.05 * gameChar.size, -2.4 * gameChar.size);
			vertex(0.5 * gameChar.size, -2.4 * gameChar.size);
			endShape();

			// Left arm
			beginShape();
			vertex(-1.05 * gameChar.size, -5.4 * gameChar.size);
			vertex(-0.93 * gameChar.size, -4.68 * gameChar.size);
			vertex(-1.5 * gameChar.size, -2.53 * gameChar.size);
			vertex(-1.67 * gameChar.size, -2.6 * gameChar.size);
			vertex(-1.05 * gameChar.size, -5.4 * gameChar.size);
			endShape();

			// Right arm
			beginShape();
			vertex(1.05 * gameChar.size, -5.4 * gameChar.size);
			vertex(0.93 * gameChar.size, -4.68 * gameChar.size);
			vertex(1.5 * gameChar.size, -2.53 * gameChar.size);
			vertex(1.67 * gameChar.size, -2.6 * gameChar.size);
			vertex(1.05 * gameChar.size, -5.4 * gameChar.size);
			endShape();

			// Face
			fill(251, 219, 208);
			ellipse(0, -7.2 * gameChar.size, 2 * gameChar.size, 0.6 * gameChar.size);

			// Eyes
			fill(0);
			strokeWeight(0.25 * gameChar.size);
			point(-0.4 * gameChar.size, -7.2 * gameChar.size);
			point(0.4 * gameChar.size, -7.2 * gameChar.size);

			// Eyebrows
			strokeWeight(0.15 * gameChar.size);
			line(-0.5 * gameChar.size, -7.35 * gameChar.size, -0.25 * gameChar.size, -7.2 * gameChar.size);
			line(0.5 * gameChar.size, -7.35 * gameChar.size, 0.25 * gameChar.size, -7.2 * gameChar.size);
		}

	} else {

		// Jumping left 
		if (gameChar.isLeft && !gameChar.isRight) {
			// Head
			fill(0);
			ellipse(0, -7 * gameChar.size, 3 * gameChar.size);

			// Body
			beginShape();
			vertex(-1.2 * gameChar.size, -5.7 * gameChar.size);
			vertex(-0.6 * gameChar.size, -5.4 * gameChar.size);
			vertex(0.8 * gameChar.size, -5.3 * gameChar.size);
			vertex(-1.2 * gameChar.size, -3 * gameChar.size);
			vertex(-1.8 * gameChar.size, -4.1 * gameChar.size);
			vertex(-1.2 * gameChar.size, -5.7 * gameChar.size);
			endShape();

			// Left leg
			beginShape();
			vertex(-1.85 * gameChar.size, -4.05 * gameChar.size);
			vertex(-4.7 * gameChar.size, -3.7 * gameChar.size);
			vertex(-4.65 * gameChar.size, -3.4 * gameChar.size);
			vertex(-1.6 * gameChar.size, -3.58 * gameChar.size);
			vertex(-1.85 * gameChar.size, -4.05 * gameChar.size);
			endShape();

			// Right leg
			beginShape();
			vertex(-1.58 * gameChar.size, -3.55 * gameChar.size);
			vertex(-1.28 * gameChar.size, -3 * gameChar.size);
			vertex(-1.5 * gameChar.size, -2.7 * gameChar.size);
			vertex(-3.35 * gameChar.size, -3.05 * gameChar.size);
			vertex(-3.3 * gameChar.size, -3.3 * gameChar.size);
			vertex(-2 * gameChar.size, -3.25 * gameChar.size);
			vertex(-1.58 * gameChar.size, -3.55 * gameChar.size);
			endShape();


			// Right arm
			beginShape();
			vertex(0.8 * gameChar.size, -5.2 * gameChar.size);
			vertex(1.2 * gameChar.size, -5.55 * gameChar.size);
			vertex(0.2 * gameChar.size, -6.2 * gameChar.size);
			vertex(0.25 * gameChar.size, -6.4 * gameChar.size);
			vertex(1.9 * gameChar.size, -5.6 * gameChar.size);
			vertex(0.35 * gameChar.size, -4.68 * gameChar.size);
			vertex(0.8 * gameChar.size, -5.2 * gameChar.size);
			endShape();

			// Left arm
			beginShape();
			vertex(-1.3 * gameChar.size, -5.65 * gameChar.size);
			vertex(-1.45 * gameChar.size, -5.25 * gameChar.size);
			vertex(-2.3 * gameChar.size, -5.2 * gameChar.size);
			vertex(-3.8 * gameChar.size, -5.3 * gameChar.size);
			vertex(-3.9 * gameChar.size, -5.5 * gameChar.size);
			vertex(-2.3 * gameChar.size, -5.5 * gameChar.size);
			vertex(-1.3 * gameChar.size, -5.65 * gameChar.size);
			endShape();

			// Face
			fill(251, 219, 208);
			beginShape();
			vertex(-1.49 * gameChar.size, -6.8 * gameChar.size);
			quadraticVertex(gameChar.size, -7.2 * gameChar.size, -1.45 * gameChar.size, -7.4 * gameChar.size);
			endShape();

			// Eyes
			stroke(0);
			strokeWeight(0.25 * gameChar.size);
			point(-1.15 * gameChar.size, -7.1 * gameChar.size);

			// Eyebrows
			strokeWeight(0.15 * gameChar.size);
			line(-1.1 * gameChar.size, -7.25 * gameChar.size, -1.3 * gameChar.size, -7.1 * gameChar.size);

			// Front side of the face
			noStroke();
			fill(251, 219, 208);
			arc(0, -7 * gameChar.size, 3 * gameChar.size, 3 * gameChar.size, PI - 0.15 * QUARTER_PI, PI + 0.35 * QUARTER_PI, OPEN);

			// Headband
			fill(0);
			beginShape();
			vertex(1.5 * gameChar.size, -7 * gameChar.size);
			vertex(2.5 * gameChar.size, -7.3 * gameChar.size);
			vertex(2.55 * gameChar.size, -7.1 * gameChar.size);
			vertex(1.5 * gameChar.size, -7 * gameChar.size);
			vertex(2.2 * gameChar.size, -6.9 * gameChar.size);
			vertex(2.1 * gameChar.size, -6.7 * gameChar.size);
			vertex(1.5 * gameChar.size, -7 * gameChar.size);
			endShape();
		}

		// Jumping right
		else if (gameChar.isRight && !gameChar.isLeft) {
			// Head
			fill(0);
			ellipse(0, -7 * gameChar.size, 3 * gameChar.size);

			// Body
			beginShape();
			vertex(1.2 * gameChar.size, -5.7 * gameChar.size);
			vertex(0.6 * gameChar.size, -5.4 * gameChar.size);
			vertex(-0.8 * gameChar.size, -5.3 * gameChar.size);
			vertex(1.2 * gameChar.size, -3 * gameChar.size);
			vertex(1.8 * gameChar.size, -4.1 * gameChar.size);
			vertex(1.2 * gameChar.size, -5.7 * gameChar.size);
			endShape();

			// Left leg
			beginShape();
			vertex(1.85 * gameChar.size, -4.05 * gameChar.size);
			vertex(4.7 * gameChar.size, -3.7 * gameChar.size);
			vertex(4.65 * gameChar.size, -3.4 * gameChar.size);
			vertex(1.6 * gameChar.size, -3.58 * gameChar.size);
			vertex(1.85 * gameChar.size, -4.05 * gameChar.size);
			endShape();

			// Right leg
			beginShape();
			vertex(1.58 * gameChar.size, -3.55 * gameChar.size);
			vertex(1.28 * gameChar.size, -3 * gameChar.size);
			vertex(1.5 * gameChar.size, -2.7 * gameChar.size);
			vertex(3.35 * gameChar.size, -3.05 * gameChar.size);
			vertex(3.3 * gameChar.size, -3.3 * gameChar.size);
			vertex(2 * gameChar.size, -3.25 * gameChar.size);
			vertex(1.58 * gameChar.size, -3.55 * gameChar.size);
			endShape();


			// Left arm
			beginShape();
			vertex(-0.8 * gameChar.size, -5.2 * gameChar.size);
			vertex(-1.2 * gameChar.size, -5.55 * gameChar.size);
			vertex(-0.2 * gameChar.size, -6.2 * gameChar.size);
			vertex(-0.25 * gameChar.size, -6.4 * gameChar.size);
			vertex(-1.9 * gameChar.size, -5.6 * gameChar.size);
			vertex(-0.35 * gameChar.size, -4.68 * gameChar.size);
			vertex(-0.8 * gameChar.size, -5.2 * gameChar.size);
			endShape();

			// Right arm
			beginShape();
			vertex(1.3 * gameChar.size, -5.65 * gameChar.size);
			vertex(1.45 * gameChar.size, -5.25 * gameChar.size);
			vertex(2.3 * gameChar.size, -5.2 * gameChar.size);
			vertex(3.8 * gameChar.size, -5.3 * gameChar.size);
			vertex(3.9 * gameChar.size, -5.5 * gameChar.size);
			vertex(2.3 * gameChar.size, -5.5 * gameChar.size);
			vertex(1.3 * gameChar.size, -5.65 * gameChar.size);
			endShape();

			// Face
			fill(251, 219, 208);
			beginShape();
			vertex(1.49 * gameChar.size, -6.8 * gameChar.size);
			quadraticVertex(-gameChar.size, -7.2 * gameChar.size, 1.45 * gameChar.size, -7.4 * gameChar.size);
			endShape();

			// Eyes
			stroke(0);
			strokeWeight(0.25 * gameChar.size);
			point(1.15 * gameChar.size, -7.1 * gameChar.size);

			// Eyebrows
			strokeWeight(0.15 * gameChar.size);
			line(1.1 * gameChar.size, -7.25 * gameChar.size, 1.3 * gameChar.size, -7.1 * gameChar.size);

			// Front side of face
			noStroke();
			fill(251, 219, 208);
			arc(0, -7 * gameChar.size, 3 * gameChar.size, 3 * gameChar.size, - 0.35 * QUARTER_PI, 0.15 * QUARTER_PI, OPEN);

			// Headband
			fill(0);
			beginShape();
			vertex(-1.5 * gameChar.size, -7 * gameChar.size);
			vertex(-2.5 * gameChar.size, -7.3 * gameChar.size);
			vertex(-2.55 * gameChar.size, -7.1 * gameChar.size);
			vertex(-1.5 * gameChar.size, -7 * gameChar.size);
			vertex(-2.2 * gameChar.size, -6.9 * gameChar.size);
			vertex(-2.1 * gameChar.size, -6.7 * gameChar.size);
			vertex(-1.5 * gameChar.size, -7 * gameChar.size);
			endShape();
		}

		// Falling straight down
		else {
			// Swords
			stroke(0);

			// Left sword
			strokeWeight(0.2 * gameChar.size);
			line(-3 * gameChar.size, -6 * gameChar.size, -1.8 * gameChar.size, -5.4 * gameChar.size)
			line(3 * gameChar.size, -6 * gameChar.size, 1.8 * gameChar.size, -5.4 * gameChar.size)
			strokeWeight(0.12 * gameChar.size);
			line(-1.86 * gameChar.size, -5.18 * gameChar.size, -1.66 * gameChar.size, -5.58 * gameChar.size);
			line(1.86 * gameChar.size, -5.18 * gameChar.size, 1.66 * gameChar.size, -5.58 * gameChar.size);

			// Right sword
			strokeWeight(0.01 * gameChar.size);
			fill(230);
			triangle(-1.7 * gameChar.size, -5.35 * gameChar.size, -1.65 * gameChar.size, -5.45 * gameChar.size, 0.2 * gameChar.size, -4.4 * gameChar.size);
			triangle(1.7 * gameChar.size, -5.35 * gameChar.size, 1.65 * gameChar.size, -5.45 * gameChar.size, -0.2 * gameChar.size, -4.4 * gameChar.size);
			fill(200);
			triangle(-1.75 * gameChar.size, -5.25 * gameChar.size, -1.7 * gameChar.size, -5.35 * gameChar.size, 0.2 * gameChar.size, -4.4 * gameChar.size);
			triangle(1.75 * gameChar.size, -5.25 * gameChar.size, 1.7 * gameChar.size, -5.35 * gameChar.size, -0.2 * gameChar.size, -4.4 * gameChar.size);

			// Hands
			push();
			translate(0, -7.2 * gameChar.size);
			fill(251, 219, 208);

			// Left hand
			rotate(-QUARTER_PI);
			ellipse(-2.15 * gameChar.size, -1.55 * gameChar.size, 0.4 * gameChar.size, 0.2 * gameChar.size);

			// Right hand
			rotate(1.1 * HALF_PI);
			ellipse(2.7 * gameChar.size, -1.65 * gameChar.size, 0.4 * gameChar.size, 0.2 * gameChar.size);

			pop();

			// Head
			fill(0);
			ellipse(0, -7 * gameChar.size, 3 * gameChar.size);

			// Body
			beginShape();
			vertex(-gameChar.size, -5.5 * gameChar.size);
			vertex(0, -5 * gameChar.size);
			vertex(gameChar.size, -5.5 * gameChar.size);
			vertex(0.5 * gameChar.size, -2.45 * gameChar.size);
			vertex(-0.5 * gameChar.size, -2.45 * gameChar.size);
			vertex(-gameChar.size, -5.5 * gameChar.size);
			endShape();

			// Left leg
			beginShape();
			vertex(-0.5 * gameChar.size, -3 * gameChar.size);
			vertex(-1.5 * gameChar.size, -3.6 * gameChar.size);
			vertex(-1.8 * gameChar.size, -3.3 * gameChar.size);
			vertex(-0.95 * gameChar.size, -1.3 * gameChar.size);
			vertex(-0.75 * gameChar.size, -1.55 * gameChar.size);
			vertex(-1.2 * gameChar.size, -2.85 * gameChar.size);
			vertex(-0.45 * gameChar.size, -2.45 * gameChar.size);
			vertex(-0.5 * gameChar.size, -3 * gameChar.size);
			endShape();

			// Right leg
			beginShape();
			vertex(0.55 * gameChar.size, -2.6 * gameChar.size);
			vertex(0.9 * gameChar.size, -1.9 * gameChar.size);
			vertex(0.1 * gameChar.size, -0.15 * gameChar.size);
			vertex(-0.05 * gameChar.size, -0.4 * gameChar.size);
			vertex(0.3 * gameChar.size, -1.75 * gameChar.size);
			vertex(-0.05 * gameChar.size, -2.45 * gameChar.size);
			vertex(0.55 * gameChar.size, -2.6 * gameChar.size);
			endShape();

			// Left arm
			beginShape();
			vertex(-1.05 * gameChar.size, -5.4 * gameChar.size);
			vertex(-0.93 * gameChar.size, -4.68 * gameChar.size);
			vertex(-2.5 * gameChar.size, -6.7 * gameChar.size);
			vertex(-2.5 * gameChar.size, -7 * gameChar.size);
			vertex(-1.05 * gameChar.size, -5.4 * gameChar.size);
			endShape();

			// Right arm
			beginShape();
			vertex(1.05 * gameChar.size, -5.4 * gameChar.size);
			vertex(0.93 * gameChar.size, -4.68 * gameChar.size);
			vertex(2.8 * gameChar.size, -6 * gameChar.size);
			vertex(2.8 * gameChar.size, -6.25 * gameChar.size);
			vertex(1.05 * gameChar.size, -5.4 * gameChar.size);
			endShape();

			// Face
			push();
			translate(0, -7.2 * gameChar.size);
			rotate(-0.2 * QUARTER_PI);
			fill(251, 219, 208);
			ellipse(0, 0.4 * gameChar.size, 2 * gameChar.size, 0.6 * gameChar.size);
			pop();

			// Eyes
			stroke(0);
			strokeWeight(0.25 * gameChar.size);
			point(-0.4 * gameChar.size, -6.65 * gameChar.size);
			point(0.4 * gameChar.size, -6.75 * gameChar.size);

		}
	}

	pop();
}