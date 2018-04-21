var canvas;

function draw()
{
	canvas = createCanvas(400,400);
	canvas.background(0,0,0,0);
	canvas.position(0,0);
	shield(1);

}

function shield(scales)
{
	noStroke();
	scale(scales);
	fill(255,255,0);
	beginShape();
	vertex(100,100);
	vertex(300,100);
	vertex(300,260);
	vertex(200,340);
	vertex(100,260);
	vertex(100,100);
	endShape(CLOSE);
}