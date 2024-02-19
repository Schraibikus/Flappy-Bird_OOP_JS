class Game {
  constructor() {
    this._config = new Config();

    this._canvas = document.getElementById(this._config.canvas.id);
    this._canvas.width = this._config.canvas.width;
    this._canvas.height = this._config.canvas.height;

    this.width = this._config.canvas.width;
    this.height = this._config.canvas.height;

    this._drawEngine = new CanvasDrawEngine({ canvas: this._canvas });
    this._physicsEngine = new PhysicsEngine({ gravity: this._config.gravity });
    this._resourceLoader = new ResourceLoader();
    this._inputHandler = new MouseInputHandler({
      left: () => {
        this._bird.flap();
      },
    });
  }

  async prepare() {
    this._spriteSheet = this._resourceLoader.load({
      type: RESOURSE_TYPE.IMAGE,
      src: this._config.spritesheet.src,
      width: this._config.spritesheet.width,
      height: this._config.spritesheet.height,
    });
  }

  reset() {
    this._score = 0;

    this._background = new Background({
      x: this._config.background.x,
      y: this._config.background.y,
      width: this._config.background.width,
      height: this._config.background.height,
      frames: this._config.background.frames,
      spriteSheet: this._spriteSheet,
      speedGame: this._config.speedGame,
      drawEngine: this._drawEngine,
      game: this,
    });

    this._backgroundBottom = new BackgroundBottom({
      x: this._config.backgroundBottom.x,
      y: this._config.backgroundBottom.y,
      width: this._config.backgroundBottom.width,
      height: this._config.backgroundBottom.height,
      frames: this._config.backgroundBottom.frames,
      spriteSheet: this._spriteSheet,
      speedGame: this._config.speedGame,
      drawEngine: this._drawEngine,
      game: this,
    });

    this._bird = new Bird({
      x: this._config.bird.x,
      y: this._config.bird.y,
      width: this._config.bird.width,
      height: this._config.bird.height,
      frames: this._config.bird.frames,
      spriteSheet: this._spriteSheet,
      flapSpeed: this._config.bird.flapSpeed,
      physicsEngine: this._physicsEngine,
      drawEngine: this._drawEngine,
      game: this,
    });

    this._pipe = new Pipe({
      x: this._config.pipe.x,
      y: this._config.pipe.y,
      width: this._config.pipe.width,
      height: this._config.pipe.height,
      frames: this._config.pipe.frames,
      spriteSheet: this._spriteSheet,
      speedGame: this._config.speedGame,
      drawEngine: this._drawEngine,
      pipeGap: this._config.pipeGap,
      pipes: this._config.pipe.pipes,
      pipeMin: this._config.pipeMin,
      pipeMax: this._config.pipeMax,
      pipeNext: this._config.pipeNext,
      game: this,
    });
  }

  update(delta) {
    this._background.update(delta);
    this._backgroundBottom.update(delta);
    this._bird.update(delta);
  }

  draw() {
    this._background.draw();
    this._backgroundBottom.draw();
    this._pipe.draw();
    this._bird.draw();
  }

  _loop() {
    const now = Date.now();
    const delta = now - this._lastUpdate;

    this.update(delta / 1000);

    if (this._playing) {
      this._drawEngine.clear();
      this.draw();

      this._lastUpdate = now;

      requestAnimationFrame(this._loop.bind(this));
    }
  }

  start() {
    this._playing = true;
    this._inputHandler.subscribe();
    this._lastUpdate = Date.now();
    this.reset();
    this._loop();
  }

  gameOver() {
    this._playing = false;
    console.log(`Game over: ${this._score}`);
  }
}
