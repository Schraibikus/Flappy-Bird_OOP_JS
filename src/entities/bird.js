class Bird extends Entity {
  constructor(params) {
    super(params);
    this._flapSpeed = params.flapSpeed;
    this._physicsEngine = params.physicsEngine;
    this.falling = true;
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

    //для отладки, чтобы птица не падала
    if (this.y > this.height) {
      this.y = this.height;
    }

    // if (this.y + this.height >= this._game.height) {
    //   this._game.gameOver();
    // }
  }

  //движение вверх
  flap() {
    this.speed = -this._flapSpeed;
    const flap_sound = new Audio();
    flap_sound.src = "assets/audio/swoosh.wav";
  }
}
