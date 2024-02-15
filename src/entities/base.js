class Entity {
  constructor({ x, y, width, height, frames, spriteSheet, drawEngine, game }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.falling = false;

    this._frames = frames;
    this._frameIdx = 0;
    this._spriteSheet = spriteSheet;
    this._drawEngine = drawEngine;
    this._game = game;
    console.log("Entity x", x);
    console.log("Entity y", y);
    // console.log("Entity frames", frames);
    // console.log("Entity width", width);
  }

  draw() {
    // пытаюсь отрисовать фон
    this._drawEngine.drawImage({
      spriteSheet: this._spriteSheet,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    });
    // рисуем птицу
    this._drawEngine.drawImage({
      spriteSheet: this._spriteSheet,
      image: this._frames[this._frameIdx],
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    });
    console.log("Entity draw x", this.x);
    console.log("Entity draw y", this.y);
    // console.log("Entity draw width", this.width);
    // console.log("Entity draw height", this.height);
  }

  update(delta) {
    this._frameIdx = (this._frameIdx + Math.ceil(delta)) % 4;
  }
}
