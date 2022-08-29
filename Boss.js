/**
@extends Opponent
*/
class Boss extends Opponent {
     /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */

    constructor (game) {
        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = OPPONENT_SPEED * 5,
            myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);        
        this.direction = "R";
        //setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
        
    }






}
