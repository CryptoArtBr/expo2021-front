import gameConfig from './gameConfig'

export function getTestLevel(){
	return [{x: 2.5 	, 	y: 0, 		width: 1000, height: 15, color: "hsla(322, 64%, 49%, 1)"}];

}

export function getIntro(){

	var blocks=[ { x: 170, y: 105, width: 10, height: 20, color: gameConfig.brickColor },
		{ x: 180, y: 125, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 190, y: 135, width: 20, height: 10, color: gameConfig.brickColor },
		{ x: 210, y: 125, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 290, y: 165, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 330, y: 165, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 570, y: 165, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 560, y: 175, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 240, y: 95, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 240, y: 155, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 480, y: 155, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 360, y: 155, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 410, y: 155, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 360, y: 95, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 490, y: 95, width: 20, height: 10, color: gameConfig.brickColor },
		{ x: 480, y: 135, width: 20, height: 10, color: gameConfig.brickColor },
		{ x: 410, y: 95, width: 50, height: 10, color: gameConfig.brickColor },
		{ x: 240, y: 115, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 240, y: 175, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 480, y: 175, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 360, y: 175, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 410, y: 175, width: 50, height: 10, color: gameConfig.brickColor },
		{ x: 360, y: 195, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 410, y: 195, width: 40, height: 10, color: gameConfig.brickColor },
		{ x: 360, y: 125, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 270, y: 105, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 270, y: 165, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 510, y: 165, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 390, y: 165, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 440, y: 165, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 450, y: 185, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 390, y: 105, width: 10, height: 20, color: gameConfig.brickColor },
		{ x: 510, y: 105, width: 10, height: 20, color: gameConfig.brickColor },
		{ x: 270, y: 135, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 270, y: 195, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 510, y: 195, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 260, y: 125, width: 10, height: 20, color: gameConfig.brickColor },
		{ x: 260, y: 185, width: 10, height: 20, color: gameConfig.brickColor },
		{ x: 500, y: 185, width: 10, height: 20, color: gameConfig.brickColor },
		{ x: 230, y: 105, width: 10, height: 40, color: gameConfig.brickColor },
		{ x: 230, y: 165, width: 10, height: 40, color: gameConfig.brickColor },
		{ x: 470, y: 165, width: 10, height: 40, color: gameConfig.brickColor },
		{ x: 350, y: 165, width: 10, height: 30, color: gameConfig.brickColor },
		{ x: 420, y: 165, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 420, y: 185, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 480, y: 105, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 190, y: 185, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 180, y: 155, width: 20, height: 10, color: gameConfig.brickColor },
		{ x: 200, y: 165, width: 10, height: 30, color: gameConfig.brickColor },
		{ x: 180, y: 165, width: 10, height: 30, color: gameConfig.brickColor },
		{ x: 200, y: 195, width: 20, height: 10, color: gameConfig.brickColor },
		{ x: 170, y: 185, width: 10, height: 20, color: gameConfig.brickColor },
		{ x: 500, y: 125, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 350, y: 95, width: 10, height: 50, color: gameConfig.brickColor },
		{ x: 470, y: 115, width: 10, height: 20, color: gameConfig.brickColor },
		{ x: 430, y: 105, width: 10, height: 40, color: gameConfig.brickColor },
		{ x: 310, y: 105, width: 10, height: 30, color: gameConfig.brickColor },
		{ x: 310, y: 165, width: 10, height: 30, color: gameConfig.brickColor },
		{ x: 610, y: 165, width: 10, height: 30, color: gameConfig.brickColor },
		{ x: 550, y: 185, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 300, y: 95, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 300, y: 155, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 600, y: 155, width: 20, height: 10, color: gameConfig.brickColor },
		{ x: 540, y: 155, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 300, y: 135, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 300, y: 195, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 600, y: 195, width: 30, height: 10, color: gameConfig.brickColor },
		{ x: 540, y: 195, width: 40, height: 10, color: gameConfig.brickColor },
		{ x: 210, y: 105, width: 10, height: 10, color: gameConfig.brickColor },
		{ x: 180, y: 95, width: 30, height: 10, color: gameConfig.brickColor } ];
	return blocks;
}

export function getLevel(){
	
	var grid	=	{x:6, y: 5};
	var hue 	=	0;
	var blocks	=	[];

	for(var i = 0; i < grid.x; i++)
	{
		for(var t = 0; t < grid.y; t++)
		{
			if(hue < 360){
				hue += 50;
			}else{
				hue = 0;
			}

			var brick = {x		: 	i * 100 - (grid.x * 100)/2 + 50,
						 y		: 	40 + t * 20,
						 width 	: 	100,
						 height	: 	20,
						 color 	: 	"hsla("+ hue +", 50%, 50%, 1)"};

			blocks.push(brick);
		}
	}
	
	return blocks;
}