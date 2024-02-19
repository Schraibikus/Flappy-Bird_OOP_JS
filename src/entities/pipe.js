class Pipe extends Entity {
  constructor(params) {
    super(params);
    this._index = 0;
    this._speedGame = params.speedGame;
    this._pipeGap = this.height + params.pipeGap;
    this._pipes = params.pipes;
    this._pipeMin = params.pipeMin;
    this._pipeMax = params.pipeMax;
    this._pipeNext = params.pipeNext;
    this._pipes[0] = {
      x: this._game.width,
      y: this.position(),
    };
    console.log("Pipe params", params);
  }

  update(delta) {}

  position(min, max) {
    min = Math.ceil(this._pipeMin);
    max = Math.floor(this._pipeMax);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  draw() {
    for (let i = 0; i < this._pipes.length; i++) {
      this._spriteSheet.then((sprites) => {
        this._drawEngine.drawImage({
          spriteSheet: sprites,
          image: this._frames[this._frameIdx],
          x: this._pipes[i].x,
          y: this._pipes[i].y,
          width: this.width,
          height: this.height,
        });
        this._drawEngine.drawImage({
          spriteSheet: sprites,
          image: this._frames[this._frameIdx + 1],
          x: this._pipes[i].x,
          y: this._pipes[i].y - this._pipeGap,
          width: this.width,
          height: this.height,
        });
      });
      this._pipes[i].x -= this._speedGame;
      if (this._speedGame == 3) this._pipeNext = 207;
      if (this._speedGame == 5) this._pipeNext = 210;
      if (this._pipes[i].x == this._pipeNext) {
        this._pipes.push({
          x: this._game.width,
          y: this.position(),
        });
      }
      if (this._pipes.length > 2) this._pipes.shift();
    }
  }
}
