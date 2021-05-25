import { pBar, ball, statusBar } from './game_objects'
import { level, collisionManager, gameView } from './brick_mechanics'
import {getIntro, getLevel} from './levels'

export default function CryptoBrick(targetElement)
{

	var gameSize = {width:800, height:600};

	var p = new pBar(),
		b = new ball(),
		sBar = new statusBar(gameSize.width, gameSize.height/10),
		gameLevel = new level(),
		colMng = new collisionManager(),
		view = new gameView(targetElement),
		hasCollision = false,
		animFrame = window.requestAnimationFrame ||
	            window.webkitRequestAnimationFrame ||
    	        window.mozRequestAnimationFrame    ||
        	    window.oRequestAnimationFrame      ||
            	window.msRequestAnimationFrame     ||
            	null,
		frameAnimatino;

	var update = function(){
		
		view.clear();

		hasCollision = false;

		if(colMng.hasCollided(b, p)){

			b.hitBrick(colMng.hitDist(b, p));
			p.hitBall();

			hasCollision = true;
		}

		for(var i=0; i < gameLevel.elements.length; i++)
		{	
			if(!hasCollision)
			{
				if(colMng.hasCollided(b, gameLevel.elements[i])){

					b.hitBrick(colMng.hitDist(b, gameLevel.elements[i]));
					gameLevel.elements[i].hitBall();
					gameLevel.removeBrick(i);

					hasCollision = true;
				}
			}

			view.draw(gameLevel.elements[i]);
		}

		for(var w = gameLevel.explosions.length; w > 0; w--)
		{
			
			if(gameLevel.explosions[w-1].update())
			{
				gameLevel.explosions[w - 1].destroy();
				gameLevel.explosions.splice(w - 1, 1);
			}else{
				for(var t = 0; t < gameLevel.explosions[w - 1].parts.length; t++)
				{
					view.draw(gameLevel.explosions[w - 1].parts[t]);
				}
			}
		}

		b.update();
		view.draw(b);

		p.update();
		view.draw(p);
		
		view.draw(sBar);
		
		gameLevel.update();

		if(gameLevel.elements.length == 0)
		{
			gameIsOver();
		}
	}

	var init = function (currentlevel){
		p.init(gameSize.width);
		p.y = 500;
		b.init(gameSize);
		gameLevel.init(gameSize, currentlevel);
		view.size(gameSize.width, gameSize.height);
		update();
		document.addEventListener('keydown', startGame);
	}

	var gameIsOver = function(){	
		gameLevel = null;
		gameLevel = new level();
		init(getLevel());
		frameAnimatino = function(){};
	}
	
	var startGame = function(event) {
	    if(event.keyCode == 87) {
	     	document.removeEventListener('keydown', startGame);

		    if ( animFrame !== null ) {
		        frameAnimatino = function() {
		            update();
		            animFrame( frameAnimatino );
		        };
			    animFrame( frameAnimatino );
		    } else {
		     	frameAnimatino = window.setInterval(update, 20);
		    }  
	    }
	}

	init(getIntro());
}