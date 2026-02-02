
function startGame() {
	gameChar = {pos: [1/2 * width, floorPos_y], 
		vel: [0,0], 
		size: 15, 
		isLeft: false, 
		isRight: false, 
		isFalling: false, 
		isPlummeting: false, 
		isJumping: false, 
		isOverPlatform: false};

	cameraPosX = 0;
	gameScore = 0;

	// Initialise arrays of scenery objects.

	mountains = [{
		pos: [700, floorPos_y],
		size: 40,
		color: color(50, 55, 84, 220)
	}, {
		pos: [1580, floorPos_y],
		size: 20,
		color: color(50, 55, 84, 220)
	}, {
		pos: [1500, floorPos_y],
		size: 40,
		color: color(50, 55, 84, 220)
	}];

	clouds = [];

	trees = [{
		pos: [200, floorPos_y],
		size: random(20,50)
	}, {
		pos: [800, floorPos_y],
		size: random(20,50)
	},{
		pos: [1300, floorPos_y],
		size: random(20,50)
	},{
		pos: [1800, floorPos_y],
		size: random(20,50)
	},{
		pos: [2600, floorPos_y],
		size: random(20,50)
	},{
		pos: [2800, floorPos_y],
		size: random(20,50)
	}];

	collectables = [{
		pos: [-400, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [200, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [800, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [1500, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [1800, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	},{
		pos: [2500, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [2700, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [3570, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [3825, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [4075, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [4362, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [4737, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}, {
		pos: [5212, random(0.3, 0.7)*height],
		size: 8, 
		isFound: false
	}];

	canyons = [{
		pos: [-850, 3/4 * height], 
		size: 70
	},{
		pos: [-140, 3/4 * height], 
		size: 50
	}, {
		pos: [width/3, 3/4 * height], 
		size: 15
	}, {
		pos: [width, 3/4 * height], 
		size: 35
	}, {
		pos: [2.2*width, 3/4 * height], 
		size: 35
	}, {
		pos: [3300, 3/4 * height], 
		size: 45
	}, {
		pos: [3700, 3/4 * height], 
		size: 20
	},{
		pos: [3950, 3/4 * height], 
		size: 20
	},{
		pos: [4200, 3/4 * height], 
		size: 20
	},{
		pos: [4525, 3/4 * height], 
		size: 30
	},{
		pos: [4950, 3/4 * height], 
		size: 40
	}, {
		pos: [5475, 3/4 * height], 
		size: 45
	}, {
		pos: [7050, 3/4 * height], 
		size: 150
	}];

	flagpole = {pos: [9000, floorPos_y], size: 50, isReached: false};

	platforms = [];

	platforms.push(createPlatform(6500, 350, 6800, 400));
	platforms.push(createPlatform(6900, 250, 7200, 300));
	platforms.push(createPlatform(7400, 500, 7650, 550));

	enemies = [];

	enemies.push(new Enemy(1600, floorPos_y,random(-2,-6),250,random(10,40)));
	enemies.push(new Enemy(1600, floorPos_y, random(2,6),250,random(10,40)));
	enemies.push(new Enemy(2800, floorPos_y,random(-2,-6),200,random(10,40)));
	enemies.push(new Enemy(2800, floorPos_y, random(2,6),200,random(10,40)));
	enemies.push(new Enemy(6650, 350, random(2,6),50,random(10,40)));
	enemies.push(new Enemy(7525, 500, random(2,6),50,random(10,40)));
	enemies.push(new Enemy(8150, floorPos_y, -8,100,random(10,40)));
	enemies.push(new Enemy(8450, floorPos_y, -8,100,random(10,40))); 
	enemies.push(new Enemy(8750, floorPos_y, -8,100,random(10,40))); 
	enemies.push(new Enemy(9050, floorPos_y, -8,100,random(10,40))); 



	for(let i = 0; i < 15; i++) {
		clouds.push(new Cloud(500*i, 100, random(-0.1, -1.5), random(30,60)));
	}

	if(!bgMusic.isPlaying()) {
		bgMusic.play(0, 1, 1, 1.5);
	}


}
