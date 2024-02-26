// класс для всех переменных
class Config {
  canvas = {
    id: "game",
    width: 480,
    height: 320,
  };

  spritesheet = {
    width: 606,
    height: 428,
    src: "./assets/spritesheet.png",
  };

  gravity = 300;

  speedGame = 1;

  score = 0;
  // когда труба оказывается на этой отметке, увеличиваем счет
  scoreX = 40;
  myRecord = 0;
  // окно подсчета очков
  scoreOnScreen = {
    x: this.canvas.width - 70,
    y: this.canvas.height - 100,
    width: 60,
    height: 90,
    frames: [
      {
        x: 246,
        y: 277,
        w: 84,
        h: 116,
      },
    ],
  };
  //кнопка рестарт
  restartBtn = {
    x: this.canvas.width / 2 - this.canvas.width / 10,
    y: this.canvas.height - 60,
    width: this.canvas.width / 5,
    height: this.canvas.height / 9,
    frames: [
      {
        x: 310,
        y: 112,
        w: 82,
        h: 28,
      },
    ],
  };
  //задний фон
  background = {
    x: 0,
    y: 0,
    width: this.canvas.width,
    height: this.canvas.height,
    frames: [
      {
        x: 0,
        y: 0,
        w: 274,
        h: 228,
      },
    ],
  };
  //земля
  backgroundBottom = {
    x: 0,
    y: this.canvas.height - 20,
    width: this.canvas.width,
    height: 110,
    frames: [
      {
        x: 276,
        y: 2,
        w: 224,
        h: 110,
      },
    ],
  };
  // переменная для подсчета поворота птицы при полете
  rotation = 0;
  // переменная для подсчета угла поворота
  degree = Math.PI / 180;
  //птица
  bird = {
    x: 50,
    y: 100,
    width: 34,
    height: 25,

    flapSpeed: 150,

    frames: [
      {
        x: 277,
        y: 112,
        w: 32,
        h: 26,
      },
      {
        x: 277,
        y: 139,
        w: 32,
        h: 26,
      },
      {
        x: 277,
        y: 164,
        w: 32,
        h: 26,
      },
      {
        x: 277,
        y: 139,
        w: 32,
        h: 26,
      },
    ],
  };
  // труба
  pipe = {
    pipes: [],

    x: this.canvas.width,
    y: 0,
    width: this.bird.width * 2,
    height: 400,

    frames: [
      {
        x: 502,
        y: 0,
        w: 52,
        h: 400,
      },
      {
        x: 555,
        y: 0,
        w: 52,
        h: 400,
      },
    ],
  };
  // ширина пролета между трубами
  pipeGap = this.pipe.height / 4;
  // переменные необходимые для расчета высоты появления труб
  pipeMin = 154;
  pipeMax = 270;
  // расстояние между соседними трубами
  pipeNext = this.pipe.width * 3;

  //экран getReady
  getReadyBG = {
    x: 140,
    y: 100,
    width: 200,
    height: 200,
    frames: [
      {
        x: 0,
        y: 229,
        w: 173,
        h: 200,
      },
    ],
  };
  // экран gameOver
  gameOverBG = {
    x: 102,
    y: 50,
    width: 300,
    height: 200,
    frames: [
      {
        x: 174,
        y: 229,
        w: 250,
        h: 160,
      },
    ],
  };
}
