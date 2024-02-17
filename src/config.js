class Config {
  gravity = 300;

  speedGame = 6.2;

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

  background = {
    x: 0,
    y: 0,
    width: this.canvas.width,
    height: this.canvas.height,
    frames: [
      {
        x: 0,
        y: 0,
        w: 275,
        h: 228,
      },
    ],
  };

  backgroundBottom = {
    x: 0,
    y: 300,
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

  pipeGap = 104;

  pipe = {
    x: 0,
    y: 0,
    width: 68,
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

  bird = {
    x: 50,
    y: 100,
    width: 34,
    height: 26,

    flapSpeed: 150,

    frames: [
      {
        x: 276,
        y: 112,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 139,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 164,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 139,
        w: 34,
        h: 26,
      },
    ],
  };
}
