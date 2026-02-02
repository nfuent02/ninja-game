// Function to draw mountains objects.

function drawMountain(t_mountain) {
	push();
	translate(t_mountain.pos[0], t_mountain.pos[1]);

	// Back mountain
	noStroke();
	fill(t_mountain.color);
	triangle(-5 * t_mountain.size, 0, 
		3 * t_mountain.size, 0, 
		0, -5 * t_mountain.size);

	// Front mountain
	fill(lerpColor(t_mountain.color, color(0, 0, 0), 0.5));
	beginShape();
		vertex(0, -5 * t_mountain.size);
		vertex(-0.2 * t_mountain.size, -4.4 * t_mountain.size);
		vertex(0.1 * t_mountain.size, -3.8 * t_mountain.size);
		vertex(-0.4 * t_mountain.size, -3.2 * t_mountain.size);
		vertex(-0.1 * t_mountain.size, -2.2 * t_mountain.size);
		vertex(-0.8 * t_mountain.size, -1.5 * t_mountain.size);
		vertex(-0.5 * t_mountain.size, -t_mountain.size);
		vertex(-t_mountain.size, -0.6 * t_mountain.size);
		vertex(-0.5 * t_mountain.size, 0);
		vertex(3 * t_mountain.size, 0);
		vertex(0, -5 * t_mountain.size);
	endShape();

	pop();
}