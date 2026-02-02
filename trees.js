// Function to draw trees objects.

function drawTree(t_tree) {
	push();

	translate(t_tree.pos[0], t_tree.pos[1]);
	noStroke();

	// Tree trunk
	fill(95, 75, 0);
	beginShape();
		vertex(-0.4 * t_tree.size, 0);
		vertex(-0.2 * t_tree.size, -4 * t_tree.size);
		vertex(-2.2 * t_tree.size, -6.5 * t_tree.size);
		vertex(-2 * t_tree.size, -6.5 * t_tree.size);
		vertex(-0.17 * t_tree.size, -4.6 * t_tree.size);
		vertex(-0.1 * t_tree.size, -6 * t_tree.size);
		vertex(0.1 * t_tree.size, -6 * t_tree.size);
		vertex(0.21 * t_tree.size, -3.8 * t_tree.size);
		vertex(2 * t_tree.size, -5.5 * t_tree.size);
		vertex(2.2 * t_tree.size, -5.5 * t_tree.size);
		vertex(0.23 * t_tree.size, -3.4 * t_tree.size);
		vertex(0.4 * t_tree.size, 0);
		vertex(-0.4 * t_tree.size, 0);
	endShape();

	// Tree leaves
	fill(0, 120, 0, 224);
	ellipse(-2.1 * t_tree.size, -7 * t_tree.size, 2.5 * t_tree.size, 1.5 * t_tree.size);

	fill(0, 150, 0, 240);
	ellipse(0, -7 * t_tree.size, 3.2 * t_tree.size);

	fill(0, 180, 0, 240);
	ellipse(2.1 * t_tree.size, -6 * t_tree.size, 2 * t_tree.size, 1.5 * t_tree.size);

	pop();
}