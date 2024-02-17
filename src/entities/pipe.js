class Pipe extends Entity {
  constructor(params) {
    super(params);
    this._index = 0;
    this._speedGame = params.speedGame;
    this._minTallBottomTube = 300;
    this._maxTallBottomTube = 140;
    this._pipeGap = this.height + params.pipeGap;
    console.log("Pipe params", params);
  }

  update(delta) {
    this._index += 25 * delta;

    // x-coordinate calculation
    this.x =
      -(
        ((this._index * this._speedGame) % this._game.width) *
        ((this._game.width + this.width) / this._game.width)
      ) + this._game.width;

    //y-coordinate calculation
    if (this.x > this._game.width - 1 || this.x < -this.width) {
      this.y =
        this._minTallBottomTube +
        Math.random() * (this._maxTallBottomTube + 1 - this._minTallBottomTube);
    }
  }

  draw() {
    this._spriteSheet.then((sprites) => {
      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[0],
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      });
      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[1],
        x: this.x,
        y: this.y - this._pipeGap,
        width: this.width,
        height: this.height,
      });
    });
  }
}
