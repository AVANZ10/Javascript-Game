import Sprite from "./sprite.js";
import conf from "../config.js";
import Vector2D from "./vector2d.js";

class Fireball extends Sprite{
	constructor(positionX, positionY){
		super(conf.FIREBALL_SRC, 360, 360, 6, 1, 100, 100, 
			positionX,  positionY);
	}
	collision(other) {
		console.log(other)
        if(this.intersection(new Vector2D(this.position.x + this.width , this.position.y), other) || 
        this.intersection(new Vector2D(this.position.x + this.width , this.position.y), other) ||
        this.intersection(new Vector2D(this.position.x + this.width , this.position.y - this.height), other) ||
        this.intersection(new Vector2D(this.position.x , this.position.y - this.height), other) 
        ){
            return true;
        }
        return false;
    }
}

export default Fireball