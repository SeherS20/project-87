
var canvas = new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width)
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top: block_y,
		left: block_x
	});
	canvas.add(block_image_object);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		block_x = 0;
		new_image('rocket.webp')
		console.log("r")
	}
	if(keyPressed == '84')
	{
		block_x = 300;
		new_image('groot.webp')
		console.log("t")
	}
	
	if(keyPressed == '83')
	{
		block_x =450;
		new_image('star-lord.png')
		console.log("s")
	}
	if(keyPressed == '71')
	{
		block_x = 570;
		new_image('gamora.webp')
		console.log("g")
	}
	if(keyPressed == '68')
	{
		block_x = 750;
		new_image('drax.webp')
		console.log("d")
	}
	
}

