
function createPlatform(x1,y1,x2,y2) {
    var p = {pos: [x1, y1], 
        platformWidth: x2 - x1,
        platformHeight: y2 - y1,
		boundariesX: [x1, x2], 
		isOverThisPlatform: false}
    return p;
}


function drawPlatform(platformObject) {

	push();
	translate(platformObject.pos[0],platformObject.pos[1])
	noStroke();

	// Ground
	fill(114, 60, 46);
	rect(0, 0, 
		platformObject.platformWidth, platformObject.platformHeight, 
		0, 0, 
		0.1 * platformObject.platformHeight, 0.1 * platformObject.platformHeight);
	
	// Grass
	fill(3, 135, 3);
	rect(0, 0, 
		platformObject.platformWidth, 0.05 * platformObject.platformHeight);

	pop();

}

function checkPlatform(t_platform) {

	if(gameChar.pos[0] >= t_platform.boundariesX[0] && gameChar.pos[0] <= t_platform.boundariesX[1] && gameChar.pos[1] <= t_platform.pos[1]) {
		platform_y_pos = t_platform.pos[1];
		t_platform.isOverThisPlatform = true;
		isOverPlatform = true;
	} 
	
	if ((gameChar.pos[0] < t_platform.boundariesX[0] || gameChar.pos[0] > t_platform.boundariesX[1]) && t_platform.isOverThisPlatform){
		platform_y_pos = 3/4 * height;
		t_platform.isOverThisPlatform = false;
		isOverPlatform = false;
	}
}