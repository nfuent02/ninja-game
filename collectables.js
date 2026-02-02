
// ----------------------------------
// Collectable items render and check functions
// ----------------------------------



// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
	push();
	translate(t_collectable.pos[0], t_collectable.pos[1]);
	stroke(115, 89, 13);
	strokeWeight(0.03 * t_collectable.size);

	// Outer circumference
	fill(253, 214, 8);
	ellipse(0, 0, 5 * t_collectable.size);

	// Inner circumference
	fill(238, 181, 30);
	ellipse(0, 0, 4 * t_collectable.size);

	// Middle line
	fill(253, 214, 8);
	rectMode(CENTER);
	rect(0, 0, 0.5 * t_collectable.size, 2 * t_collectable.size, 0.1 * t_collectable.size);
	pop();
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
	// We're basically trying to cover our character with circles to check collision more accurately
	let d1 = dist(gameChar.pos[0], gameChar.pos[1] - 1*gameChar.size, t_collectable.pos[0], t_collectable.pos[1]);
	let d2 = dist(gameChar.pos[0], gameChar.pos[1] - 3*gameChar.size, t_collectable.pos[0], t_collectable.pos[1]);
	let d3 = dist(gameChar.pos[0], gameChar.pos[1] - 5*gameChar.size, t_collectable.pos[0], t_collectable.pos[1]);
	let d4 = dist(gameChar.pos[0], gameChar.pos[1] - 7*gameChar.size, t_collectable.pos[0], t_collectable.pos[1]);
	let r = 5/2 * t_collectable.size + gameChar.size;

	if ((d1 < r || d2 < r || d3 < r || d4 < r) && !t_collectable.isFound) {
		gameScore += 1;
		collectableSound.play();
		t_collectable.isFound = true;
	}
}