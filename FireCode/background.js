var canvas;

function draw()
{
	w = windowWidth;
	h = windowHeight;
	canvas = createCanvas(w,h);
	canvas.position(0,0);
	canvas.style('z-index', '-1');

	r = 254;
	g = 228;
	b = 115;

	fill(mouseX/10,g,mouseY/10+5);
	fill(mouseY/10,g,mouseX/10);
	noStroke();
	triangle(0,0, 0,h, w,h);

	fill(mouseY/5,g,b);
	fill(mouseX/10,g,b);
	noStroke();
	triangle(0,0, w,0, w,h);




}

