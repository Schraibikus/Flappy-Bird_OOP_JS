class Background extends Entity {
  constructor(params) {
    super(params);
    this._index = 0;
    this._SPEED_GAME = params.speedGame;
    console.log("Background params", params);
  }

  draw() {
    this._index += 0.6;

    const backgroundX = -((this._index * this._SPEEDGAME) % this.width);

    this._spriteSheet.then((sprites) => {
      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[this._frameIdx],
        x: backgroundX + this.width,
        y: this.y,
        width: this.width,
        height: this.height,
      });

      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[this._frameIdx],
        x: backgroundX,
        y: this.y,
        width: this.width,
        height: this.height,
      });
    });
  }
}
