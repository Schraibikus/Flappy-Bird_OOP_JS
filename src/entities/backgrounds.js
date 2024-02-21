class Background extends Entity {
  constructor(params) {
    super(params);
    this._index = 0;
    this._speedGame = params.speedGame;
  }

  update(delta) {
    this._index += 2.5 * Math.ceil(delta);
    this.x = -((this._index * (this._speedGame / 2)) % this.width);
  }

  draw() {
    this._spriteSheet.then((sprites) => {
      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[this._frameIdx],
        x: this.x + this.width,
        y: this.y,
        width: this.width,
        height: this.height,
      });
      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[this._frameIdx],
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      });
    });
  }
}

class BackgroundBottom extends Entity {
  constructor(params) {
    super(params);
    this._index = 0;
    this._speedGame = params.speedGame;
  }

  update(delta) {
    this._index += 5 * Math.ceil(delta);
    this.x = -((this._index * (this._speedGame / 2)) % this.width);
  }

  draw() {
    this._spriteSheet.then((sprites) => {
      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[this._frameIdx],
        x: this.x + this.width,
        y: this.y,
        width: this.width,
        height: this.height,
      });
      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[this._frameIdx],
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      });
    });
  }
}

class GetReadyBG extends Entity {
  constructor(params) {
    super(params);
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
    });
  }
}
class GameOverBG extends Entity {
  constructor(params) {
    super(params);
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
      this._drawEngine.drawText({
        x: 220,
        y: 170,
        text: this._game._config.score,
      });
      this._drawEngine.drawText({
        x: 220,
        y: 230,
        text: this._game._config.myRecord,
      });
    });
  }
}

class ScoreOnScreen extends Entity {
  constructor(params) {
    super(params);
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
      this._drawEngine.drawText({
        x: 425,
        y: 263,
        text: this._game._config.score,
      });
      this._drawEngine.drawText({
        x: 425,
        y: 298,
        text: this._game._config.myRecord,
      });
    });
  }
}

class RestartBtn extends Entity {
  constructor(params) {
    super(params);
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
    });
  }
}
