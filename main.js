
Canvas =new fabric.Canvas("myCanvas");

bee_x = 10;
bee_y = 10;
desepticon_x =900;
desepticon_y =350;
block_image_width = 5;
block_image_height = 5;
var bee_objet="";
var desepticon_object ="";


function load_img(){
	fabric.Image.fromURL("megetron.png",function(Img){
        desepticon_object=Img;
        desepticon_object.scaleToWidth(130);
        desepticon_object.scaleToHeight(120);
        desepticon_object.set({
        top:desepticon_y,
        left:desepticon_x});
        Canvas.add(desepticon_object);
	new_image();
});
}
function new_image(){
	fabric.Image.fromURL("bumbelbee 2.png",function (Img){
        bee_objet=Img;
        bee_objet.scaleToWidth(155);
        bee_objet.scaleToHeight(139);
        bee_objet.set({
        top:bee_y,
        left:bee_x});
        Canvas.add(bee_objet);
		});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((bee_x==desepticon_x )&&( bee_y==desepticon_y)) {
		Canvas.remove(desepticon_object);
		document.getElementById("hd3").innerHTML="You have freed CYBERTRON from Megetron's evil rule ";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else
	
	     if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
	if(bee_y>=5){
		bee_y=bee_y-block_image_height;
		console.log("block image height =" +  block_image_height);
		console.log("when down arrow key is pressed, X =" + bee_x + "Y ="+bee_y);
		Canvas.remove(bee_objet);
		new_image();
	}
	}

	function down()
	{
		if(bee_y<=500){
			bee_y=bee_y+block_image_height;
			console.log("block image height =" +  block_image_height);
			console.log("when down arrow key is pressed, X =" + bee_x + "Y ="+bee_y);
			Canvas.remove(bee_objet);
			new_image();
		}
	}

	function left()
	{
		if(bee_x >=5)
		{
			
		bee_x=bee_x-block_image_width;
		console.log("block image width =" +  block_image_width);
		console.log("when down arrow key is pressed, X =" + bee_x + "Y ="+bee_y);
		Canvas.remove(bee_objet);
		new_image();
		
		}
	}

	function right()
	{
		if(bee_x <=1050)
		{
	    bee_x=bee_x+block_image_width;
		console.log("block image width =" +  block_image_width);
		console.log("when down arrow key is pressed, X =" + bee_x + "Y ="+bee_y);
		Canvas.remove(bee_objet);
		new_image();
		}
	}
	
}