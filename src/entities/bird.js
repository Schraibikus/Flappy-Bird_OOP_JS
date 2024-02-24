class Bird extends Entity {
  constructor(params) {
    super(params);
    this._flapSpeed = params.flapSpeed;
    this._physicsEngine = params.physicsEngine;
    this.falling = true;
    this._rotation = params.rotation;
    this._degree = params.degree;
    // console.log("Bird params", params);
  }

  //обновляем птичку
  update(delta) {
    super.update(delta);

    this._physicsEngine.update(this, delta);

    // проверяем что птичка не поднялась за пределы экрана
    if (this.y < 0) {
      this.y = 0;
    }
    //проверка на столкновение с землей
    if (this.y + this.height >= this._game._backgroundBottom.y) {
      // console.log("Смерть от падения");
      this._game.gameOver();
    }

    if (this.speed >= this._flapSpeed) {
      this._rotation = 45 * this._degree;
      this._frameIdx = 0;
    } else {
      this._rotation = -25 * this._degree;
    }
  }

  draw() {
    this._spriteSheet.then((sprites) => {
      this._drawEngine._context.save();
      this._drawEngine._context.translate(this.x, this.y);
      this._drawEngine._context.rotate(this._rotation);
      this._drawEngine.drawImage({
        spriteSheet: sprites,
        image: this._frames[this._frameIdx],
        x: 0,
        y: 0,
        width: this.width,
        height: this.height,
      });
      this._drawEngine._context.restore();
    });
  }

  //движение вверх
  flap() {
    this.speed = -this._flapSpeed;
  }
}
