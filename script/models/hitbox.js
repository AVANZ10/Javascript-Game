import Vector2D from "./vector2d.js";

class Hitbox {
    position;
    width;
    height;

    constructor(x, y, width, height) {
        this.position = new Vector2D(x, y);
        this.height = height;
        this.width = width;
    }

    intersection(point , area){
        console.log(area)
        if(point.x <= area.position.x + area.width && point.x >= area.position.x
            && point.y <= area.position.y  + area.height && point.y <= area.position.y ){
                return true;
        }
        return false;
    }
    


    draw(ctx){
        ctx.lineWidth = "4";
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x, ctx.canvas.height - this.position.y, this.width, this.height);
    }



}

export default Hitbox; 