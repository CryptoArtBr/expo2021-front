import { aBrick } from './game_objects'
import { Explosion } from './explosion'
import gameConfig from './gameConfig'

export function level(){
	
	var grid = {x:6, y: 5};
	var gameSize;
	var bricksToRemove = [];

	this.explosions = [];
	this.elements = [];

	//PUBLIC FUNCTIONS

	this.init = function(_gameSize, intLvl){
		gameSize = _gameSize;
		
		for (var ind in intLvl)
		{
			var block = intLvl[ind];
			var brick = new aBrick();
			brick.init(block.x,block.y);
			brick.setSize(block.width, block.height);
			brick.setColor(block.color);
			this.elements.push(brick);
		}

		this.explosions = [];
	}

	this.removeBrick = function(index){
		this.addExplosion(this.elements[index]);
		bricksToRemove.push(index);
	}

	this.update = function(){

		for(var i = bricksToRemove.length; i > 0; i--)
		{
			this.elements.splice(bricksToRemove[i - 1], 1);
			bricksToRemove.pop();
		}
	}

	this.addExplosion = function(elem)
	{
		var expl = new Explosion();
		expl.init(elem.x, elem.y, elem.width, elem.height);
		expl.setColor(elem.color, 1);
		if(this.explosions == undefined)
		{
			this.explosions = [expl];
		}else{
			this.explosions.push(expl);
		}
	}
}

export function collisionManager(){

	this.hasCollided = function(ball, brick){
		var result = false;

		if( ball.y + ball.radius > brick.y &&
			ball.y - ball.radius < brick.y + brick.height &&
			ball.x + ball.radius > brick.x &&
			ball.x - ball.radius < brick.x + brick.width ){

			result = true;
		}

		return result;
	}

	this.hitDist = function(ball, brick){
		var xDist = ball.x - (brick.x + brick.width/2);
		var yDist = ball.y - (brick.y + brick.height/2);
		return { x:xDist , y:yDist };
	}
}

export function gameView(targetElement){
	var _width = 800;
	var _height = 600;

	var _bgColor = gameConfig.bgColor;
	
	var canvas = targetElement;
	this.ctx = canvas.getContext("2d");
  	this.ctx.canvas.width  = _width;
 	this.ctx.canvas.height = _height;

 	this.clear = function(){
 		this.ctx.fillStyle = _bgColor;
		this.ctx.fillRect(0, 0, _width, _height);
	}

	this.draw = function(object){
		switch (object.shape)
		{
			case "rectangle":
				this.ctx.fillStyle = object.color;
				this.ctx.fillRect(object.x, object.y, object.width, object.height);
				break;
			case "circle":
				this.ctx.fillStyle = object.color;
				this.ctx.beginPath();
				this.ctx.arc(object.x, object.y, object.radius, 0, 2 * Math.PI, false);
				this.ctx.closePath();
				this.ctx.fill();
				break;
			case "image":
				this.ctx.drawImage(object.img, object.x, object.y);
			default:
				break;
		}
		
	}

	this.bgColor = function(value){
		_bgColor = value;
	}

	this.size = function(width, height){
		_width = width;
		_height = height;

		this.ctx.canvas.width  = _width;
 		this.ctx.canvas.height = _height;
	}
}