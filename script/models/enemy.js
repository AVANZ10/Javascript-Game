import Vector2D from './vector2d.js';
import Clock from './clock.js';
import conf from '../config.js';
import Sprite from './sprite.js';
import Fireball from './fireball.js';
import Hitbox from './hitbox.js';

class Enemy extends Hitbox {
    name;
    score;
    velocity; // e non speed, mi raccomando
    hp304;
    currentImageIndex;
    images;
    moving;
    update_timer;

    constructor(enemies, images_srcs, name) {
        super(900, 215,165,175)
        this.enemies = enemies;
        this.name = name;
        this.deleted = false;
        // importo le immagini dello sprite_sheet nel vettore di immagini
        this.images = [];
        for(let src of images_srcs) {
            let img = new Image();
            img.src = src;
            this.images.push(img);
        }
        //  inizialmente uso la prima immagine
        this.currentImageIndex = 0; 
        this.hp304 = 165;
        this.score = 0;
        this.moving = false;
        this.update_timer = new Clock(125);
        this.canJump = true;
        this.bullets = [];
    }

    update(){
        this.update_timer.update();
        this.bullets.forEach((b) => b.update());
        if(this.hp304 <= 0) {
            this.enemies.splice(this.enemies.indexOf(this),1);
        }
        if(this.update_timer.tick()) {
            this.currentImageIndex += 1;
            this.currentImageIndex %= this.images.length;
        }

        this.position.x -= 1;
    }

    draw(ctx) {
        ctx.drawImage(this.images[this.currentImageIndex], this.position.x,
            ctx.canvas.clientHeight - this.position.y, 
            175, 175);
        ctx.strokeStyle = "white";
        ctx.strokeRect(this.position.x, (ctx.canvas.clientHeight - (this.position.y + 20)), 165, 20);
        (this.hp304 < 80) ? ctx.fillStyle = "orange" : ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, (ctx.canvas.clientHeight - (this.position.y + 20)), this.hp304, 20);
        ctx.font = "30px Verdana";
        ctx.fillStyle = "white";
        ctx.fillText(this.name, this.position.x + 50, (ctx.canvas.clientHeight - (this.position.y + 25)));
        this.bullets.forEach((b) => b.draw(ctx));

        super.draw(ctx);
    
    }
}

export default Enemy;