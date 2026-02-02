// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
	push();
	translate(t_canyon.pos[0] - 5 * t_canyon.size, t_canyon.pos[1]);

	let h = height - t_canyon.pos[1];

	noStroke();
	fill(lerpColor(color(23, 102, 98), color(224, 204, 158), 0.75));
	rect(0, 0, 10 * t_canyon.size, h);

/* 	for (let i = 0; i < h; i += 0.1) {

		push();

		stroke(lerpColor(color(124, 204, 158), color(155,0,0), i / h));
		line(0, i, 10 * t_canyon.size, i);

		pop();

	} */

	pop();
}


// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
	if (gameChar.pos[0] - gameChar.size > t_canyon.pos[0] - 5 * t_canyon.size && gameChar.pos[0] + gameChar.size < t_canyon.pos[0] + 5 * t_canyon.size && gameChar.pos[1] >= t_canyon.pos[1] && !gameChar.isOverPlatform) {
		gameChar.isPlummeting = true;
	}
}