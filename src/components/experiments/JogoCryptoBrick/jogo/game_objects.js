import gameConfig from './gameConfig'

export function ball(){
	var gameSize;

	var accel = 5;
	var speed = {x:accel, y:accel};
	var gameSize;
	var hue = 0;

	this.x = 0;
	this.y = 0;
	this.radius = 8;
	this.color = gameConfig.ballColor;
	this.shape = "circle";

	//PUBLIC FUNCTIONS

	this.init = function(_gameSize){
		gameSize = _gameSize;
		this.x = gameSize.width/2;
		this.y = gameSize.height/2;
	}

	this.update = function(){

		this.x += speed.x;
		this.y += speed.y;

		if( this.x - this.radius < 0 || this.x + this.radius > gameSize.width ) {
			speed.x *= -1;
		}

		if(this.y - this.radius < 0) {
		
			speed.y *= -1;
		}else if(this.y + this.radius > gameSize.height){
			
			this.x = gameSize.width/2;
			this.y = gameSize.height/2;
		}
	}

	this.hitBrick = function(Dist){
		var hyp = Math.sqrt( (Dist.x * Dist.x) + (Dist.y * Dist.y) );

		var dirX = 1;
		var dirY = 1;
		if(Dist.x < 0){ dirX = -1 };
		if(Dist.y < 0){ dirY = -1 };

		speed.y = dirY * Math.abs( (Dist.x/hyp) * accel );
		speed.x = dirX * Math.abs( (Dist.y/hyp) * accel );
	}

	this.destroy = function(){
		
	}
}

export function aBrick(){

	this.x = 0;
	this.y = 0;
	this.width = 100;
	this.height = 20;
	this.color = "#AAAAAA";
	this.shape = "rectangle";

	this.setColor = function(_c){
		this.color = _c;
	}

	this.setSize = function(_w, _h){
		this.width = _w;
		this.height = _h;
	}

	this.init = function(_x, _y){
		this.x = _x;
		this.y = _y;
	}

	this.update = function(){
		
	}

	this.hitBall = function(){

	}

	this.destroy = function(){
		
	}
}

export function pBar(){
	
	var isLeft = false;
	var isRight = false;
	var dir = 0;

	var speed = 0;
	var maxSpeed = 4;
	var accel = 2;
	var atr = 1;
	var borderLimit = 200;

	this.x =  0;
	this.y = 0;
	this.width = 100;
	this.height = 20;
	this.color = gameConfig.playerBarColor;
	this.shape = "rectangle";
	
	function setIsLeft(value){
		isLeft = value;
	}

	function setISRight(value){
		isRight = value;
	}

	//GET USER INPUT

	var getKeyDownInput = function(event) {
	    if(event.keyCode == 37 || event.keyCode == 65) {
	        setIsLeft(true);
	    } else if(event.keyCode == 39 || event.keyCode == 68) {
	        setISRight(true);
	    }
	}

	var getKeyUpInput = function(event) {
		if(event.keyCode == 37 || event.keyCode == 65) {
	        setIsLeft(false);
	    } else if(event.keyCode == 39 || event.keyCode == 68) {
        	setISRight(false);
	    }
	}

	var addListeners = function(){
		document.addEventListener('keydown', getKeyDownInput);
		document.addEventListener('keyup', getKeyUpInput);	
	}

	var removeListeners = function(){
		document.removeEventListener('keydown', getKeyDownInput);
		document.removeEventListener('keyup', getKeyUpInput);
	}

	var getDir = function(){
		var result = 0;
		
		if(isRight) ++result;
		if(isLeft) --result;

		return result;
	}

	//PUBLIC FUNCTIONS

	this.init = function(_borderLimit){
		borderLimit = _borderLimit;
		this.x = borderLimit/2 - this.width/2;
		addListeners();
	}

	this.update = function(){
		speed += accel * getDir();

		if(speed > 0)
		{
			speed -= atr;
		}else if(speed < 0){
			speed += atr;
		}

		this.x += speed;
		
		if(this.x < 0) 
		{
			this.x = 0;
			speed = 0;
		}else if(this.x + this.width > borderLimit){
			this.x = borderLimit - this.width; 
			speed = 0;
		}
	}

	this.hitBall = function(){

	}

	this.destroy = function(){
		removeListeners();
	}
}

export function statusBar(width, height){

	this.x =  0;
	this.y = height * 9;
	this.width = width;
	this.height = height;
	this.color = gameConfig.statusBarColor;
	this.shape = "rectangle";

}

export function imageElement(image){
	this.img = document.createElement("img");
	this.img.src = image.image;

	this.x = image.posX;
	this.y = 545;
	this.shape = "image";
}