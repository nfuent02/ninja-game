
function Cloud(x,y,velX,size) {
	this.pos = [x,y];
	this.vel = [velX, 0];
	this.size = size;
}

function drawCloud(t_cloud) {
	push();

	translate(t_cloud.pos[0], t_cloud.pos[1]);
	noStroke();

	// Back clouds
	fill(150, 250);
	ellipse(-1.2 * t_cloud.size, 0.2 * t_cloud.size, 1.5 * t_cloud.size);
	ellipse(-0.6 * t_cloud.size, -0.5 * t_cloud.size, 1.2 * t_cloud.size);
	ellipse(0.3 * t_cloud.size, -0.6 * t_cloud.size, 1.4 * t_cloud.size);

	// Front clouds
	fill(170, 250);
	ellipse(t_cloud.size, -0.2 * t_cloud.size, 0.9 * t_cloud.size);
	ellipse(1.6 * t_cloud.size, 0.1 * t_cloud.size, 1.2 * t_cloud.size, 0.8 * t_cloud.size);
	ellipse(1.2 * t_cloud.size, 0.5 * t_cloud.size, 1.2 * t_cloud.size);
	ellipse(0.2 * t_cloud.size, 0.5 * t_cloud.size, 1.6 * t_cloud.size);
	ellipse(-0.5 * t_cloud.size, 0.7 * t_cloud.size, t_cloud.size);

	pop();
}

function updatecloud(t_cloud) {
	t_cloud.pos[0] += t_cloud.vel[0];
	if (t_cloud.pos[0] < -4000) {
		t_cloud.pos[0] = 7000;
	}
}