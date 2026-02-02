var floorPos_y;
var platform_y_pos;
var gameChar;
var cameraPosX;
var gameScore;
var lives;
var flagpole;
var jumpSound;
var bgMusic;
var echoSound;
var dyingSound;
var collectableSound;
var flagpoleSound;
var wastedSound;
var cr7Sound;
var missionPassedSound;
var time;
var skyImage;

function preload() {
	font = loadFont('assets/pricedown.ttf');
	soundFormats('mp3');
	jumpSound = loadSound('assets/sounds/jump.mp3');
	jumpSound.setVolume(0.3);
	bgMusic = loadSound('assets/sounds/epic-background-music.mp3');
	bgMusic.setVolume(0.8);
	dyingSound = loadSound('assets/sounds/wilhelm-scream.mp3');
	collectableSound = loadSound('assets/sounds/coin-sound.mp3');
	flagpoleSound = loadSound('assets/sounds/reaching-flagpole.mp3');
	wastedSound = loadSound('assets/sounds/wasted.mp3');
	cr7Sound = loadSound('assets/sounds/cr-buenas-noches.mp3');
	missionPassedSound = loadSound('assets/sounds/mission-passed.mp3');
}

function setup() {
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    lives = 3;

	// Create the sky image once in memory
    skyImage = createGraphics(width, height);
    // Draw the gradient onto the buffer, not the canvas
    drawGradient(skyImage, 0, 0, width, height, color(23, 102, 98), color(224, 204, 158));

    startGame();
}


function draw() {
    cameraPosX = gameChar.pos[0] - 1/2 * width;
    
    image(skyImage, 0, 0);
	noStroke();

	// Ground
	fill(114, 60, 46);
	rect(0, 3/4 * height, width, 1/4 * height);
	
	// Grass
	fill(3, 135, 3);
	rect(0, 3/4 * height, width, 1/40 * height);

	push();
	translate(-cameraPosX, 0);

	// Define a margin so objects don't "pop" into existence
    let renderMargin = 200; 

    // MOUNTAINS
    for (let i = 0; i < mountains.length; i++) {
        // Only draw if within screen view
        if (mountains[i].pos[0] > cameraPosX - renderMargin && 
            mountains[i].pos[0] < cameraPosX + width + renderMargin) {
            drawMountain(mountains[i]);
        }
    }

    // CLOUDS
  	for (let i = 0; i < clouds.length; i++) {
        // Update clouds so they don't freeze off-screen
        updatecloud(clouds[i]); 

        // Only DRAW them if they are on screen
        if (clouds[i].pos[0] > cameraPosX - 200 && clouds[i].pos[0] < cameraPosX + width + 200) {
            drawCloud(clouds[i]);
        }
    }

    // TREES
    for (let i = 0; i < trees.length; i++) {
        if (trees[i].pos[0] > cameraPosX - renderMargin && 
            trees[i].pos[0] < cameraPosX + width + renderMargin) {
            drawTree(trees[i]);
        }
    }

    // COLLECTABLES
    for (let i = 0; i < collectables.length; i++) {
        if (!collectables[i].isFound) {
            // Only check collision if close to player
            if (dist(gameChar.pos[0], gameChar.pos[1], collectables[i].pos[0], collectables[i].pos[1]) < 200) {
                 checkCollectable(collectables[i]);
            }
            // Draw only if visible
            if (collectables[i].pos[0] > cameraPosX - renderMargin && 
                collectables[i].pos[0] < cameraPosX + width + renderMargin) {
                drawCollectable(collectables[i]);
            }
        }
    }
    
    // CANYONS
    for (let i = 0; i < canyons.length; i++) {
        // Only check canyon physics if close
        if (dist(gameChar.pos[0], 0, canyons[i].pos[0], 0) < 150) {
             checkCanyon(canyons[i]);
        }
        // Draw only if visible
        if (canyons[i].pos[0] > cameraPosX - renderMargin && 
            canyons[i].pos[0] < cameraPosX + width + renderMargin) {
            drawCanyon(canyons[i]);
        }
    }
    
    // ENEMIES 
    for (let i = 0; i < enemies.length; i++) {
        // Only process enemies if they are near the camera
        // We use a slightly larger margin (300) so they don't "pop" in unexpectedly
        if (enemies[i].pos[0] > cameraPosX - 300 && enemies[i].pos[0] < cameraPosX + width + 300) {
            
            drawEnemy(enemies[i]);
            updateEnemy(enemies[i]);

            // Only checking collision if the enemy is actually visible
            checkEnemy(enemies[i]);
        }
    }

	// Flagpole
	if(!flagpole.isReached) {
		checkFlagpole(flagpole);
	}

	renderFlagpole(flagpole);

	drawGameChar();
	checkPlayerDie();

	pop();

	// Game score counter
	push();
	fill(255);
	stroke(0);
	strokeWeight(8);
	textStyle(BOLD);
	textSize(40);
	text("🪙 X " + gameScore, 0.03*width, 0.1*height);
	
	pop();

	if(lives < 1) {
		// Timing the "wasted" animation
		if (millis() - time > 2000) {
			drawGameOver();
		}

	} else {
		stroke(0);
		strokeWeight(8);
		textStyle(BOLD);
		textSize(40);
		text("❤️".repeat(lives), 0.8*width, 0.1*height);
	}

	if(flagpole.isReached) {
		bgMusic.stop();
		for(let i = 0; i < enemies.length; i++) {
			enemies[i].isDead = true;
		}
		if(millis() - time > 2000) {
			missionPassedSound.play(0,1,1,1);
			drawLevelComplete();
		}
	}

	// Logic to make the game character move or the background scroll.
	if(gameChar.isLeft)
	{
		gameChar.pos[0] -= 10;
	}

	if(gameChar.isRight)
	{
		gameChar.pos[0]  += 10;
	}

	// Logic to make the game character rise and fall.

	// If character is jumping but he is moving down, he is no longer jumping
	if (gameChar.isJumping && gameChar.vel[1] >= 0) {
		gameChar.isJumping = false;
	}

	if (!gameChar.isOverPlatform) {
		// If character surpasses floor level and he is moving down, he is no longer falling
		if (gameChar.pos[1] >= floorPos_y && gameChar.vel[1] > 0 && !gameChar.isPlummeting) {
			gameChar.isFalling = false;
			gameChar.pos[1] = floorPos_y;
			gameChar.vel[1] = 0;
		}
		else if (gameChar.pos[1] < floorPos_y) {
			gameChar.isFalling = true;
		}
	}

	else {
		if (gameChar.pos[1] >= platform_y_pos && gameChar.vel[1] > 0 && !gameChar.isPlummeting) {
			gameChar.isFalling = false;
			gameChar.pos[1] = platform_y_pos;
			gameChar.vel[1] = 0;
		}
		else if (gameChar.pos[1] < platform_y_pos) {
			gameChar.isFalling = true;
		}
	}

	// Add gravity and update gameChar.pos[1] if character is in the air
	if (gameChar.isFalling) {
		gameChar.vel[1] += 1.7;
		gameChar.pos[1] += gameChar.vel[1];
	} 
	
	if (gameChar.isPlummeting) {
		gameChar.isLeft = false;
		gameChar.isRight = false;
		gameChar.vel[1] += 4;
		gameChar.pos[1] += gameChar.vel[1];
	}

}

// ---------------------
// Key control functions
// ---------------------

function keyPressed() {
	if (lives > 0) {
		if ((keyCode == 65 || keyCode == 37) && !gameChar.isPlummeting) {
			gameChar.isLeft = true;
		}

		if ((keyCode == 68 || keyCode == 39) && !gameChar.isPlummeting) {
			gameChar.isRight = true;
		}

		// Only makes character jump if he is not in the air or plummeting
		if ((keyCode == 87 || keyCode == 32 || keyCode == 38) && !gameChar.isFalling && !gameChar.isPlummeting) {
			gameChar.vel[1] = -25;
			gameChar.isJumping = true;
			gameChar.isFalling = true;
			jumpSound.play();
		}
	}
}

function keyReleased()
{

	if (keyCode == 65 || keyCode == 37) {
		gameChar.isLeft = false;
	}

	if (keyCode == 68 || keyCode == 39) {
		gameChar.isRight = false;
	}

	// Stops jumping if character hadn't finished jumping
	if ((keyCode == 87 || keyCode == 32) && gameChar.isFalling && gameChar.isJumping) {
		gameChar.vel[1] = 0;
		gameChar.isJumping = false;
	}

}


// Gradient Function
function drawGradient(buffer, x, y, gradientWidth, gradientHeight, colorA, colorB) {
    buffer.push();
    buffer.translate(x, y);
    // CHANGE: increased step from 0.1 to 1. 
    // 0.1 drew 10 lines per pixel (invisible overkill). 1 is sufficient.
    for (let i = 0; i < gradientHeight; i++) {
        buffer.stroke(lerpColor(colorA, colorB, i / gradientHeight));
        buffer.line(0, i, gradientWidth, i);
    }
    buffer.pop();
}


// Function to draw flagpole.

function renderFlagpole(flagpole) {

	push();

	translate(flagpole.pos[0], flagpole.pos[1]);
	noStroke();

	// Base
	fill(0, 85, 0);
	beginShape();
		vertex(-0.8 * flagpole.size, 0);
		vertex(-0.08 * flagpole.size, -0.2 * flagpole.size);
		vertex(0.08 * flagpole.size, -0.2 * flagpole.size);
		vertex(0.8 * flagpole.size, 0);
		vertex(-0.8 * flagpole.size, 0);
	endShape();

	// Mast
	fill(100);
	rect(-0.08 * flagpole.size, -8 * flagpole.size, 0.16 * flagpole.size, 7.8 * flagpole.size);

	// Flag
	if (!flagpole.isReached) {
		fill(255, 0, 0);
		triangle(-0.08 * flagpole.size, -8 * flagpole.size,
			-0.08 * flagpole.size, -7.4 * flagpole.size,
			-1.5 * flagpole.size, -7.7 * flagpole.size);
	} else {
		fill(255, 0, 0);
		triangle(-0.08 * flagpole.size, -0.9 * flagpole.size,
			-0.08 * flagpole.size, -0.2 * flagpole.size,
			-1.5 * flagpole.size, -0.5 * flagpole.size);
	}

	pop();
}

function checkFlagpole(flagpole) {
	if (abs(gameChar.pos[0] - flagpole.pos[0]) < gameChar.size + flagpole.size) {
		flagpoleSound.play();
		time = millis();
		flagpole.isReached = true;
	}
}


function drawGameOver() {
	noLoop();
	push();
	fill(0,0,0,100);
	rect(0,0,width,height);
	
	fill(204, 36, 82);
	textFont(font, 150);
	textAlign(CENTER, CENTER);
	stroke(0);
	strokeWeight(10);
	text('Wasted', 1/2 * width, 1/2 * height);

	pop();
}

function drawLevelComplete() {
	noLoop();
	push();
	fill(0,0,0,100);
	rect(0,0,width,height);
	fill(254, 172, 0);
	textFont(font, 100);
	textAlign(CENTER);
	stroke(0);
	strokeWeight(10);
	text('Mission passed!', 1/2 * width, 1/2 * height);
	fill(255);
	text('Respect + ' + gameScore, 1/2 * width, 3/4 * height);
	pop();
}