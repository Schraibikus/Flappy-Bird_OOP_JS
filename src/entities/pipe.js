class Pipe extends Entity {
  constructor(params) {
    super(params);
    this._index = 0;
    this._speedGame = params.speedGame;
    this._pipeGap = this.height + params.pipeGap;
    this._pipes = params.pipes;
    // this._random = params.random;
    console.log("Pipe params", params);
    this._pipes[0] = {
      x: this._game.width,
      y: Math.floor(Math.random() * 250), //тестовые значения
    };
  }

  update(delta) {
    this._index += Math.ceil(delta);
    if (this._index > this._game.width / 2) this._index = 0;
    // console.log("index", this._index);
  }

  draw() {
    // this._index++;

    for (let i = 0; i < this._pipes.length; i++) {
      this._spriteSheet.then((sprites) => {
        this._drawEngine.drawImage({
          spriteSheet: sprites,
          image: this._frames[0],
          x: this._pipes[i].x,
          y: this._pipes[i].y,
          width: this.width,
          height: this.height,
        });
        this._drawEngine.drawImage({
          spriteSheet: sprites,
          image: this._frames[1],
          x: this._pipes[i].x,
          y: this._pipes[i].y - this._pipeGap,
          width: this.width,
          height: this.height,
        });
      });
      this._pipes[i].x -= 3 /* * this._index */;
      // console.log("pipes[i].x", this._pipes[i].x);

      if (this._pipes[i].x + this.width < 0)
        this._pipes[i].x = this._game.width;
      if (this._pipes[i].x == 252) {
        this._pipes.push({
          x: this._game.width,
          y: Math.floor(Math.random() * (249 - 0 + 1)) + 0, //тестовые значения
        });
        // console.log("i", i);
        console.log(this._pipes);
      }
      if (this._pipes[i].x == -66) {
        this._pipes.shift();
      }
    }
  }
}
